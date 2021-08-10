import PropTypes from 'prop-types';

const prevAndNextMonth = (date, direction) => {
     let month;
     let year = date.year;
     switch(direction){
          case "prev":
               if(date.month > 1 && date.month <= 12){
                    month = date.month - 1;
               }
               else if(date.month === 1){
                    month = 12;
                   year = year - 1;
               }
               return {
                    month,
                    year
               }
          case "next":
               if(date.month >= 1 && date.month < 12){
                    month = date.month + 1;
               }
               else if(date.month === 12){
                    month = 1;
                    year = year + 1;
               }
               return {
                    month,
                    year
               }
          default:
               return false;
     }

}

export default prevAndNextMonth;

prevAndNextMonth.PropTypes = {
     date: PropTypes.obj,
     direction: PropTypes.string
}