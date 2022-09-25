import { createAction, props } from '@ngrx/store';

import { ITable } from './ITable';

export const retrievedTableList = createAction(
    '[Table List/API] Retrieve Tables Success',
    props<{ tables: ReadonlyArray<ITable> }>()
);
