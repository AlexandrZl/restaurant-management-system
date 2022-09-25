import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReserveTablePageRoutingModule } from './reserve-table-routing.module';

import { ReserveTablePage } from './reserve-table.page';
import { TableComponentModule } from '../../components/table-components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReserveTablePageRoutingModule,
    TableComponentModule
  ],
  declarations: [ReserveTablePage]
})
export class ReserveTablePageModule {}
