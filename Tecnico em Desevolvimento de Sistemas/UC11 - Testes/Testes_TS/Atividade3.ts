/**
 * Verifica se uma senha é forte segundo as regras:
 * - mínimo 8 caracteres
 * - pelo menos 1 número
 */
export function senhaForte(senha: string): boolean {
    // Verifica tamanho mínimo
    if (senha.length < 8) {
        return false;
    }

    // Verifica se tem pelo menos um número
    const temNumero = /\d/.test(senha);
    if (!temNumero) {
        return false;
    }

    // Passou em todas as validações
    return true;
}
