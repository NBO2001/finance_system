import prevAndNextMonth from "../prevAndNextMonth";

describe('Month prev and next', () => {

     const date = {
          month: 8,
          year: 2021
     }

     test('Return prev month', () => {

          const prevMonth = prevAndNextMonth(date,'prev');

          expect(prevMonth).toEqual({month: 7, year: 2021})

     });

     test('Return next month', () => {

          const nextMonth = prevAndNextMonth(date,'next');

          expect(nextMonth).toEqual({month: 9, year: 2021})

     })

})