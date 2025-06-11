import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PblNgridModule } from '@perbula/ngrid';

import { BindNgModule } from '@perbula/apps/docs-app-lib';
import { ExampleCommonModule } from '@perbula/apps/docs-app-lib/example-common.module';
import { ColumnSortExample } from './column-sort.component';
import { ColumnSpecificSortingExample } from './column-specific-sorting.component';

@NgModule({
  declarations: [ ColumnSortExample, ColumnSpecificSortingExample ],
  imports: [
    CommonModule,
    ExampleCommonModule,
    PblNgridModule,
  ],
  exports: [ ColumnSortExample, ColumnSpecificSortingExample ],
})
@BindNgModule(ColumnSortExample, ColumnSpecificSortingExample)
export class ColumnSortExampleModule { }
