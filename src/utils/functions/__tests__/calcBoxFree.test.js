import calcBoxFree from "../calcBoxFree";

describe('Calcula o caixa livre do usuário', () => {
     test('Passando um objeto e quero receber o valor', () => {

          const values = {
               desp: 154.87,
               invs: 85.98,
               recp: 435.85,
          }

          const returnCalc = calcBoxFree(values);

          expect(returnCalc).toEqual(195.00);

     })

     test('Passando mais despesas que receitas e quero receber o valor negativo', () => {

          const values = {
               desp: 354.87,
               invs: 85.98,
               recp: 435.85,
          }

          const returnCalc = calcBoxFree(values);

          expect(returnCalc).toEqual(-5.00);

     })
})