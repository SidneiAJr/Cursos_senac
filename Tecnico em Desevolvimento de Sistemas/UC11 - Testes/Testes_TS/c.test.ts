import { validarUsuario, Usuario } from "../src/x";

describe("Validação de usuário", () => {
    
    test("Usuário válido deve retornar true", () => {
        const usuario: Usuario = {
            nome: "João Silva",
            idade: 25
        };
        expect(validarUsuario(usuario)).toBe(true);
    });

    test("Nome vazio deve retornar false", () => {
        const usuario: Usuario = {
            nome: "",
            idade: 25
        };
        expect(validarUsuario(usuario)).toBe(false);
    });

    test("Nome com apenas espaços deve retornar false", () => {
        const usuario: Usuario = {
            nome: "   ",
            idade: 25
        };
        expect(validarUsuario(usuario)).toBe(false);
    });

    test("Menor de idade (17 anos) deve retornar false", () => {
        const usuario: Usuario = {
            nome: "Maria",
            idade: 17
        };
        expect(validarUsuario(usuario)).toBe(false);
    });

    test("Usuário com nome válido mas idade negativa deve retornar false", () => {
        const usuario: Usuario = {
            nome: "José",
            idade: -5
        };
        expect(validarUsuario(usuario)).toBe(false);
    });
});
