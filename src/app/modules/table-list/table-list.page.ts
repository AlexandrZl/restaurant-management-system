import { Component, OnInit } from '@angular/core';

import { TablesService } from '../../services/tables.service';

@Component({
  selector: 'app-table-list',
  templateUrl: './table-list.page.html',
  styleUrls: ['./table-list.page.scss'],
})
export class TableListPage implements OnInit {

  constructor(private tablesService: TablesService) { }

  ngOnInit() {
    this.tablesService.getTables().subscribe((tables) => {
      console.log(0, tables);
    });
  }

}
