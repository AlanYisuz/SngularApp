import { serieTerm } from "./serie";
//Dado la serie podemos recuperar una sequencia de la serie con numero naturales del 1 al 10:
//la lista de estos siguiendo la formula dada es: 
//[2, 0 , -3, -6, -12, -17, -24, -28, -27, -28, -24]

//caso de prueba
test('dado n como 1 encontrar el termino de la serie', () => {
  const natural = 1;
  const list = serieTerm(natural);
  expect(list[natural-1]).toEqual(2);
});

test('dado n como 2 encontrar el termino de la serie', () => {
  const natural = 2;
  const list = serieTerm(natural);
  expect(list[natural-1]).toEqual(0);
});

test('dado n como 3 encontrar el termino de la serie', () => {
  const natural = 3;
  const list = serieTerm(natural);
  expect(list[natural-1]).toEqual(-3);
});

test('dado n como 4 encontrar el termino de la serie', () => {
  const natural = 4;
  const list = serieTerm(natural);
  expect(list[natural-1]).toEqual(-6);
});

test('dado n como 5 encontrar el termino de la serie', () => {
  const natural = 5;
  const list = serieTerm(natural);
  expect(list[natural-1]).toEqual(-12);
});

test('dado n como 6 encontrar el termino de la serie', () => {
  const natural = 6;
  const list = serieTerm(natural);
  expect(list[natural-1]).toEqual(-17);
});

test('dado n como 7 encontrar el termino de la serie', () => {
  const natural = 7;
  const list = serieTerm(natural);
  expect(list[natural-1]).toEqual(-24);
});

test('dado n como 8 encontrar el termino de la serie', () => {
  const natural = 8;
  const list = serieTerm(natural);
  expect(list[natural-1]).toEqual(-28);
});

test('dado n como 9 encontrar el termino de la serie', () => {
  const natural = 9;
  const list = serieTerm(natural);
  expect(list[natural-1]).toEqual(-27);
});

test('dado n como 10 encontrar el termino de la serie', () => {
  const natural = 10;
  const list = serieTerm(natural);
  expect(list[natural-1]).toEqual(-24);
});
