import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

import { ITable } from '../models/ITable';
import { IFilter } from '../modules/table-list/models/IFilter';

@Injectable({
  providedIn: 'root'
})
export class TablesService {

  constructor(private http: HttpClient) {}

  public getTables(filterParameters?: IFilter): Observable<ITable[]> {
    const cachedTables: ITable[] = JSON.parse(window.localStorage.getItem('tables') || JSON.stringify(''));

    if (cachedTables?.length) {
      return of(cachedTables).pipe(
        map(tables => tables.filter((table) => this.filterBy(table, filterParameters)))
      );
    } else {
      return this.http.get<{ tables: ITable[] }>('assets/tables.json')
        .pipe(
          map(response => response?.tables || []),
          map(tables => tables.filter((table) => this.filterBy(table, filterParameters)))
        );
    }
  }

  private filterBy(table: ITable, filter: IFilter): boolean {
    let isValidBySeats: boolean = true;
    let isValidByTime: boolean = true;

    if (filter?.seats) {
      isValidBySeats = table.seats === filter.seats;
    }

    if (filter?.startTime && filter?.endTime) {
      isValidByTime = !(table?.time || []).find((reservedTime) => {
        return reservedTime.start === filter.startTime && reservedTime.end === filter.endTime;
      });
    }

    return isValidBySeats && isValidByTime;
  }
}
