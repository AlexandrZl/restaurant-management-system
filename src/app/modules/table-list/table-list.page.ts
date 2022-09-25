import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { TablesService } from '../../services/tables.service';
import { retrievedTableList } from '../../models/tables.actions';
import { selectTables } from '../../models/tables.selectors';

@Component({
  selector: 'app-table-list',
  templateUrl: './table-list.page.html',
  styleUrls: ['./table-list.page.scss'],
})
export class TableListPage implements OnInit {

  public tables$ = this.store.select(selectTables);

  constructor(
    private tablesService: TablesService,
    private store: Store
  ) {}

  ngOnInit() {
    this.tablesService
      .getTables()
      .subscribe((tables) => this.store.dispatch(retrievedTableList({ tables })));
  }

}
