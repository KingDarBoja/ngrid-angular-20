import { Directive, Input, OnInit } from '@angular/core';
import {
  DragDrop,
  CdkDragStart,
  CDK_DRAG_PARENT,
} from '@angular/cdk/drag-drop';

import { PblNgridPluginController, PblNgridCellContext } from '@perbula/ngrid';
import { PblDragDrop, CdkLazyDrag } from '../core/index';
import {
  PblNgridRowReorderPluginDirective,
  ROW_REORDER_PLUGIN_KEY,
} from './row-reorder-plugin';

@Directive({
  selector: '[pblNgridRowDrag]',
  exportAs: 'pblNgridRowDrag',
  host: {
    // tslint:disable-line:no-host-metadata-property
    class: 'cdk-drag',
    '[class.cdk-drag-dragging]': '_dragRef.isDragging()',
  },
  standalone: false,
  providers: [
    { provide: DragDrop, useExisting: PblDragDrop },
    { provide: CDK_DRAG_PARENT, useExisting: PblNgridRowDragDirective },
  ],
})
export class PblNgridRowDragDirective<T = any>
  extends CdkLazyDrag<T, PblNgridRowReorderPluginDirective<T>>
  implements OnInit
{
  rootElementSelector = 'pbl-ngrid-row';

  get context(): PblNgridCellContext<T> {
    return this._context;
  }

  @Input('pblNgridRowDrag') set context(value: PblNgridCellContext<T>) {
    this._context = value;

    if (value) {
      const pluginCtrl = (this.pluginCtrl = PblNgridPluginController.find(
        value.grid,
      ));
      const plugin = pluginCtrl?.getPlugin(ROW_REORDER_PLUGIN_KEY);
      this.cdkDropList = plugin || undefined;

      if (!plugin) {
        console.warn('PblNgridRowDragDirective: Row reorder plugin not found');
      }
    } else {
      console.warn('PblNgridRowDragDirective: context is null or undefined');
      this.cdkDropList = undefined;
    }
  }

  /**
   * Reference to the last dragged context.
   *
   * This context is not similar to the `context` property.
   * The `context` property holds the current context which is shared and updated on scroll so if a user start a drag and then scrolled
   * the context will point to the row in view and not the original cell.
   */
  get draggedContext(): Pick<PblNgridCellContext<T>, 'col' | 'grid'> &
    Partial<Pick<PblNgridCellContext<T>, 'row' | 'value'>> {
    return this._draggedContext;
  }

  private _context: PblNgridCellContext<T>;
  private _draggedContext: Pick<PblNgridCellContext<T>, 'col' | 'grid'> &
    Partial<Pick<PblNgridCellContext<T>, 'row' | 'value'>>;

  private pluginCtrl: PblNgridPluginController;

  ngOnInit(): void {
    this.started.subscribe((event: CdkDragStart) => {
      if (this._context) {
        const { col, row, grid, value } = this._context;
        this._draggedContext = { col, row, grid, value };
      } else {
        console.warn(
          'PblNgridRowDragDirective: context is undefined when drag started',
        );
      }
    });

    // Handle end of drag to ensure element stays in correct position
    this.ended.subscribe((event) => {
      // Use multiple timing strategies to ensure restoration
      const restoreElement = () => {
        const rootElement = this.getRootElement();
        const grid = this._context?.grid;

        if (rootElement && grid) {
          // Get the grid's element reference - try different ways to access it
          let gridElement: HTMLElement | null = null;

          if ((grid as any)._element?.nativeElement) {
            gridElement = (grid as any)._element.nativeElement;
          } else if ((grid as any).viewport?.element) {
            const viewportEl = (grid as any).viewport.element;
            gridElement = viewportEl.nativeElement || viewportEl;
          } else if ((grid as any).element) {
            const el = (grid as any).element;
            gridElement = el.nativeElement || el;
          }

          // Check if element is in body (the main issue you described)
          const isInBody =
            document.body.contains(rootElement) &&
            rootElement.parentElement === document.body;

          // If the dragged row has been moved outside the grid OR is directly in body, move it back
          if (gridElement && (!gridElement.contains(rootElement) || isInBody)) {
            console.warn(
              'PblNgridRowDragDirective: Row moved outside grid or to body, restoring position',
            );

            // Find the table body or scroll container to append the row back
            const scrollContainer = gridElement.querySelector(
              '.pbl-ngrid-scroll-container',
            );
            const tableBody =
              scrollContainer?.querySelector('.cdk-table') || scrollContainer;

            if (tableBody) {
              tableBody.appendChild(rootElement);
            } else {
              // Fallback: append to grid element directly
              gridElement.appendChild(rootElement);
            }

            // Force a style reset to ensure proper positioning
            rootElement.style.transform = '';
            rootElement.style.position = '';
            rootElement.style.zIndex = '';
          }
        }
      };

      // Try immediate restoration
      restoreElement();

      // Also try after a short delay in case CDK is still processing
      setTimeout(restoreElement, 10);

      // Final fallback after longer delay
      setTimeout(restoreElement, 100);
    });

    super.ngOnInit();
  }
}
