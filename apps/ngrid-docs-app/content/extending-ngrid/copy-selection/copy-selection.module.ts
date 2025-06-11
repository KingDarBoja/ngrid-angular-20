import { NgModule } from '@angular/core';
import { PblNgridModule } from '@perbula/ngrid';
import { PblNgridBlockUiModule } from '@perbula/ngrid/block-ui';
import { PblNgridClipboardPluginModule } from '@perbula/ngrid/clipboard';

import { BindNgModule } from '@perbula/apps/docs-app-lib';
import { ExampleCommonModule } from '@perbula/apps/docs-app-lib/example-common.module';
import { CopySelectionExample } from './copy-selection.component';

@NgModule({
  declarations: [ CopySelectionExample ],
  imports: [
    ExampleCommonModule,
    PblNgridModule, PblNgridBlockUiModule, PblNgridClipboardPluginModule,
  ],
  exports: [ CopySelectionExample ],
})
@BindNgModule(CopySelectionExample)
export class CopySelectionExampleModule { }
