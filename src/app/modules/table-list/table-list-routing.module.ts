import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TableListPage } from './table-list.page';

const routes: Routes = [
  {
    path: '',
    component: TableListPage
  },
  {
    path: 'reserve-table/:id',
    loadChildren: () => import('./pages/reserve-table/reserve-table.module').then( m => m.ReserveTablePageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TableListPageRoutingModule {}
