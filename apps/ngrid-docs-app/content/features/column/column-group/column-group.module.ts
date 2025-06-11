import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PblNgridModule } from '@perbula/ngrid';

import { BindNgModule } from '@perbula/apps/docs-app-lib';
import { ExampleCommonModule } from '@perbula/apps/docs-app-lib/example-common.module';
import { ColumnGroupExample } from './column-group.component';
import { MultiHeaderColumnGroupExample } from './multi-header-column-group.component';

@NgModule({
  declarations: [ ColumnGroupExample, MultiHeaderColumnGroupExample ],
  imports: [
    CommonModule,
    ExampleCommonModule,
    PblNgridModule,
  ],
  exports: [ ColumnGroupExample, MultiHeaderColumnGroupExample ],
})
@BindNgModule(ColumnGroupExample, MultiHeaderColumnGroupExample)
export class ColumnGroupExampleModule { }
