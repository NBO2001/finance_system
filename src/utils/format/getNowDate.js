
const getNowDate = () => {
     const fullYear = new Date();
     const date = {
          day: fullYear.getDate(),
          month: (fullYear.getMonth() + 1),
          year: fullYear.getFullYear()
     }
     return date;
}

export default getNowDate;