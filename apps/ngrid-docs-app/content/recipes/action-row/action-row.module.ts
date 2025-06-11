import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule  } from '@angular/material/form-field';

import { PblNgridModule } from '@perbula/ngrid';
import { PblNgridBlockUiModule } from '@perbula/ngrid/block-ui';
import { PblNgridPaginatorModule } from '@perbula/ngrid-material/paginator';
import { PblNgridMatSortModule } from '@perbula/ngrid-material/sort';

import { BindNgModule } from '@perbula/apps/docs-app-lib';
import { ExampleCommonModule } from '@perbula/apps/docs-app-lib/example-common.module';
import { ActionRowExample, MyGridActionRowComponent } from './action-row.component';

@NgModule({
  declarations: [ ActionRowExample, MyGridActionRowComponent ],
  imports: [
    CommonModule,
    MatIconModule, MatInputModule, MatButtonModule, MatFormFieldModule,
    ExampleCommonModule,
    PblNgridModule, PblNgridBlockUiModule, PblNgridPaginatorModule, PblNgridMatSortModule,
  ],
  exports: [ ActionRowExample ],
})
@BindNgModule(ActionRowExample)
export class ActionRowExampleModule { }
