import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  OnDestroy,
  ViewEncapsulation,
  ViewContainerRef,
  ViewChild,
  Injector,
  ChangeDetectorRef,
  ElementRef,
  Inject,
  Optional,
} from '@angular/core';
import { ENTER, SPACE } from '@angular/cdk/keycodes';
import { CdkRow } from '@angular/cdk/table';

import { unrx } from '@perbula/ngrid/core';
import {
  PblNgridRowComponent,
  PblNgridComponent,
  PblNgridExtensionApi,
  EXT_API_TOKEN,
} from '@perbula/ngrid';
import { PblDetailsRowToggleEvent, PLUGIN_KEY } from './tokens';
import { DetailRowController } from './detail-row-controller';

declare module '@perbula/ngrid/lib/grid/context/types' {
  interface ExternalRowContextState {
    detailRow: boolean;
  }
}

export const PBL_NGRID_ROW_TEMPLATE =
  '<ng-content select=".pbl-ngrid-row-prefix"></ng-content><ng-container #viewRef></ng-container><ng-content select=".pbl-ngrid-row-suffix"></ng-content>';

@Component({
  selector: 'pbl-ngrid-row[detailRow]',
  exportAs: 'pblNgridDetailRow',
  host: {
    // tslint:disable-line:no-host-metadata-property
    class: 'pbl-ngrid-row pbl-row-detail-parent',
    role: 'row',
    '[attr.tabindex]': 'grid.rowFocus',
    '(keydown)': 'handleKeydown($event)',
  },
  template: PBL_NGRID_ROW_TEMPLATE,
  styles: [
    `
      .pbl-row-detail-parent {
        position: relative;
        cursor: pointer;
      }
    `,
  ],
  providers: [{ provide: CdkRow, useExisting: PblNgridDetailRowComponent }],
  standalone: false,
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class PblNgridDetailRowComponent
  extends PblNgridRowComponent
  implements OnInit, OnDestroy, PblDetailsRowToggleEvent
{
  get expended(): boolean {
    return this.opened;
  }

  get height() {
    return super.height + this.controller.getDetailRowHeight(this);
  }

  get row() {
    return this.context.$implicit;
  }

  // We must explicitly define the inherited properties which have angular annotations
  // Because angular will not detect them when building this library.
  // TODO: When moving up to IVY see if this one get fixed
  @ViewChild('viewRef', { read: ViewContainerRef, static: true })
  _viewRef: ViewContainerRef = undefined!;

  private opened = false;
  private plugin: import('./detail-row-plugin').PblNgridDetailRowPluginDirective<any>;
  private controller: DetailRowController;

  constructor(
    @Inject(PblNgridComponent) @Optional() grid: PblNgridComponent,
    cdRef: ChangeDetectorRef,
    @Inject(EXT_API_TOKEN) extApi: PblNgridExtensionApi,
    injector: Injector,
    el: ElementRef<HTMLElement>,
  ) {
    super(grid, cdRef, extApi as any, injector, el);
    this.plugin = (this._extApi.pluginCtrl as any).getPlugin(PLUGIN_KEY);
    if (this.plugin) {
      this.controller = this.plugin.detailRowCtrl;
    }
  }

  ngOnInit(): void {
    super.ngOnInit();
    if (this.plugin) {
      this.plugin.addDetailRow(this);
      const tradeEvents = (this._extApi.pluginCtrl as any).getPlugin(
        'targetEvents',
      );

      tradeEvents.cellClick.pipe(unrx(this)).subscribe((event) => {
        if (event.type === 'data' && event.row === this.context.$implicit) {
          const { excludeToggleFrom } = this.plugin;
          if (
            !excludeToggleFrom ||
            !excludeToggleFrom.some((c) => event.column.id === c)
          ) {
            this.toggle();
          }
        }
      });

      tradeEvents.rowClick.pipe(unrx(this)).subscribe((event) => {
        if (
          !event.root &&
          event.type === 'data' &&
          event.row === this.context.$implicit
        ) {
          this.toggle();
        }
      });
    }
  }

  ngOnDestroy(): void {
    unrx.kill(this);
    if (this.plugin) {
      this.plugin.removeDetailRow(this);
    }
    if (this.controller) {
      this.controller.clearDetailRow(this, true);
    }
    super.ngOnDestroy();
  }

  updateRow() {
    if (super.updateRow()) {
      // Always destroy and recreate the detail row view when the context changes (row is recycled)
      if (this.opened) {
        this.controller.clearDetailRow(this, true);
        this.opened = false;
        this.element.classList.remove('pbl-row-detail-opened');
        this.context.setExternal('detailRow', false, true);
      }
      if (this.plugin) {
        switch (this.plugin.whenContextChange) {
          case 'context':
            const isContextOpened = !!this.context.getExternal('detailRow');
            if (isContextOpened) {
              // Always re-render the detail row for the new context
              this.controller.render(this, true);
              this.opened = true;
              this.element.classList.add('pbl-row-detail-opened');
              this.context.setExternal('detailRow', true, true);
              this.plugin.detailRowToggled(this);
              // Force re-measure of the viewport to fix layout
              if (
                this.grid &&
                this.grid.viewport &&
                this.grid.viewport.reMeasureCurrentRenderedContent
              ) {
                this.grid.viewport.reMeasureCurrentRenderedContent();
              }
            }
            break;
          case 'render':
            // Optionally re-open if needed (if you want to preserve open state across context changes)
            break;
          case 'close':
            // Already closed above
            break;
        }
        this.plugin.markForCheck();
        this.controller.detectChanges(this);
        this.plugin.toggledRowContextChange.next(this);
      }
      return true;
    }
    return false;
  }

  toggle(forceState?: boolean, fromRender = false): void {
    if (this.opened !== forceState) {
      let opened = false;
      if (this.opened) {
        this.controller.clearDetailRow(this, fromRender);
        this.element.classList.remove('pbl-row-detail-opened');
      } else if (this.controller.render(this, fromRender)) {
        opened = true;
        this.element.classList.add('pbl-row-detail-opened');
      }

      if (this.opened !== opened) {
        this.opened = opened;
        this.context.setExternal('detailRow', opened, true);
        if (this.plugin) {
          this.plugin.detailRowToggled(this);
        }
      }
    }
  }

  /**
   * @internal
   */
  handleKeydown(event: KeyboardEvent): void {
    if (event.target === this.element) {
      const keyCode = event.keyCode;
      const isToggleKey = keyCode === ENTER || keyCode === SPACE;
      if (isToggleKey) {
        event.preventDefault(); // prevents the page from scrolling down when pressing space
        this.toggle();
      }
    }
  }
}
