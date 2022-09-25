import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TableListPageRoutingModule } from './table-list-routing.module';

import { TableListPage } from './table-list.page';
import { FilterComponent } from './components/filter/filter.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TableListPageRoutingModule
  ],
  declarations: [
    TableListPage,
    FilterComponent
  ]
})
export class TableListPageModule {}
