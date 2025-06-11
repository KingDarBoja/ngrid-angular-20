import { Directive, Input } from '@angular/core';
import { PblNgridPluginController } from '@perbula/ngrid';
import { PblNgridOverlayPanelFactory, PblNgridOverlayPanel, PblNgridOverlayPanelConfig } from '@perbula/ngrid/overlay-panel';

declare module '@perbula/ngrid/lib/ext/types' {
  interface PblNgridPluginExtension {
    matHeaderContextMenu?: PblNgridMatHeaderContextMenuPlugin;
  }
}

export const PLUGIN_KEY: 'matHeaderContextMenu' = 'matHeaderContextMenu';

@Directive({ selector: 'pbl-ngrid[matHeaderContextMenu]', providers: [ PblNgridOverlayPanelFactory ], standalone: false, })
export class PblNgridMatHeaderContextMenuPlugin {

  @Input('matHeaderContextMenu') style: any;
  @Input() config: PblNgridOverlayPanelConfig;

  readonly overlayPanel: PblNgridOverlayPanel;

  constructor(overlayPanelFactory: PblNgridOverlayPanelFactory,
              public readonly pluginCtrl: PblNgridPluginController) {
    this.overlayPanel = overlayPanelFactory.create(pluginCtrl.extApi.grid);
  }

}
