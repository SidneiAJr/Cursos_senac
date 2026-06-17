export class Usuario {

    private id?: number;
    private email: string;
    private senha: string;
    
    constructor(email: string,senha: string,id?: number) {
        this.id = id;
        this.email = email;
        this.senha = senha;
         if (!email || email.trim() === '') {
            throw new Error('Email não pode estar vazio');
        }

        if (!email.includes('@') || !email.includes('.')) {
            throw new Error('Email inválido');
        }

        // 🔥 VALIDAÇÃO: Senha mínima 6 caracteres
        if (!senha || senha.length < 6) {
            throw new Error('Senha deve ter no mínimo 6 caracteres');
        }
    }
    

    public getId(): number | undefined {
        return this.id;
    }

    public setId(id: number): void {
        this.id = id;
    }

    public getEmail(): string {
        return this.email;
    }

    public setEmail(email: string): void {
        this.email = email;
    }

    public getSenha(): string {
        return this.senha;
    }

    public setSenha(senha: string): void {
        this.senha = senha;
    }
}