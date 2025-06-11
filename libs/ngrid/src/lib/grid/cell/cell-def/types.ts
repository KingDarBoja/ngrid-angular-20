import { PblColumnTypeDefinitionDataMap } from '@perbula/ngrid/core';

export interface PblNgridCellDefDirectiveBase {
  name: string;
  type: keyof PblColumnTypeDefinitionDataMap;
}
