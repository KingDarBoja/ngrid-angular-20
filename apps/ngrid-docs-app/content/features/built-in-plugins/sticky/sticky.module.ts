import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PblNgridModule } from '@perbula/ngrid';
import { PblNgridStickyModule } from '@perbula/ngrid/sticky';

import { BindNgModule } from '@perbula/apps/docs-app-lib';
import { ExampleCommonModule } from '@perbula/apps/docs-app-lib/example-common.module';
import { StickyExample } from './sticky.component';
import { RowColumnDefinitionsExample } from './row-column-definitions.component';
import { RowWithDirectivesExample } from './row-with-directives.component';
import { RowMultiHeaderExample } from './row-multi-header.component';
import { ColumnWithDirectivesExample } from './column-with-directives.component';
import { ColumnMixSetupExample } from './column-mix-setup.component';

@NgModule({
  declarations: [ StickyExample, RowColumnDefinitionsExample, RowWithDirectivesExample, RowMultiHeaderExample, ColumnWithDirectivesExample, ColumnMixSetupExample ],
  imports: [
    CommonModule,
    ExampleCommonModule,
    PblNgridModule, PblNgridStickyModule,
  ],
  exports: [ StickyExample, RowColumnDefinitionsExample, RowWithDirectivesExample, RowMultiHeaderExample, ColumnWithDirectivesExample, ColumnMixSetupExample ],
})
@BindNgModule(StickyExample, RowColumnDefinitionsExample, RowWithDirectivesExample, RowMultiHeaderExample, ColumnWithDirectivesExample, ColumnMixSetupExample)
export class StickyExampleModule { }
