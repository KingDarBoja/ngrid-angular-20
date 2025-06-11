import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';

import { PblNgridModule } from '@perbula/ngrid';
import { PblNgridTargetEventsModule } from '@perbula/ngrid/target-events';

import { BindNgModule } from '@perbula/apps/docs-app-lib';
import { ExampleCommonModule } from '@perbula/apps/docs-app-lib/example-common.module';
import { CellEditExample } from './cell-edit.component';
import { CellEditGlobalTriggerExample } from './cell-edit-global-trigger.component';
import { CellEditDirectivesExample } from './cell-edit-directives.component';

@NgModule({
  declarations: [ CellEditExample, CellEditGlobalTriggerExample, CellEditDirectivesExample ],
  imports: [
    CommonModule,
    FormsModule,
    ExampleCommonModule,
    MatInputModule, MatFormFieldModule, MatDatepickerModule, MatNativeDateModule,
    PblNgridModule, PblNgridTargetEventsModule,
  ],
  exports: [ CellEditExample, CellEditGlobalTriggerExample, CellEditDirectivesExample ],
})
@BindNgModule(CellEditExample, CellEditGlobalTriggerExample, CellEditDirectivesExample)
export class CellEditExampleModule { }
