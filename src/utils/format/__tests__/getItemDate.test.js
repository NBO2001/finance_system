import getItemDate from "../getItemDate";

describe("Return itens for date", () => {

     const date = { dataLan: "2021-05-31T000:48454"};

     test('Get full year', () => {

          const fullYear = getItemDate(date,'full');

          expect(fullYear).toEqual('2021-05-31');

     })
     test('Get day', () => {

          const day = getItemDate(date);

          expect(day).toEqual('31')
     })
     test('Get month', () => {

          const month = getItemDate(date, "month");

          expect(month).toEqual("05")
     })
     test('Get year', () => {

          const year = getItemDate(date, 'year');

          expect(year).toEqual('2021')
     })
     test('Val null', () => {

          const erroVal = getItemDate();

          expect(erroVal).toEqual(false);
     })
})