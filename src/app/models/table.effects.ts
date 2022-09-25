import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, catchError, exhaustMap } from 'rxjs/operators';

import { getTableList, retrievedTableList } from './tables.actions';
import { TablesService } from '../services/tables.service';

@Injectable()
export class MovieEffects {

  table$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getTableList),
      exhaustMap((data) => {
       return this.tablesService.getTables(data?.filter).pipe(
         map(tables => retrievedTableList( { tables })),
         catchError(() => EMPTY)
       )
      }
      )
    )
  );

  constructor(
    private actions$: Actions,
    private tablesService: TablesService
  ) {}
}
