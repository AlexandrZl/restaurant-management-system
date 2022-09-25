import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { ITable } from '../models/ITable';

@Injectable({
  providedIn: 'root'
})
export class TablesService {

  constructor(private http: HttpClient) {}

  public getTables(): Observable<ITable[]> {
    return this.http.get<ITable[]>('assets/tables.json');
  }
}
