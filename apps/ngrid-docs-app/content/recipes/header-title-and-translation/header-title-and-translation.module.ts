import { NgModule } from '@angular/core';
import { PblNgridModule } from '@perbula/ngrid';

import { BindNgModule } from '@perbula/apps/docs-app-lib';
import { ExampleCommonModule } from '@perbula/apps/docs-app-lib/example-common.module';
import { HeaderTitleAndTranslationExample } from './header-title-and-translation.component';
import { HeaderToTitlePipe } from './header-to-title.pipe';

@NgModule({
  declarations: [ HeaderToTitlePipe, HeaderTitleAndTranslationExample ],
  imports: [
    ExampleCommonModule,
    PblNgridModule,
  ],
  exports: [ HeaderTitleAndTranslationExample ],
})
@BindNgModule(HeaderTitleAndTranslationExample)
export class HeaderTitleAndTranslationExampleModule { }
