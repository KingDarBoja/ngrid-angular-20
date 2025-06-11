import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';

import { PblNgridModule } from '@perbula/ngrid';
import { PblNgridBlockUiModule } from '@perbula/ngrid/block-ui';

import { BindNgModule } from '@perbula/apps/docs-app-lib';
import { ExampleCommonModule } from '@perbula/apps/docs-app-lib/example-common.module';
import { FocusAndSelectionExample } from './focus-and-selection.component';

const COMPONENTS = [ FocusAndSelectionExample ];

@NgModule({
    declarations: COMPONENTS,
    imports: [
        CommonModule,
        MatButtonModule, MatFormFieldModule, MatSelectModule,
        ExampleCommonModule,
        PblNgridModule, PblNgridBlockUiModule,
    ],
    exports: COMPONENTS
})
@BindNgModule(FocusAndSelectionExample)
export class FocusAndSelectionExampleModule { }
