import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { createDS, columnFactory } from '@perbula/ngrid';

import { Person, DynamicClientApi } from '@perbula/apps/docs-app-lib/client-api';
import { Example } from '@perbula/apps/docs-app-lib';

@Component({
  selector: 'pbl-application-level-rtl-example',
  templateUrl: './application-level-rtl.component.html',
  styleUrls: ['./application-level-rtl.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
@Example('pbl-application-level-rtl-example', { title: 'Application Level RTL' })
export class ApplicationLevelRtlExample {
  columns = columnFactory()
    .table(
      { prop: 'name', width: '100px' },
      { prop: 'gender', width: '50px' },
      { prop: 'birthdate', type: 'date', width: '25%' },
    )
    .build();
  ds = createDS<Person>().onTrigger( () => this.datasource.getPeople(100, 500) ).create();

  constructor(private datasource: DynamicClientApi) { }
}
