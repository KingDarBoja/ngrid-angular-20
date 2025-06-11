import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PblNgridModule } from '@perbula/ngrid';

import { BindNgModule } from '@perbula/apps/docs-app-lib';
import { ExampleCommonModule } from '@perbula/apps/docs-app-lib/example-common.module';
import { WorkingWithPblDataSourceExample } from './working-with-pbl-datasource.component';

@NgModule({
  declarations: [ WorkingWithPblDataSourceExample ],
  imports: [
    CommonModule,
    ExampleCommonModule,
    PblNgridModule,
  ],
  exports: [ WorkingWithPblDataSourceExample ],
})
@BindNgModule(WorkingWithPblDataSourceExample)
export class WorkingWithPblDataSourceExampleModule { }
