import { senhaForte } from "../src/senha";

describe("Validação de senha forte", () => {
    
    test("Senha válida (8+ caracteres e com número) deve retornar true", () => {
        expect(senhaForte("abc12345")).toBe(true);
        expect(senhaForte("senhaForte123")).toBe(true);
        expect(senhaForte("12345678")).toBe(true);
    });

    test("Senha com menos de 8 caracteres deve retornar false", () => {
        expect(senhaForte("abc123")).toBe(false);      // 6 caracteres
        expect(senhaForte("1234567")).toBe(false);     // 7 caracteres
        expect(senhaForte("curta")).toBe(false);       // 5 caracteres
    });

    test("Senha sem número deve retornar false", () => {
        expect(senhaForte("abcdefgh")).toBe(false);    // 8 letras, sem número
        expect(senhaForte("senhaForte")).toBe(false);  // letras, sem número
        expect(senhaForte("!@#$%¨&*")).toBe(false);    // símbolos, sem número
    });

    test("Casos extremos: string vazia e espaços", () => {
        expect(senhaForte("")).toBe(false);            // vazia
        expect(senhaForte("        ")).toBe(false);    // 8 espaços (não tem número)
        expect(senhaForte("a b c 1")).toBe(false);     // 7 caracteres (espaços contam)
    });
});
