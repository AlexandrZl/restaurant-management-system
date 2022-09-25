import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';

import { getTableById } from '../../../../models/tables.selectors';
import { Observable } from 'rxjs';
import { ITable } from '../../../../models/ITable';

@Component({
  selector: 'app-reserve-table',
  templateUrl: './reserve-table.page.html',
  styleUrls: ['./reserve-table.page.scss'],
})
export class ReserveTablePage implements OnInit {

  public table$: Observable<ITable>;

  constructor(
    private route: ActivatedRoute,
    private store: Store
  ) {}

  ngOnInit() {
    this.route.params.subscribe(({ id }) => {
      this.table$ = this.store.select(getTableById(+id)).pipe();
    });
  }

}
