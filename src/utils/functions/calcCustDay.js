
const calcCustDay = (date, value) => {
     
     const dateNow = new Date(date.year,date.month, 0);
     const daysOfMonth = dateNow.getDate();

     let media = (value/daysOfMonth).toFixed(2)

     return parseFloat(media);
}

export default calcCustDay;