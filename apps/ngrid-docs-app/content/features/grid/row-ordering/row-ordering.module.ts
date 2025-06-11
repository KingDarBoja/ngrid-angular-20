import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

import { PblNgridModule } from '@perbula/ngrid';
import { PblNgridDragModule } from '@perbula/ngrid/drag';

import { BindNgModule } from '@perbula/apps/docs-app-lib';
import { ExampleCommonModule } from '@perbula/apps/docs-app-lib/example-common.module';
import { RowOrderingExample } from './row-ordering.component';

@NgModule({
  declarations: [ RowOrderingExample ],
  imports: [
    ExampleCommonModule,
    MatIconModule,
    PblNgridModule,
    PblNgridDragModule.withDefaultTemplates(),
  ],
  exports: [ RowOrderingExample ],
})
@BindNgModule(RowOrderingExample)
export class RowOrderingExampleModule { }
