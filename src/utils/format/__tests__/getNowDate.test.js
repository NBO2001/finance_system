import getNowDate from "../getNowDate";

describe('Function return object with date', () => {

     test('Return obj date now', () => {
          
          const fullYear = new Date();
          const date = {
               day: fullYear.getDate(),
               month: (fullYear.getMonth() + 1),
               year: fullYear.getFullYear()
          }

          const dateReturn = getNowDate();

          expect(dateReturn).toEqual(date)

     })

})