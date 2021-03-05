
type IHours = {
  hours: Array<string>;
}

type DictionaryItem = [string, Array<IHours>];

type IOpenings = {
  date: DictionaryItem;
}

export interface IRestaurant {
    id:  string;
    name: string;
    address_line_1: string;
    time_zone: string;
    accepting_mobile: boolean;
    accepting_web: boolean;
    labels: Array<string>;
    difficult: boolean;
    redirect_url: string;
    ui_preferences: Array<string>;
    openings: IOpenings;
  }
  