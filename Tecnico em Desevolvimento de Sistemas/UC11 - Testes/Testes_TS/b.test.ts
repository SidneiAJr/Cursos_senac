import { teste } from "../src/a";
import { diminuir } from "../src/a";
import { mult } from "../src/a";
import { div } from "../src/a";

test("subtrair números positivos", () => {
    expect(diminuir(10,3)).toBe(7);
});

test("subtrair números negativo", () => {
    expect(diminuir(-5,-3)).toBe(-2);
});

test("subtrair com zero", () => {
    expect(diminuir(7,0)).toBe(7);
    expect(diminuir(0,7)).toBe(-7);
});

test("Multiplcar Numeros positivos",()=>{
    expect(mult(4,5)).toBe(20);
});

test("Multiplcar Numeros Negativos",()=>{
    expect(mult(-4, 5)).toBe(-20);
    expect(mult(-4, -5)).toBe(20);
});

test("multiplicar por zero", () => {
        expect(mult(10, 0)).toBe(0);
        expect(mult(0, 10)).toBe(0);
});

    // === DIVISÃO ===
test("dividir números positivos", () => {
        expect(div(10, 2)).toBe(5);
});

test("dividir números negativos", () => {
        expect(div(-10, 2)).toBe(-5);
        expect(div(-10, -2)).toBe(5);
});

test("dividir zero por número não zero", () => {
        expect(div(0, 5)).toBe(0);
});

test("divisão por zero deve lançar erro", () => {
        expect(() => div(10, 0)).toThrow("Divisão por zero não permitida");
        expect(() => div(-5, 0)).toThrow();
        expect(() => div(0, 0)).toThrow();
});
