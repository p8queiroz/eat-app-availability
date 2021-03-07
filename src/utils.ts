

export const friendlyDate: (dateInput: string) => string = (dateInput) => {
    const datePartial = dateInput.split('-').map(item => parseInt(item));
    const convertDate = new Date(datePartial[0], datePartial[1] - 1, datePartial[2]);
    const lang = 'eu' // de, es, ch 
    if(!convertDate) return "";
   return convertDate.toLocaleString(lang, {
        month: 'long',
        day: '2-digit',
        weekday: 'short'
      }) 
}

export const friendlyDateToYYYYMMDD: (arrayFriendly: string[], arrayNumbers: string[], currentSelection: any) => string = (arrayFriendly, arrayNumbers, currentSelection) => {
  return arrayNumbers[arrayFriendly.indexOf(currentSelection)];
}