import { IRestaurant } from "../models/IRestaurant";

const dataUrl = "/assets/data.json";

 export const getRestautant = async () => {
  const response = await Promise.all([fetch(dataUrl)]);
  const responseData = await response[0].json();
  const { data } = responseData;
  const resutanteData = data  as IRestaurant;
  return resutanteData;
};