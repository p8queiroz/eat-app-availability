import { IRestaurant } from "../models/IRestaurant";

const restaurantApi = "https://api.sandbox.eatapp.co/public/v2/restaurants/14bf9273-64f3-4b39-875b-a616fc83f453";
const timeSlots = "https://api.sandbox.eatapp.co/public/v2/restaurants/14bf9273-64f3-4b39-875b-a616fc83f453/time_slots?";

export const getRestautant = async () => {
  const response = await Promise.all([fetch(restaurantApi)]);
  const responseData = await response[0].json();
  const { data } = responseData;
  const resutanteData = data  as IRestaurant;
  return resutanteData;
};


export const getTimeSlots = async (date: string, hour: string) => {
  const response = await Promise.all([fetch(`${timeSlots}desired_time_and_date=${date}T${hour}&covers=2`)]);
  const responseData = await response[0].json();
  const { data } = responseData;
  return data;
};