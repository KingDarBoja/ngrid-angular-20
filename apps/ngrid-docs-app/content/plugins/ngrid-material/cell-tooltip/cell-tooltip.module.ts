import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PblNgridModule } from '@perbula/ngrid';
import { PblNgridCellTooltipModule } from '@perbula/ngrid-material/cell-tooltip';
import { PblNgridBlockUiModule } from '@perbula/ngrid/block-ui';

import { BindNgModule } from '@perbula/apps/docs-app-lib';
import { ExampleCommonModule } from '@perbula/apps/docs-app-lib/example-common.module';
import { CellTooltipExample } from './cell-tooltip.component';
import { CustomSetupExample } from './custom-setup.component';

@NgModule({
  declarations: [ CellTooltipExample, CustomSetupExample ],
  imports: [
    CommonModule,
    ExampleCommonModule,
    PblNgridModule, PblNgridBlockUiModule, PblNgridCellTooltipModule,
  ],
  exports: [ CellTooltipExample, CustomSetupExample ],
})
@BindNgModule(CellTooltipExample, CustomSetupExample)
export class CellTooltipExampleModule { }
