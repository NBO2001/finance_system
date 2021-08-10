import getOptionsValues from "../getOptionsValues";

describe('Retorna os valores da opção baseado tipo de item', () => {
     
     test('Passa um type e retorna os objeto', () => {

          const valRecebido = getOptionsValues(1);
          const objExpect = {
               one: "Recebido",
               two: "A receber"
          }
          expect(valRecebido).toEqual(objExpect);
     })

     test('Passa um type e retorna os objeto', () => {

          const valRecebido = getOptionsValues(2);
          const objExpect = {
               one: "Investido",
               two: "A investir"
          }
          expect(valRecebido).toEqual(objExpect);
     })
})