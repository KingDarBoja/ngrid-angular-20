import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { PblNgridModule } from '@perbula/ngrid';
import { PblNgridBlockUiModule } from '@perbula/ngrid/block-ui';
import { PblNgridMatSortModule } from '@perbula/ngrid-material/sort';
import { PblNgridPaginatorModule } from '@perbula/ngrid-material/paginator';

import { BindNgModule } from '@perbula/apps/docs-app-lib';
import { ExampleCommonModule } from '@perbula/apps/docs-app-lib/example-common.module';
import { MatSortExample } from './mat-sort.component';
import { ActiveColumnAndDirectionExample } from './active-column-and-direction.component';
import { ProgrammaticExample } from './programmatic.component';

@NgModule({
  declarations: [ MatSortExample, ActiveColumnAndDirectionExample, ProgrammaticExample ],
  imports: [
    CommonModule,
    MatButtonModule, MatProgressSpinnerModule,
    ExampleCommonModule,
    PblNgridModule, PblNgridBlockUiModule, PblNgridPaginatorModule, PblNgridMatSortModule,
  ],
  exports: [ MatSortExample, ActiveColumnAndDirectionExample, ProgrammaticExample ],
})
@BindNgModule(MatSortExample, ActiveColumnAndDirectionExample, ProgrammaticExample)
export class MatSortExampleModule { }
