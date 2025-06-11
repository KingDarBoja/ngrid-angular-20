import { PblColumn } from '@perbula/ngrid';

declare module '@perbula/ngrid/lib/grid/column/model/column' {
  interface PblColumn {
    resize: boolean;
  }
}


declare module '@perbula/ngrid/core/lib/models/column' {
  interface PblColumnDefinition {
    resize?: boolean;
  }
}

export function colResizeExtendGrid(): void {
  PblColumn.extendProperty('resize');
}
