import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PblNgridModule } from '@perbula/ngrid';
import { PblNgridBsSelectionModule } from '@perbula/ngrid-bootstrap/selection-column';

import { BindNgModule } from '@perbula/apps/docs-app-lib';
import { ExampleCommonModule } from '@perbula/apps/docs-app-lib/example-common.module';
import { PblNgridDocsAppBootstrapStylesModule } from '../bootstrap-styles.module';
import { SelectionColumnExample } from './selection-column.component';
import { BulkModeAndVirtualScrollExample } from './bulk-mode-and-virtual-scroll.component';

@NgModule({
  declarations: [ SelectionColumnExample, BulkModeAndVirtualScrollExample ],
  imports: [
    PblNgridDocsAppBootstrapStylesModule,
    CommonModule,
    ExampleCommonModule,
    PblNgridModule,
    PblNgridBsSelectionModule,
  ],
  exports: [ SelectionColumnExample, BulkModeAndVirtualScrollExample ],
})
@BindNgModule(SelectionColumnExample, BulkModeAndVirtualScrollExample)
export class SelectionColumnExampleModule { }
