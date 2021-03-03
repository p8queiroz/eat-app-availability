import User from './User'

export interface Reservation {
    Id: number;
    TotalOcupants: string;
    ReservedTo: User;
    Date: Date;
    Hour: string;
  }
  