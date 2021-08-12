import convertNumbers from "../convertNumbers"

describe("Convert numeros no padrão brasileiro para americado", () => {

     test("Pasando um valor com vígula", () => {
          const numeberImput = "154,45";

          const returnConvert = convertNumbers(numeberImput);

          expect(returnConvert).toEqual(154.45);
     });
     
     test("Passando valor com espaço", () => {
          const numeberImput = "1 054  ";

          const returnConvert = convertNumbers(numeberImput);

          expect(returnConvert).toEqual(1054);
     })

     test("Passando valor com espaço e vígula", () => {
          const numeberImput = "1 054,45";

          const returnConvert = convertNumbers(numeberImput);

          expect(returnConvert).toEqual(1054.45);
     })

     test("Passando valor com ponto e vígula", () => {
          const numeberImput = "1.054,45";

          const returnConvert = convertNumbers(numeberImput);

          expect(returnConvert).toEqual(1054.45);
     })
})