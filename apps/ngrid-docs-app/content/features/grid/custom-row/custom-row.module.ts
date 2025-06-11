import { NgModule } from '@angular/core';
import { PblNgridModule } from '@perbula/ngrid';

import { BindNgModule } from '@perbula/apps/docs-app-lib';
import { ExampleCommonModule } from '@perbula/apps/docs-app-lib/example-common.module';
import { CustomRowExample } from './custom-row.component';

@NgModule({
  declarations: [ CustomRowExample ],
  imports: [
    ExampleCommonModule,
    PblNgridModule,
  ],
  exports: [ CustomRowExample ],
})
@BindNgModule(CustomRowExample)
export class CustomRowExampleModule { }
