import { Component, EventEmitter, HostBinding, Input, OnInit, Output } from '@angular/core';

import { IReservedTableTime } from '../../../../models/ITable';

import { some } from 'lodash';

interface ITimeListItem extends IReservedTableTime {
  isSelected: boolean;
  isReserved: boolean;
}

@Component({
  selector: 'app-time-list',
  templateUrl: './time-list.component.html',
  styleUrls: ['./time-list.component.scss'],
})
export class TimeListComponent implements OnInit {

  @HostBinding('class.readonly') @Input() readonlyMode: boolean;
  @Input() set time(values: IReservedTableTime[]) {
    this.reservedTime = values || [];
    this.defineTime();
  };
  @Output() onSelect: EventEmitter<IReservedTableTime> = new EventEmitter<IReservedTableTime>();

  public timeRange: ITimeListItem[] = [];
  public selectedRange: IReservedTableTime;

  private reservedTime: IReservedTableTime[];

  constructor() {}

  ngOnInit() {
    this.defineTime();
  }

  public select(selectedTime: IReservedTableTime) {
    this.selectedRange = selectedTime;
    this.defineTime();

    this.onSelect.emit({
      start: this.selectedRange.start,
      end: this.selectedRange.end
    });
  }

  public trackBy(index, table: IReservedTableTime) {
    return table.start;
  }

  private defineTime() {
    const startHour: number = 9;
    const endHour: number = 22;
    this.timeRange = [];

    for (let startTime = startHour; startTime <= endHour; startTime++) {
      const startHourString = `${startTime}:00`;
      const endHourString = `${startTime + 1}:00`;
      const isReserved = some(this.reservedTime, { start: startHourString, end: endHourString });
      const isSelected = this.selectedRange?.start === startHourString && this.selectedRange?.end === endHourString;

      this.timeRange.push({
        start: startHourString,
        end: endHourString,
        isReserved,
        isSelected
      });
    }
  }

}
