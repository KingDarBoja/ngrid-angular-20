import { PblNgridExtensionApi } from '@perbula/ngrid';
import { PblDropListRef } from '../core/drop-list-ref';
import { PblNgridRowReorderPluginDirective } from './row-reorder-plugin';
import { takeUntil } from 'rxjs/operators';

export class PblRowDropListRef<T = any> extends PblDropListRef<
  PblNgridRowReorderPluginDirective<T>
> {
  gridApi: PblNgridExtensionApi<T>;

  private scrollDif = 0;

  start(): void {
    super.start();
    this.scrollDif = 0;
    if (this.gridApi?.grid?.viewport?.enabled) {
      const initialTop = this.gridApi.grid.viewport.measureScrollOffset();
      this.gridApi.grid.viewport
        .elementScrolled()
        .pipe(takeUntil(this.dropped))
        .subscribe(() => {
          this.scrollDif =
            this.gridApi.grid.viewport.measureScrollOffset() - initialTop;
        });
    }

    // Subscribe to dropped events to fix DOM positioning
    this.dropped.subscribe((event) => {
      setTimeout(() => {
        const item = event.item;
        const draggedElement = item.getRootElement();
        const gridContainer =
          this.element instanceof HTMLElement
            ? this.element
            : this.element.nativeElement;

        // If the element has been moved outside the grid, move it back
        if (draggedElement && !gridContainer.contains(draggedElement)) {
          console.warn(
            'PblNgrid: Dragged row moved outside grid container, restoring position',
          );
          // Find the correct position based on the data index
          const rows = gridContainer.querySelectorAll('pbl-ngrid-row');
          if (rows.length > event.currentIndex) {
            gridContainer.insertBefore(
              draggedElement,
              rows[event.currentIndex],
            );
          } else {
            gridContainer.appendChild(draggedElement);
          }
        }
      }, 0);
    });
  }
}

export function patchDropListRef<T = any>(
  dropListRef: PblDropListRef<PblNgridRowReorderPluginDirective<T>>,
  gridApi: PblNgridExtensionApi<T>,
) {
  try {
    // First, ensure the dropListRef has all necessary methods from CDK before patching
    if (
      !dropListRef ||
      typeof (dropListRef as any)._draggingStarted !== 'function'
    ) {
      console.error('PblNgrid: Invalid dropListRef - missing CDK methods');
      return;
    }

    // Store original _draggingStarted method to bypass DOM validation
    const original_draggingStarted = (dropListRef as any)._draggingStarted;

    Object.setPrototypeOf(dropListRef, PblRowDropListRef.prototype);
    (dropListRef as unknown as PblRowDropListRef).gridApi = gridApi;

    // Override _draggingStarted to skip strict DOM validation for virtual scrolling
    (dropListRef as any)._draggingStarted = function () {
      try {
        return original_draggingStarted.call(this);
      } catch (error) {
        if (
          error.message &&
          error.message.includes('Invalid DOM structure for drop list')
        ) {
          console.warn(
            'PblNgrid: Bypassing CDK DOM validation for virtual scrolling compatibility',
          );
          // Manually set dragging state without validation
          this._isDragging = true;
          // Get current draggable items that are actually in the DOM
          this._activeDragItemsSnapshot = this.getSortedItems();
          return;
        }
        throw error;
      }
    };
  } catch (err) {
    console.warn(
      'PblNgrid: Prototype patching failed, using manual method assignment',
      err,
    );

    // Store reference to original start method
    const originalStart = dropListRef.start?.bind(dropListRef);
    const original_draggingStarted = (dropListRef as any)._draggingStarted;
    const scrollDifRef = { value: 0 };

    // Override _draggingStarted to bypass DOM validation
    (dropListRef as any)._draggingStarted = function () {
      try {
        return original_draggingStarted?.call(this);
      } catch (error) {
        if (
          error.message &&
          error.message.includes('Invalid DOM structure for drop list')
        ) {
          console.warn(
            'PblNgrid: Bypassing CDK DOM validation for virtual scrolling compatibility',
          );
          this._isDragging = true;
          this._activeDragItemsSnapshot = this.getSortedItems();
          return;
        }
        throw error;
      }
    };

    // Store original enterPredicate and sortPredicate
    const originalEnterPredicate = (dropListRef as any).enterPredicate;
    const originalSortPredicate = (dropListRef as any).sortPredicate;

    // Override enterPredicate to ensure elements stay within the grid
    (dropListRef as any).enterPredicate = function (drag: any, drop: any) {
      const gridContainer =
        this.element instanceof HTMLElement
          ? this.element
          : this.element.nativeElement;
      const dragElement = drag.getRootElement();

      // Only allow enters if the drag element is still within or belongs to this grid
      if (drop === this && gridContainer && dragElement) {
        return (
          gridContainer.contains(dragElement) ||
          originalEnterPredicate?.(drag, drop)
        );
      }
      return false;
    };

    // Override sortPredicate to ensure proper positioning within grid only
    (dropListRef as any).sortPredicate = function (
      index: number,
      drag: any,
      drop: any,
    ) {
      const gridContainer =
        this.element instanceof HTMLElement
          ? this.element
          : this.element.nativeElement;
      const dragElement = drag.getRootElement();

      // Only allow sorting if the element is within the grid container
      if (gridContainer && dragElement && gridContainer.contains(dragElement)) {
        return originalSortPredicate
          ? originalSortPredicate(index, drag, drop)
          : true;
      }
      return false;
    };

    // Override start method with scroll tracking and DOM restoration
    (dropListRef as any).start = function (): void {
      if (originalStart) {
        originalStart();
      }
      scrollDifRef.value = 0;
      if (gridApi?.grid?.viewport?.enabled) {
        const initialTop = gridApi.grid.viewport.measureScrollOffset();
        gridApi.grid.viewport
          .elementScrolled()
          .pipe(takeUntil(this.dropped))
          .subscribe(() => {
            scrollDifRef.value =
              gridApi.grid.viewport.measureScrollOffset() - initialTop;
          });
      }

      // Subscribe to dropped events to fix DOM positioning if needed
      this.dropped.subscribe((event: any) => {
        setTimeout(() => {
          const item = event.item;
          const draggedElement = item.getRootElement();
          const gridContainer =
            this.element instanceof HTMLElement
              ? this.element
              : this.element.nativeElement;

          // Only restore if element is completely outside the grid (in body or other container)
          if (
            draggedElement &&
            (draggedElement.parentNode === document.body ||
              !gridContainer.contains(draggedElement))
          ) {
            console.warn(
              'PblNgrid: Dragged row moved outside grid container, restoring position',
            );
            try {
              // Simple append to grid container - let the grid handle the correct positioning
              gridContainer.appendChild(draggedElement);
            } catch (error) {
              console.warn(
                'PblNgrid: Could not restore element position:',
                error,
              );
            }
          }
        }, 0);
      });
    };

    // Store the scroll difference for potential use by CDK internals
    (dropListRef as any).gridApi = gridApi;
    (dropListRef as any)._scrollDif = scrollDifRef;
  }
}
