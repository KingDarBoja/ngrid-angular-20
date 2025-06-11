import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PblNgridModule } from '@perbula/ngrid';
import { PblNgridPaginatorModule } from '@perbula/ngrid-material/paginator';

import { BindNgModule } from '@perbula/apps/docs-app-lib';
import { ExampleCommonModule } from '@perbula/apps/docs-app-lib/example-common.module';
import { EnablingCustomTriggersExample } from './enabling-custom-triggers.component';

@NgModule({
  declarations: [ EnablingCustomTriggersExample ],
  imports: [
    CommonModule,
    ExampleCommonModule,
    PblNgridModule,
    PblNgridPaginatorModule,
  ],
  exports: [ EnablingCustomTriggersExample ],
})
@BindNgModule(EnablingCustomTriggersExample)
export class EnablingCustomTriggersExampleModule { }

