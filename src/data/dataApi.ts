import { IRestaurant } from "../models/IRestaurant";

const dataUrl = "https://api.sandbox.eatapp.co/public/v2/restaurants/14bf9273-64f3-4b39-875b-a616fc83f453";

 export const getRestautant = async () => {
  const response = await Promise.all([fetch(dataUrl)]);
  const responseData = await response[0].json();
  const { data } = responseData;
  const resutanteData = data  as IRestaurant;
  return resutanteData;
};