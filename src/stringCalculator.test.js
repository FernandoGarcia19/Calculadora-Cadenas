import calculate from "./stringCalculator.js";

test('devuelve 0 para un string vacio', () => {
  expect(calculate(" ")).toBe("0");
});

test('devuelve el numero mismo cuando solo hay 1 input', () => {
  expect(calculate('2')).toBe("2");
});

test('devuelve la suma de 2 numeros separados por comas', () => {
    expect(calculate('1,2')).toBe("3");
  });

test('devuelve la suma de 3 numeros separados por comas', () => {
  expect(calculate('2,4,8')).toBe("14");
});

test('devuelve la suma de 2 numeros separados por comas', () => {
  expect(calculate('1-2')).toBe("3");
});

test('devuelve la suma de 3 numeros separados por comas', () => {
expect(calculate('2-4-8')).toBe("14");
});

test('devuelve la suma de numeros con separador personalizado', () => {
  expect(calculate('//[/]2/4/8')).toBe("14");
  });