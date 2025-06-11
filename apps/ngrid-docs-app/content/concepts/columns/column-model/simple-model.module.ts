import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PblNgridModule } from '@perbula/ngrid';

import { BindNgModule } from '@perbula/apps/docs-app-lib';
import { ExampleCommonModule } from '@perbula/apps/docs-app-lib/example-common.module';
import { ColumnsSimpleModelExample } from './simple-model.component';

@NgModule({
  declarations: [ ColumnsSimpleModelExample ],
  imports: [
    CommonModule,
    ExampleCommonModule,
    PblNgridModule,
  ],
  exports: [ ColumnsSimpleModelExample ],
})
@BindNgModule(ColumnsSimpleModelExample)
export class ColumnsSimpleModelExampleModule { }
