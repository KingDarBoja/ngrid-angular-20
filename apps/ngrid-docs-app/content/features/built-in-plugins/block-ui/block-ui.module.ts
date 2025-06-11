import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatProgressBarModule } from '@angular/material/progress-bar';

import { PblNgridModule } from '@perbula/ngrid';
import { PblNgridBlockUiModule } from '@perbula/ngrid/block-ui';

import { BindNgModule } from '@perbula/apps/docs-app-lib';
import { ExampleCommonModule } from '@perbula/apps/docs-app-lib/example-common.module';
import { BlockUiExample } from './block-ui.component';
import { ManualExample } from './manual.component';

@NgModule({
  declarations: [ BlockUiExample, ManualExample ],
  imports: [
    CommonModule,
    MatButtonModule, MatProgressSpinnerModule, MatProgressBarModule,
    ExampleCommonModule,
    PblNgridModule, PblNgridBlockUiModule,
  ],
  exports: [ BlockUiExample, ManualExample ],
})
@BindNgModule(BlockUiExample, ManualExample)
export class BlockUiExampleModule { }
