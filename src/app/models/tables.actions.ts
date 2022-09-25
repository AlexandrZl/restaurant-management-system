import { createAction, props } from '@ngrx/store';

import { IReservedTableTime, ITable } from './ITable';

export const retrievedTableList = createAction(
  '[Table List/API] Retrieve Tables Success',
  props<{ tables: ReadonlyArray<ITable> }>()
);

export const setTime = createAction(
  '[Table] Set Reserved Time Success',
  props<{ tableId: number, time: IReservedTableTime }>()
);
