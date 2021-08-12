import validadeForm from "../validadeForm";

describe('Valida as hipotéses de erros no formulario', () => {

     test('Converte numero do padrão brasileiro para o americano', () => {
          
          const itensForm = {
               name: "  Aulas    de   francês  ",
               val: " 152,58 ",
               type: 1,
               situation: 1,
               dataLan: "2021-05-03"
          }

          const itensRecive = validadeForm(itensForm);
          
          expect(itensRecive).toEqual({
               name: "Aulas de francês",
               val: 152.58,
               type: 1,
               situation: 1,
               dataLan: "2021-05-03"
          })

     })

     test('Converte numero do padrão brasileiro para o americano', () => {
          
          const itensForm = {
               name: "  Aulas    de   francês  ",
               type: 1,
               situation: 1,
               dataLan: "2021-05-03"
          }

          const itensRecive = validadeForm(itensForm);
          
          expect(itensRecive).toEqual(false)

     })



})