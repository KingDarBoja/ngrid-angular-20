import { NgModule } from '@angular/core';
import { PblNgridModule } from '@perbula/ngrid';

import { BindNgModule } from '@perbula/apps/docs-app-lib';
import { ExampleCommonModule } from '@perbula/apps/docs-app-lib/example-common.module';
import { PblNgridTargetEventsModule } from '@perbula/ngrid/target-events';
import { PblNgridPaginatorModule } from '@perbula/ngrid-material/paginator';
import { PblNgridMatSortModule } from '@perbula/ngrid-material/sort';
import { ContextExampleExample } from './context-example.component';
import { ContextObjectExample } from './context-object.component';

@NgModule({
  declarations: [ ContextExampleExample, ContextObjectExample ],
  imports: [
    ExampleCommonModule,
    PblNgridModule, PblNgridTargetEventsModule, PblNgridPaginatorModule, PblNgridMatSortModule,
  ],
  exports: [ ContextExampleExample, ContextObjectExample ],
})
@BindNgModule(ContextExampleExample, ContextObjectExample)
export class ContextExampleExampleModule { }
