export type Usuario={
    nome: string;
    idade: number;
}

export function validarUsuario(usuario: Usuario): boolean {
    // Regra 1: nome não pode ser vazio
    if (!usuario.nome || usuario.nome.trim() === "") {
        return false;
    }

    // Regra 2: idade deve ser maior ou igual a 18
    if (usuario.idade < 18) {
        return false;
    }

    // Passou em todas as validações
    return true;
}
