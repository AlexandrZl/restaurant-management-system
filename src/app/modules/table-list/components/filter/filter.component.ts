import { ChangeDetectionStrategy, Component, EventEmitter, OnInit, Output } from '@angular/core';
import { IFilter } from '../../models/IFilter';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FilterComponent implements OnInit {

  @Output() onFilterChange: EventEmitter<IFilter> = new EventEmitter<IFilter>();

  public selectedSeats: number = null;
  public selectedTime: string;
  public timeRange: string[];

  public readonly seats: number[] = [2, 4, 6, 8, 10];

  ngOnInit() {
    this.defineTime();
  }

  public applyFilter(): void {
    const time = {
      startTime: null,
      endTime: null
    };

    if (this.selectedTime) {
      [time.startTime, time.endTime] = this.selectedTime.split(' - ');
    }

    this.onFilterChange.emit({
      seats: this.selectedSeats,
      ...time
    });
  }

  private defineTime() {
    const startHour: number = 9;
    const endHour: number = 22;
    this.timeRange = [];

    for (let startTime = startHour; startTime <= endHour; startTime++) {
      this.timeRange.push(`${startTime}:00 - ${startTime + 1}:00`);
    }
  }

}
