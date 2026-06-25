export class User {
    private id: number;
    private nome: string;
    private email: string;
    private senha: string;

    constructor(id: number, nome: string, email: string, senha: string) {
        this.id = id;
        this.nome = nome;
        this.email = email;
        this.senha = senha;
    }

    getId(): number {
        return this.id;
    }

    getNome(): string {
        return this.nome;
    }

    getEmail(): string {
        return this.email;
    }

    getSenha(): string {
        return this.senha;
    }

    setNome(nome: string): void {
        this.nome = nome;
    }

    setEmail(email: string): void {
        this.email = email;
    }

    setSenha(senha: string): void {
        this.senha = senha;
    }

}