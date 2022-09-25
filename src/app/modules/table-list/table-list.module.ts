import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TableListPageRoutingModule } from './table-list-routing.module';

import { TableListPage } from './table-list.page';
import { TableComponentModule } from './components/table-components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TableListPageRoutingModule,
    TableComponentModule
  ],
  declarations: [
    TableListPage
  ]
})
export class TableListPageModule {}
