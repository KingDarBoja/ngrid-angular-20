import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { PblNgridModule } from '@perbula/ngrid';
import { PblNgridBlockUiModule } from '@perbula/ngrid/block-ui';

import { CommonCellTemplatesModule, CommonCellTemplatesComponent } from './common-cell-templates';
import { SmokeTestsExample } from './smoke-tests.component';

@NgModule({
  declarations: [ SmokeTestsExample ],
  imports: [
    CommonModule,
    CommonCellTemplatesModule,
    PblNgridModule.withCommon([ { component: CommonCellTemplatesComponent } ]),
    PblNgridBlockUiModule,
    RouterModule.forChild([{path: '', component: SmokeTestsExample}]),
  ],
})
export class SmokeTestsExampleModule { }
