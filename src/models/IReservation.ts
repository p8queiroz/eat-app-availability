import User from './User'

export interface IReservation {
    Id: number;
    TotalOcupants: number;
    ReservedTo: User;
    Date: Date;
    Hour: string;
  }
  