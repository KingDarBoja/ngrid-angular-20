import { NgModule } from '@angular/core';
import { MatRadioModule } from '@angular/material/radio';
import { PblNgridModule } from '@perbula/ngrid';
import { PblNgridDragModule } from '@perbula/ngrid/drag/';

import { BindNgModule } from '@perbula/apps/docs-app-lib';
import { ExampleCommonModule } from '@perbula/apps/docs-app-lib/example-common.module';
import { SpacingExample } from './spacing.component';

@NgModule({
  declarations: [ SpacingExample ],
  imports: [
    MatRadioModule,
    ExampleCommonModule,
    PblNgridModule,
    PblNgridDragModule,
  ],
  exports: [ SpacingExample ],
})
@BindNgModule(SpacingExample)
export class SpacingExampleModule { }
