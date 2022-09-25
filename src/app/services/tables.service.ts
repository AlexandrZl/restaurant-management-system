import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { IReservedTableTime, ITable } from '../models/ITable';
import { IFilter } from '../modules/table-list/models/IFilter';

@Injectable({
  providedIn: 'root'
})
export class TablesService {

  constructor(private http: HttpClient) {}

  public getTables(filterParameters?: IFilter): Observable<ITable[]> {
    return this.http.get<{ tables: ITable[] }>('assets/tables.json')
      .pipe(
        map(response => response?.tables || []),
        map(tables => this.applyCache(tables)),
        map(tables => tables.filter((table) => this.filterBy(table, filterParameters)))
      );
  }

  private applyCache(tables: ITable[]) {
    const cachedTables: { [tableId: number]: IReservedTableTime[]} = JSON.parse(window.localStorage.getItem('tables') || JSON.stringify('')) || {};

    tables.forEach((table) => {
      if (cachedTables[table.id]) {
        table.time = cachedTables[table.id];
      }
    });

    return tables;
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
