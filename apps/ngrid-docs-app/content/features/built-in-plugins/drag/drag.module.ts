import { NgModule } from '@angular/core';
import { PblNgridModule } from '@perbula/ngrid';

import { BindNgModule } from '@perbula/apps/docs-app-lib';
import { ExampleCommonModule } from '@perbula/apps/docs-app-lib/example-common.module';
import { DragExample } from './drag.component';

@NgModule({
  declarations: [ DragExample ],
  imports: [
    ExampleCommonModule,
    PblNgridModule,
  ],
  exports: [ DragExample ],
})
@BindNgModule(DragExample)
export class DragExampleModule { }
