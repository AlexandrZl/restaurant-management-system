import { createFeatureSelector, createSelector } from '@ngrx/store';

import { ITable } from './ITable';

export const selectTables = createFeatureSelector<ReadonlyArray<ITable>>('tables');

export const getTableById = (id: number) => createSelector(
    selectTables,
    (tables) => tables.find(table => table.id === id)
);
