import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PblNgridModule } from '@perbula/ngrid';
import { MatButtonModule } from '@angular/material/button';

import { BindNgModule } from '@perbula/apps/docs-app-lib';
import { ExampleCommonModule } from '@perbula/apps/docs-app-lib/example-common.module';
import { SwitchingColumnDefinitionsExample } from './switching-column-definitions.component';

@NgModule({
  declarations: [ SwitchingColumnDefinitionsExample ],
  imports: [
    CommonModule,
    ExampleCommonModule,
    MatButtonModule,
    PblNgridModule,
  ],
  exports: [ SwitchingColumnDefinitionsExample ],
})
@BindNgModule(SwitchingColumnDefinitionsExample)
export class SwitchingColumnDefinitionsExampleModule { }
