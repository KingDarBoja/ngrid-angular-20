import { Directive, TemplateRef, OnInit, OnDestroy } from '@angular/core';
import { PblNgridMultiRegistryMap } from '@perbula/ngrid/core';

import { PblNgridRegistryService } from '../registry.service';

@Directive({ standalone: false,})
export abstract class PblNgridMultiTemplateRegistry<T, TKind extends keyof PblNgridMultiRegistryMap> implements OnInit, OnDestroy {
  abstract readonly name: string;
  abstract readonly kind: TKind;

  constructor(public tRef: TemplateRef<T>, protected registry: PblNgridRegistryService) { }

  ngOnInit(): void {
    this.registry.addMulti(this.kind, this as any);
  }

  ngOnDestroy(): void {
    this.registry.removeMulti(this.kind, this as any);
  }
}
