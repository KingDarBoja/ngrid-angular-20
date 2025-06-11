import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PblNgridModule } from '@perbula/ngrid';

import { BindNgModule } from '@perbula/apps/docs-app-lib';
import { ExampleCommonModule } from '@perbula/apps/docs-app-lib/example-common.module';
import { ColumnWidthFeatureExample } from './column-width.component';
import { MinColumnWidthFeatureExample } from './min-column-width.component';

@NgModule({
  declarations: [ ColumnWidthFeatureExample, MinColumnWidthFeatureExample ],
  imports: [
    CommonModule,
    ExampleCommonModule,
    PblNgridModule,
  ],
  exports: [ ColumnWidthFeatureExample, MinColumnWidthFeatureExample ],
})
@BindNgModule(ColumnWidthFeatureExample, MinColumnWidthFeatureExample)
export class ColumnWidthFeatureExampleModule { }
