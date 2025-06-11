import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCheckboxModule } from '@angular/material/checkbox';

import { PblNgridModule } from '@perbula/ngrid';
import { PblNgridTransposeModule } from '@perbula/ngrid/transpose';
import { PblNgridBlockUiModule } from '@perbula/ngrid/block-ui';

import { BindNgModule } from '@perbula/apps/docs-app-lib';
import { ExampleCommonModule } from '@perbula/apps/docs-app-lib/example-common.module';
import { TransposeExample } from './transpose.component';
import { OriginalTemplatesExample } from './original-templates.component';
import { WithColumnStylesExample } from './with-column-styles.component';

@NgModule({
  declarations: [ TransposeExample, OriginalTemplatesExample, WithColumnStylesExample ],
  imports: [
    CommonModule,
    MatCheckboxModule,
    ExampleCommonModule,
    PblNgridModule, PblNgridTransposeModule, PblNgridBlockUiModule,
  ],
  exports: [ TransposeExample, OriginalTemplatesExample, WithColumnStylesExample ],
})
@BindNgModule(TransposeExample, OriginalTemplatesExample, WithColumnStylesExample)
export class TransposeExampleModule { }
