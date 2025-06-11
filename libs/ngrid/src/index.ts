/* LEAVE THIS, WE NEED IT SO THE AUGMENTATION IN THE FILE WILL LOAD. */
import './lib/grid/bind-grid-to-datasource';
import { isPblColumn, isPblMetaColumn, isPblColumnGroup } from './lib/grid/index';

/* Some symbols in `@perbula/ngrid/core` are also used by "regular" users of ngrid (as opposed to internal/plugin use) so we need to re-export them
   from the main package so "regular" user will not have to specifically address `@perbula/ngrid/core` */
export {
  // Configuration
  PEB_NGRID_CONFIG, PblNgridConfig, PblNgridConfigService,

  // Pagination
  PblNgridPaginatorKind, PblPaginator, PblPaginatorChangeEvent,

  // Data Source
  PblDataSourceConfigurableTriggers,
  PblDataSourceTriggers,
  PblDataSourceTriggerChange, PblDataSourceTriggerChangedEvent, PblDataSourceTriggerChangedEventSource, PblDataSourceTriggerChangeHandler,
  PblDataSourceAdapter,
  PblDataSource, PblDataSourceOptions,
  PblNgridSortInstructions, PblNgridSortDefinition, PblNgridSorter, PblNgridSortOrder,
  PblDataSourceFactory, DataSourceOf,
  DataSourceFilterToken, DataSourcePredicate, DataSourceColumnPredicate,
  PblDataSourceAdapterProcessedResult,
  createDS, applySort,

  // Models: Column
  PblColumnTypeDefinitionDataMap,
  PblColumnTypeDefinition,
  PblColumnDefinition,
  PblMetaColumnDefinition,
  PblColumnGroupDefinition,
  PblColumnSet,
  PblMetaRowDefinitions,
  PblNgridColumnDefinitionSet,
} from '@perbula/ngrid/core';

export {
  PblColumn, PblMetaColumn, PblColumnGroup, PblColumnFactory, COLUMN, columnFactory,
  isPblMetaColumn, isPblColumnGroup, isPblColumn,

  GridRowType,
  RowsApi,
  NGRID_CELL_FACTORY,
  PBL_NGRID_ROW_TEMPLATE,
  PblNgridRowDef, PblNgridRowOverride, PblNgridRowComponent, PblNgridColumnRowComponent, PblNgridMetaRowComponent,

  PblNgridComponent,
  AutoSizeToFitOptions, ColumnApi,

  PblNgridRegistryService,
  PblNgridSingleTemplateRegistry, PblNgridMultiTemplateRegistry, PblNgridMultiComponentRegistry,
  PblNgridDataHeaderExtensionRef, PblNgridDataHeaderExtensionContext,
  PblNgridCellDefDirective,
  PblNgridHeaderCellDefDirective,
  PblNgridFooterCellDefDirective,
  PblNgridCellStyling,
  PblNgridNoDataRefDirective,
  PblNgridColumnSet,

  DISABLE_INTERSECTION_OBSERVABLE,
  PblNgridVirtualScrollStrategy, PblNgridBaseVirtualScrollDirective,
  NoVirtualScrollStrategy, PblNgridDynamicVirtualScrollStrategy,
  // TODO: Move to an independent package in v4
  PblNgridFixedSizeVirtualScrollStrategy, PblNgridAutoSizeVirtualScrollStrategy,

  PblNgridFocusChangedEvent, PblNgridSelectionChangedEvent,
  PblNgridMetaCellContext, PblNgridCellContext, PblNgridRowContext, PblRowContext, PblNgridContextApi,
  CellReference, GridDataPoint,
} from './lib/grid/index';

export { PblNgridPlugin, PblNgridPluginExtension } from './lib/ext/types';

export { EXT_API_TOKEN, PblNgridExtensionApi } from './lib/ext/grid-ext-api';
export { ngridPlugin, NgridPluginMetadata } from './lib/ext/grid-plugin';
export { PblNgridPluginController } from './lib/ext/plugin-control';

export const utils = {
  isPblColumn,
  isPblMetaColumn,
  isPblColumnGroup,
};

export { PblNgridModule, provideCommon } from './lib/ngrid.module';

export { PblCdkAutoSizeVirtualScrollDirective } from './lib/grid/features/virtual-scroll/strategies/cdk-wrappers/v-scroll-auto.directive';
export { PblCdkFixedSizedVirtualScrollDirective } from './lib/grid/features/virtual-scroll/strategies/cdk-wrappers/v-scroll-fixed.directive';
export {
  PblNgridOuterSectionDirective, PblNgridCellComponent, PblNgridFooterCellComponent, PblNgridMetaCellComponent, PblNgridHeaderCellComponent, PblNgridScrolling,
  PblNgridPaginatorRefDirective, PblNgridHeaderExtensionRefDirective, PblNgridHideColumns, PblCdkVirtualScrollDirective,
  PblNgridCellEditAutoFocusDirective, PblNgridEditorCellDefDirective,
} from './lib/grid/index';
