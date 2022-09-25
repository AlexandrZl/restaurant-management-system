import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { TablesService } from '../../services/tables.service';
import { getTableList, retrievedTableList } from '../../models/tables.actions';
import { selectTables } from '../../models/tables.selectors';
import { IFilter } from './models/IFilter';

@Component({
  selector: 'app-table-list',
  templateUrl: './table-list.page.html',
  styleUrls: ['./table-list.page.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TableListPage implements OnInit {

  public tables$ = this.store.select(selectTables).pipe();

  constructor(
    private tablesService: TablesService,
    private store: Store
  ) {}

  ngOnInit() {
    this.store.dispatch(getTableList(null));
  }

  public applyFilter(filter: IFilter) {
    this.store.dispatch(getTableList({ filter }));
  }

}
