import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Location } from '@angular/common';
import { Store } from '@ngrx/store';

import { getTableById } from '../../../../models/tables.selectors';
import { IReservedTableTime, ITable } from '../../../../models/ITable';
import { setTime } from '../../../../models/tables.actions';

import { Observable } from 'rxjs';

@Component({
  selector: 'app-reserve-table',
  templateUrl: './reserve-table.page.html',
  styleUrls: ['./reserve-table.page.scss'],
})
export class ReserveTablePage implements OnInit {

  public table$: Observable<ITable>;
  public selectedTime: IReservedTableTime;

  private tableId: number;

  constructor(
    private route: ActivatedRoute,
    private store: Store,
    private alertController: AlertController,
    private location: Location
  ) {}

  ngOnInit() {
    this.route.params.subscribe(({ id }) => {
      this.tableId = +id;
      this.table$ = this.store.select(getTableById(this.tableId)).pipe();
    });
  }

  public onReserve(time: IReservedTableTime) {
    this.selectedTime = time;
  }

  public reserve() {
    this.store.dispatch(setTime({
      tableId: this.tableId,
      time: this.selectedTime
    }));

    this.presentAlert();
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Reserved!',
      message: 'You have successfully reserved this table.',
      buttons: ['OK'],
    });

    await alert.present();
    await alert.onDidDismiss();
    this.location.back();
  }

}
