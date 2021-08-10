import formatDate from "../formatDate";

describe('Teste da função que retorna a data do padrão brasileiro', () => {
     test('Retorn a data formatada', () => {

          const dateEng = "2021-05-03";

          const datePt = formatDate(dateEng);

          expect(datePt).toEqual('03/05/2021');
     })
})