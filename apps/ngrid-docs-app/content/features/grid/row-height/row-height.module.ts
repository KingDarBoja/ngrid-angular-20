import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PblNgridModule } from '@perbula/ngrid';

import { BindNgModule } from '@perbula/apps/docs-app-lib';
import { ExampleCommonModule } from '@perbula/apps/docs-app-lib/example-common.module';
import { RowHeightExample } from './row-height.component';
import { UncontrolledRowHeightExample } from './uncontrolled-row-height.component';
import { ControlledRowHeightExample } from './controlled-row-height.component';

@NgModule({
  declarations: [ RowHeightExample, UncontrolledRowHeightExample, ControlledRowHeightExample ],
  imports: [
    CommonModule,
    ExampleCommonModule,
    PblNgridModule,
  ],
  exports: [ RowHeightExample, UncontrolledRowHeightExample, ControlledRowHeightExample ],
})
@BindNgModule(RowHeightExample, UncontrolledRowHeightExample, ControlledRowHeightExample)
export class RowHeightExampleModule { }
