import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FilterComponent } from './filter/filter.component';
import { TimeListComponent } from './time-list/time-list.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule
  ],
  exports: [
    FilterComponent,
    TimeListComponent
  ],
  declarations: [
    FilterComponent,
    TimeListComponent
  ]
})
export class TableComponentModule {}
