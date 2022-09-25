import { createReducer, on } from '@ngrx/store';

import { ITable } from './ITable';
import { retrievedTableList, setTime } from './tables.actions';

export const initialState: ReadonlyArray<ITable> = [];

export const tablesReducer = createReducer(
  initialState,
  on(retrievedTableList, (state, { tables }) => tables),
  on(setTime, (state, { tableId, time }) => {
    state = state.map((table) => {
      if (table.id === tableId) {
        const newTable: ITable = Object.assign({}, table);
        newTable.time = [
          ...newTable.time || [],
          time
        ];

        return newTable;
      } else {
        return table;
      }
    });

    window.localStorage.setItem('tables', JSON.stringify(state));

    return state;
  })
);
