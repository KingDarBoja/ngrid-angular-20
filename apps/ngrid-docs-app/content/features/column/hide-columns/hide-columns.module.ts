import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { PblNgridModule } from '@perbula/ngrid';

import { BindNgModule } from '@perbula/apps/docs-app-lib';
import { ExampleCommonModule } from '@perbula/apps/docs-app-lib/example-common.module';
import { HideColumnFeatureExample } from './hide-columns.component';
import { HideColumnWithGroupHeadersFeatureExample } from './hide-columns-with-group-headers.component';

@NgModule({
  declarations: [ HideColumnFeatureExample, HideColumnWithGroupHeadersFeatureExample ],
  imports: [
    CommonModule,
    ExampleCommonModule,
    MatIconModule,
    MatSelectModule,
    PblNgridModule,
  ],
  exports: [ HideColumnFeatureExample, HideColumnWithGroupHeadersFeatureExample ],
})
@BindNgModule(HideColumnFeatureExample, HideColumnWithGroupHeadersFeatureExample)
export class HideColumnFeatureExampleModule { }
