import { createFeatureSelector } from '@ngrx/store';

import { ITable } from './ITable';

export const selectTables = createFeatureSelector<ReadonlyArray<ITable>>('tables');
