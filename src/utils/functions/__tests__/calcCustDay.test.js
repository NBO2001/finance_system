import calcCustDay from "../calcCustDay";

describe('Calcula a custo diário de vida', () => {

     test('Recebe a date e as despesas, calcula a media de dispesas por dia', () => {

          const date = {
               day: 10,
               month: 8,
               year: 2021,
          }

          const media = calcCustDay(date, 154.58);

          expect(media).toEqual(4.99);
     })

})