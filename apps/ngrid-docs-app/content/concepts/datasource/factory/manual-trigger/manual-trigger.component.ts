// tslint:disable:member-ordering
/* @perbula-example:ex-1 ex-2 */
import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { createDS } from '@perbula/ngrid';
import { Person, DynamicClientApi } from '@perbula/apps/docs-app-lib/client-api';
import { Example } from '@perbula/apps/docs-app-lib';

@Component({
  selector: 'pbl-manual-datasource-trigger-component',
  templateUrl: './manual-trigger.component.html',
  styleUrls: ['./manual-trigger.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
@Example('pbl-manual-datasource-trigger-component', { title: 'Manual Trigger' })
export class ManualDatasourceTriggerExample {

  columns = {
    table: {
      cols: [
        { prop: 'id' },
        { prop: 'name' },
        { prop: 'email' },
      ],
    },
  };

  dsManualTrigger = createDS<Person, number>()
    .onTrigger( event => this.datasource.getPeople(0, event.data.curr || event.data.prev || 0) )
    .create();

  refresh(rowCount: number): void {
    this.dsManualTrigger.refresh(rowCount)
  }

  constructor(private datasource: DynamicClientApi) { }

}
