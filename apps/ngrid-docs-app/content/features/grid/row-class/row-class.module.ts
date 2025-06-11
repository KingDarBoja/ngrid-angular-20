import { NgModule } from '@angular/core';
import { PblNgridModule } from '@perbula/ngrid';

import { BindNgModule } from '@perbula/apps/docs-app-lib';
import { ExampleCommonModule } from '@perbula/apps/docs-app-lib/example-common.module';
import { RowClassExample } from './row-class.component';

@NgModule({
  declarations: [ RowClassExample ],
  imports: [
    ExampleCommonModule,
    PblNgridModule,
  ],
  exports: [ RowClassExample ],
})
@BindNgModule(RowClassExample)
export class RowClassExampleModule { }
