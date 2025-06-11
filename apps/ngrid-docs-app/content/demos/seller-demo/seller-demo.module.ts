import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';

import { PblNgridRegistryService, PblNgridModule } from '@perbula/ngrid';
import { PblNgridDragModule } from '@perbula/ngrid/drag';
import { PblNgridTargetEventsModule } from '@perbula/ngrid/target-events';
import { PblNgridBlockUiModule } from '@perbula/ngrid/block-ui';
import { PblNgridStickyModule } from '@perbula/ngrid/sticky';
import { PblNgridStatePluginModule } from '@perbula/ngrid/state';
import { PblNgridOverlayPanelModule } from '@perbula/ngrid/overlay-panel';
import { PblNgridMatSortModule } from '@perbula/ngrid-material/sort';
import { PblNgridPaginatorModule } from '@perbula/ngrid-material/paginator';
import { PblNgridContextMenuModule } from '@perbula/ngrid-material/context-menu';
import { PblNgridCellTooltipModule } from '@perbula/ngrid-material/cell-tooltip';
import { PblNgridCheckboxModule } from '@perbula/ngrid-material/selection-column';

import { BindNgModule } from '@perbula/apps/docs-app-lib';
import { ExampleCommonModule } from '@perbula/apps/docs-app-lib/example-common.module';
import { CommonGridTemplatesModule, CommonGridTemplatesComponent } from '../common-grid-templates';
import { SellerDemoExample } from './seller-demo.component';

@NgModule({
  declarations: [ SellerDemoExample ],
  imports: [
    CommonModule,
    MatIconModule, MatChipsModule,
    ExampleCommonModule,
    CommonGridTemplatesModule,
    PblNgridModule.withCommon([ { component: CommonGridTemplatesComponent } ]),
    PblNgridDragModule.withDefaultTemplates(),
    PblNgridTargetEventsModule,
    PblNgridBlockUiModule,
    PblNgridStickyModule,
    PblNgridStatePluginModule,
    PblNgridOverlayPanelModule,
    PblNgridMatSortModule,
    PblNgridPaginatorModule,
    PblNgridContextMenuModule,
    PblNgridCellTooltipModule,
    PblNgridCheckboxModule,
  ],
  exports: [ SellerDemoExample ],
  providers: [ PblNgridRegistryService ],
})
@BindNgModule(SellerDemoExample)
export class SellerDemoExampleModule { }
