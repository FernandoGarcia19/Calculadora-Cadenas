import calculate from "./stringCalculator.js";

test('devuelve 0 para un string vacio', () => {
  expect(calculate(" ")).toBe("0");
});

test('devuelve el numero mismo cuando solo hay 1 input', () => {
  expect(calculate('2')).toBe("2");
});