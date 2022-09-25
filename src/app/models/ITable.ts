export interface IReservedTableTime {
  start: string;
  end: string;
}

export interface ITable {
  id: number;
  location: string;
  seats: number;
  time?: IReservedTableTime[];
}
