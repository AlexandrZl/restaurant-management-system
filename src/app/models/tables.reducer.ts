import { createReducer, on } from '@ngrx/store';

import { IReservedTableTime, ITable } from './ITable';
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

    saveChangedTablesToStorage(state);

    return state;
  })
);

// Assumes emulation API storing of changed data
const saveChangedTablesToStorage = (tables: ReadonlyArray<ITable>) => {
  const cachedTables: { [tableId: number]: IReservedTableTime[]} = JSON.parse(window.localStorage.getItem('tables') || JSON.stringify('')) || {};

  tables.forEach((table) => {
    if (table.time) {
      cachedTables[table.id] = table.time;
    }
  });

  window.localStorage.setItem('tables', JSON.stringify(cachedTables));
};
