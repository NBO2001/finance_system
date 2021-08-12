import validateFormUpdate from "../validateFormUpdate";

describe('Test o form update', () => {

     test('Passa apenas o nome', () => {
          const valueInput = {
               id: 1,
               name: "  Natanael   Bezerra  "
          }
          const valueRet = validateFormUpdate(valueInput);

          expect(valueRet).toEqual({id: 1,name: "Natanael Bezerra"})
     })

     test('Passando nenhuma alteração', () => {
          const valueInput = {
               id: 1
          }
          const valueRet = validateFormUpdate(valueInput);

          expect(valueRet).toEqual(false)
     })

})