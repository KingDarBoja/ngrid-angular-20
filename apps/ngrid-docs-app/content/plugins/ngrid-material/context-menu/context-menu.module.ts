import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PblNgridModule } from '@perbula/ngrid';
import { PblNgridOverlayPanelModule } from '@perbula/ngrid/overlay-panel';
import { PblNgridContextMenuModule } from '@perbula/ngrid-material/context-menu';

import { BindNgModule } from '@perbula/apps/docs-app-lib';
import { ExampleCommonModule } from '@perbula/apps/docs-app-lib/example-common.module';
import { ContextMenuExample } from './context-menu.component';
import { CustomHeaderExample } from './custom-header.component';

@NgModule({
  declarations: [ ContextMenuExample, CustomHeaderExample ],
  imports: [
    CommonModule,
    ExampleCommonModule,
    PblNgridModule, PblNgridOverlayPanelModule, PblNgridContextMenuModule,
  ],
  exports: [ ContextMenuExample, CustomHeaderExample ],
})
@BindNgModule(ContextMenuExample, CustomHeaderExample)
export class ContextMenuExampleModule { }
