import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PblNgridModule } from '@perbula/ngrid';
import { PblNgridPaginatorModule } from '@perbula/ngrid-material/paginator';
import { PblNgridBlockUiModule } from '@perbula/ngrid/block-ui';

import { BindNgModule } from '@perbula/apps/docs-app-lib';
import { ExampleCommonModule } from '@perbula/apps/docs-app-lib/example-common.module';
import { ReuseExample } from './reuse.component';

@NgModule({
  declarations: [ ReuseExample ],
  imports: [
    CommonModule,
    ExampleCommonModule,
    PblNgridModule, PblNgridPaginatorModule, PblNgridBlockUiModule,
  ],
  exports: [ ReuseExample ],
})
@BindNgModule(ReuseExample)
export class ReuseExampleModule { }
