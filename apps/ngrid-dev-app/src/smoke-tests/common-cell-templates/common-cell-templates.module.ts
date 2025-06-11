import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PblNgridModule } from '@perbula/ngrid';
import { PblNgridBlockUiModule } from '@perbula/ngrid/block-ui';

import { CommonCellTemplatesComponent } from './common-cell-templates.component';

@NgModule({
  declarations: [ CommonCellTemplatesComponent ],
  imports: [
    CommonModule,
    PblNgridModule,
    PblNgridBlockUiModule,
  ],
  exports: [ CommonCellTemplatesComponent ],
})
export class CommonCellTemplatesModule { }
