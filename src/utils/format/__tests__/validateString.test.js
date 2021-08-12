import validateString from "../validateString";

describe('Parse string and return uma string formatada', () => {

     test('Pansando uma string com spaçoes', () => {

          const name = "  Natanael  Bezerra de Oliveira  "

          const nameReturn = validateString(name);

          expect(nameReturn).toEqual("Natanael Bezerra de Oliveira");
     })

})