import { createAction, props } from '@ngrx/store';

import { IReservedTableTime, ITable } from './ITable';
import { IFilter } from '../modules/table-list/models/IFilter';

export const getTableList = createAction(
  '[Table List/API] Get Tables',
  props<{ filter?: IFilter }>()
);

export const retrievedTableList = createAction(
  '[Table List/API] Retrieved Tables',
  props<{ tables: ReadonlyArray<ITable> }>()
);

export const setTime = createAction(
  '[Table] Set Reserved Time',
  props<{ tableId: number, time: IReservedTableTime }>()
);
