import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { IFilter } from '../../models/IFilter';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
})
export class FilterComponent {

  @Output() onFilterChange: EventEmitter<IFilter> = new EventEmitter<IFilter>();

  public startTime = '2022-09-25T09:00';
  public endTime = '2022-09-25T22:00';
  public selectedSeats: number;

  public readonly seats: number[] = [2, 4, 6, 8, 10];

  public applyFilter(): void {
    this.onFilterChange.emit({
      seats: this.selectedSeats,
      startTime: this.startTime,
      endTime: this.endTime
    });
  }

}
