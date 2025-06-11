import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonToggleModule } from '@angular/material/button-toggle';

import { PblNgridModule } from '@perbula/ngrid';
import { PblNgridBlockUiModule } from '@perbula/ngrid/block-ui';
import { PblNgridStickyModule } from '@perbula/ngrid/sticky';
import { PblNgridCheckboxModule } from '@perbula/ngrid-material/selection-column';

import { BindNgModule } from '@perbula/apps/docs-app-lib';
import { ExampleCommonModule } from '@perbula/apps/docs-app-lib/example-common.module';
import { SelectionColumnExample } from './selection-column.component';
import { BulkModeAndVirtualScrollExample } from './bulk-mode-and-virtual-scroll.component';
import { CheckboxColorExample } from './checkbox-color.component';

@NgModule({
  declarations: [ SelectionColumnExample, BulkModeAndVirtualScrollExample, CheckboxColorExample ],
  imports: [
    CommonModule,
    MatButtonToggleModule,
    ExampleCommonModule,
    PblNgridModule, PblNgridBlockUiModule, PblNgridStickyModule, PblNgridCheckboxModule,
  ],
  exports: [ SelectionColumnExample, BulkModeAndVirtualScrollExample, CheckboxColorExample ],
})
@BindNgModule(SelectionColumnExample, BulkModeAndVirtualScrollExample, CheckboxColorExample)
export class SelectionColumnExampleModule { }
