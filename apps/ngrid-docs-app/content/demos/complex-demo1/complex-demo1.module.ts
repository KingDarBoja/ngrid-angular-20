import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';

import { PblNgridRegistryService, PblNgridModule } from '@perbula/ngrid';
import { PblNgridDragModule } from '@perbula/ngrid/drag';
import { PblNgridTargetEventsModule } from '@perbula/ngrid/target-events';
import { PblNgridBlockUiModule } from '@perbula/ngrid/block-ui';
import { PblNgridStickyModule } from '@perbula/ngrid/sticky';
import { PblNgridStatePluginModule } from '@perbula/ngrid/state';
import { PblNgridTransposeModule } from '@perbula/ngrid/transpose';
import { PblNgridDetailRowModule } from '@perbula/ngrid/detail-row';
import { PblNgridOverlayPanelModule } from '@perbula/ngrid/overlay-panel';
import { PblNgridMatSortModule } from '@perbula/ngrid-material/sort';
import { PblNgridPaginatorModule } from '@perbula/ngrid-material/paginator';
import { PblNgridContextMenuModule } from '@perbula/ngrid-material/context-menu';
import { PblNgridCellTooltipModule } from '@perbula/ngrid-material/cell-tooltip';
import { PblNgridCheckboxModule } from '@perbula/ngrid-material/selection-column';

import { BindNgModule } from '@perbula/apps/docs-app-lib';
import { ExampleCommonModule } from '@perbula/apps/docs-app-lib/example-common.module';
import { CommonGridTemplatesModule, CommonGridTemplatesComponent } from '../common-grid-templates';
import { ComplexDemo1Example } from './complex-demo1.component';

@NgModule({
  declarations: [ ComplexDemo1Example ],
  imports: [
    CommonModule,
    MatFormFieldModule, MatSelectModule, MatProgressBarModule, MatSlideToggleModule, MatCheckboxModule, MatRadioModule,

    ExampleCommonModule,
    CommonGridTemplatesModule,

    PblNgridModule.withCommon([ { component: CommonGridTemplatesComponent } ]),
    PblNgridDragModule.withDefaultTemplates(),
    PblNgridTargetEventsModule,
    PblNgridBlockUiModule,
    PblNgridStickyModule,
    PblNgridStatePluginModule,
    PblNgridTransposeModule,
    PblNgridDetailRowModule,
    PblNgridOverlayPanelModule,
    PblNgridMatSortModule,
    PblNgridPaginatorModule,
    PblNgridContextMenuModule,
    PblNgridCellTooltipModule,
    PblNgridCheckboxModule,
  ],
  exports: [ ComplexDemo1Example ],
  providers: [ PblNgridRegistryService ],
})
@BindNgModule(ComplexDemo1Example)
export class ComplexDemo1ExampleModule { }
