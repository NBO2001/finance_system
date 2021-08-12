import convertNumeberForBrazil from "../convertNumeberForBrazil";

describe('Converte numeros no formato americano para o Brasileiro', () => {

     test('Passando um numero com ponto e quero que retorne um numero com vígula', () => {
          
          const enPadrao = 145.45;

          const brPadrao = convertNumeberForBrazil(enPadrao);

          expect(brPadrao).toEqual("145,45");
     })
     test('Passando um numero com ponto e sem valor flutuante, quero que retorne um numero com vígula e flutuante', () => {
          
          const enPadrao = 145;

          const brPadrao = convertNumeberForBrazil(enPadrao);

          expect(brPadrao).toEqual("145,00");
     })
})