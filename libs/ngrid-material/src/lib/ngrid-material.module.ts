import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PblNgridCheckboxModule } from '@perbula/ngrid-material/selection-column';
import { PblNgridPaginatorModule } from '@perbula/ngrid-material/paginator';
import { PblNgridMatSortModule } from '@perbula/ngrid-material/sort';
import { PblNgridCellTooltipModule } from '@perbula/ngrid-material/cell-tooltip';
import { PblNgridContextMenuModule } from '@perbula/ngrid-material/context-menu';

@NgModule({
  imports: [
    CommonModule,
    PblNgridCheckboxModule,
    PblNgridPaginatorModule,
    PblNgridMatSortModule,
    PblNgridCellTooltipModule,
    PblNgridContextMenuModule,
  ],
  exports: [
    PblNgridCheckboxModule,
    PblNgridPaginatorModule,
    PblNgridMatSortModule,
    PblNgridCellTooltipModule,
    PblNgridContextMenuModule,
  ]
})
export class PblNgridMaterialModule { }
