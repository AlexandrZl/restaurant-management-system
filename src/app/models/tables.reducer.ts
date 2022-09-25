import { createReducer, on } from '@ngrx/store';

import { ITable } from './ITable';
import { retrievedTableList } from './tables.actions';

export const initialState: ReadonlyArray<ITable> = [];

export const tablesReducer = createReducer(
    initialState,
    on(retrievedTableList, (state, { tables }) => tables)
);
