import { Component, ViewEncapsulation } from '@angular/core';
import { PblColumn } from '@perbula/ngrid';

/**
 * Use to set the a default `pblNgridInfiniteVirtualRowDef` if the user did not set one.
 */
@Component({
  selector: 'pbl-ngrid-default-infinite-virtual-row',
  templateUrl: './default-infinite-virtual-row.component.html',
  styleUrls: ['./default-infinite-virtual-row.component.scss'],
  encapsulation: ViewEncapsulation.None,
  standalone: false,
})
export class PblNgridDefaultInfiniteVirtualRowComponent {
  protected createCell(column: PblColumn) {
  }

  protected destroyCell(column: PblColumn) {
  }
}
