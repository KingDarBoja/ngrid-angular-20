import { NgModule } from '@angular/core';
import { PblNgridModule } from '@perbula/ngrid';

import { BindNgModule } from '@perbula/apps/docs-app-lib';
import { ExampleCommonModule } from '@perbula/apps/docs-app-lib/example-common.module';
import { ColumnsFactoryExample } from './factory.component';

@NgModule({
  declarations: [ ColumnsFactoryExample ],
  imports: [
    ExampleCommonModule,
    PblNgridModule,
  ],
  exports: [ ColumnsFactoryExample ],
})
@BindNgModule(ColumnsFactoryExample)
export class ColumnsFactoryExampleModule { }

