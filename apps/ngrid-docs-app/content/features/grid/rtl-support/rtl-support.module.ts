import { NgModule } from '@angular/core';
import { PblNgridModule } from '@perbula/ngrid';

import { BindNgModule } from '@perbula/apps/docs-app-lib';
import { ExampleCommonModule } from '@perbula/apps/docs-app-lib/example-common.module';
import { RtlSupportExample } from './rtl-support.component';
import { ApplicationLevelRtlExample } from './application-level-rtl.component';

@NgModule({
  declarations: [ RtlSupportExample, ApplicationLevelRtlExample ],
  imports: [
    ExampleCommonModule,
    PblNgridModule,
  ],
  exports: [ RtlSupportExample, ApplicationLevelRtlExample ],
})
@BindNgModule(RtlSupportExample, ApplicationLevelRtlExample)
export class RtlSupportExampleModule { }
