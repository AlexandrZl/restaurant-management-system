import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { ITable } from '../models/ITable';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TablesService {

  constructor(private http: HttpClient) {}

  public getTables(): Observable<ITable[]> {
    return this.http.get<{ tables: ITable[] }>('assets/tables.json')
      .pipe(
        map(response => response?.tables || [])
      );
  }
}
