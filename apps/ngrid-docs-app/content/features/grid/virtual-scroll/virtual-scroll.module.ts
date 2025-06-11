import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatRadioModule } from '@angular/material/radio';
import { PblNgridModule } from '@perbula/ngrid';
import { PblNgridBlockUiModule } from '@perbula/ngrid/block-ui';

import { BindNgModule } from '@perbula/apps/docs-app-lib';
import { ExampleCommonModule } from '@perbula/apps/docs-app-lib/example-common.module';
import { VirtualScrollExample } from './virtual-scroll.component';
import { ScrollingStateExample } from './scrolling-state.component';

@NgModule({
  declarations: [ VirtualScrollExample, ScrollingStateExample ],
  imports: [
    CommonModule,
    MatRadioModule,
    ExampleCommonModule,
    PblNgridModule, PblNgridBlockUiModule,
  ],
  exports: [ VirtualScrollExample, ScrollingStateExample ],
})
@BindNgModule(VirtualScrollExample, ScrollingStateExample)
export class VirtualScrollExampleModule { }
