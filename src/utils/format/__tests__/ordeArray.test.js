import ordeArray from "../ordeArray";

describe('Test function the array ordem', () => {
     
     const arrayDesordem = [15,85,48,36,1,2,6];
     
     test('Retorn array orden menor for maior', () => {

          const arrayOrdem = ordeArray(arrayDesordem, "menor");

          expect(arrayOrdem).toEqual([1,2,6,15,36,48,85])


     });

     test('Return array ordem maior for menor', () => {

          const arrayOrdem = ordeArray(arrayDesordem);

          expect(arrayOrdem).toEqual([85,48,36,15,6,2,1])
     });

     test('Test with array empty', () => {
          const arrayEmpty = [];
          const arrayOrdem = ordeArray(arrayEmpty);

          expect(arrayOrdem).toEqual([]);
     });

     test('Test with variable empty', () => {

          const arrayOrdem = ordeArray();

          expect(arrayOrdem).toEqual(false);
     })
});