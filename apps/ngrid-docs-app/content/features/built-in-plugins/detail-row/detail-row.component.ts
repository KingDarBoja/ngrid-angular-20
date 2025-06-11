import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { createDS, columnFactory } from '@perbula/ngrid';
import { PblDetailsRowToggleEvent } from '@perbula/ngrid/detail-row';

import { Person, DynamicClientApi } from '@perbula/apps/docs-app-lib/client-api';
import { Example } from '@perbula/apps/docs-app-lib';

@Component({
  selector: 'pbl-detail-row-example',
  templateUrl: './detail-row.component.html',
  styleUrls: ['./detail-row.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
@Example('pbl-detail-row-example', { title: 'Detail Row' })
export class DetailRowExample {
  columns = columnFactory()
    .default({minWidth: 100})
    .table(
      { prop: 'detailRowHandle', label: ' ', type: 'detailRowHandle', minWidth: 48, maxWidth: 48 },
      { prop: 'id', sort: true, width: '40px' },
      { prop: 'name', sort: true },
      { prop: 'gender', width: '50px' },
      { prop: 'birthdate', type: 'date' }
    )
    .build();

  ds = createDS<Person>().onTrigger( () => this.datasource.getPeople(0, 4) ).create();

  lastToggleEvent: PblDetailsRowToggleEvent;

  constructor(private datasource: DynamicClientApi) { }

  onToggleChange(event: PblDetailsRowToggleEvent): void {
    this.lastToggleEvent = event;
  }
}
