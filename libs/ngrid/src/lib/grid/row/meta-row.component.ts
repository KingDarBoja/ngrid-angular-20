import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  Inject,
  Input,
  ViewEncapsulation,
  Optional,
  Attribute,
  ComponentRef,
  ChangeDetectorRef,
  OnInit,
  OnDestroy,
  Injector,
} from '@angular/core';
import { CdkHeaderRow } from '@angular/cdk/table';
import { PblMetaRowDefinitions } from '@perbula/ngrid/core';

import { _PblNgridComponent, PBL_NGRID_COMPONENT } from '../../tokens';
import { PblNgridMetaCellComponent } from '../cell/meta-cell.component';
import {
  PblNgridBaseRowComponent,
  PBL_NGRID_BASE_ROW_TEMPLATE,
} from './base-row.component';
import { PblColumnGroup, PblMetaColumn } from '../column/model';
import {
  PblNgridMetaRowService,
  PblMetaRow,
} from '../meta-rows/meta-row.service';
import { PblColumnStoreMetaRow } from '../column/management';
import { applyMetaRowClass, initColumnOrMetaRow } from './utils';
import {
  EXT_API_TOKEN,
  PblNgridInternalExtensionApi,
} from '../../ext/grid-ext-api';

@Component({
  selector: 'pbl-ngrid-meta-row',
  template: PBL_NGRID_BASE_ROW_TEMPLATE,
  // tslint:disable-next-line: no-host-metadata-property
  host: {
    role: 'row',
  },
  providers: [{ provide: CdkHeaderRow, useExisting: PblNgridMetaRowComponent }],
  standalone: false,
  changeDetection: ChangeDetectionStrategy.Default,
  encapsulation: ViewEncapsulation.None,
})
export class PblNgridMetaRowComponent
  extends PblNgridBaseRowComponent<'meta-header' | 'meta-footer'>
  implements PblMetaRow, OnInit, OnDestroy
{
  get row() {
    return this._row;
  }
  @Input() set row(value: PblColumnStoreMetaRow) {
    this.updateRow(value);
  }

  get rowIndex(): number {
    return this._row.rowDef.rowIndex;
  }

  get meta(): PblMetaRowDefinitions {
    return this._meta;
  }
  set meta(value: PblMetaRowDefinitions) {
    this._meta = value;
  } // TODO: remove when removing pblMetaRow

  readonly rowType: 'meta-header' | 'meta-footer';
  readonly isFooter: boolean;
  readonly gridWidthRow: boolean = false;
  private _meta: PblMetaRowDefinitions;
  private _row: PblColumnStoreMetaRow;

  constructor(
    @Inject(PBL_NGRID_COMPONENT) @Optional() grid: _PblNgridComponent,
    cdRef: ChangeDetectorRef,
    @Inject(EXT_API_TOKEN) public extApi: PblNgridInternalExtensionApi,
    public injector: Injector,
    el: ElementRef<HTMLElement>,
    private readonly metaRows: PblNgridMetaRowService,
    @Attribute('footer') isFooter: any,
  ) {
    super(grid, cdRef, extApi, injector, el);
    this.isFooter = isFooter !== null;
    this.rowType = this.isFooter ? 'meta-footer' : 'meta-header';
  }

  ngOnInit(): void {
    super.ngOnInit();
    this.handleVisibility();
  }

  ngOnDestroy(): void {
    this.metaRows.removeMetaRow(this);
    super.ngOnDestroy();
  }

  protected onCtor() {}

  protected detectChanges() {
    for (const cell of this._cells) {
      // TODO: the cells are created through code which mean's that they don't belong
      // to the CD tree and we need to manually mark them for checking
      // We can customize the diffing, detect context changes internally and only trigger these cells which have changed!
      cell.changeDetectorRef.markForCheck();
    }
  }

  protected cellCreated(
    column: PblMetaColumn | PblColumnGroup,
    cell: ComponentRef<PblNgridMetaCellComponent>,
  ) {
    cell.instance.setColumn(column, this.isFooter);
  }

  protected cellDestroyed?(
    cell: ComponentRef<PblNgridMetaCellComponent>,
    previousIndex: number,
  ) {}

  protected cellMoved?(
    previousItem: ComponentRef<PblNgridMetaCellComponent>,
    currentItem: ComponentRef<PblNgridMetaCellComponent>,
    previousIndex: number,
    currentIndex: number,
  ) {}

  protected updateRow(value: PblColumnStoreMetaRow) {
    if (value !== this._row) {
      applyMetaRowClass(
        this.metaRows,
        this,
        this.element,
        this._meta,
        value?.rowDef,
      );
      if (this._row?.isGroup && this.element && this.element.classList) {
        this.element.classList.remove('pbl-meta-group-row');
      }
      if (value?.isGroup && this.element && this.element.classList) {
        this.element.classList.add('pbl-meta-group-row');
      }
      this._row = value;
    }
  }

  private handleVisibility() {
    initColumnOrMetaRow(this.element, this.isFooter);
    // TODO: add row visibility API like in columns and react to changes
    // - Remove showHeader showFooter inputs and move them to directives and inside let them use the API
  }
}
