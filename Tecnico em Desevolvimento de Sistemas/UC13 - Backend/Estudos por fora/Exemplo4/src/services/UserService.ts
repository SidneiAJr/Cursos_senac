import { Usuario } from "../models/Usuario"
import { UsuarioRepository } from "../repositories/UserRepository"
import bcrypt from "bcrypt"


export class UsuarioService {
   private usuarioRepository: UsuarioRepository;

    constructor() {
        this.usuarioRepository = new UsuarioRepository();
    }

    async criarUsuario(email: string, senha: string){
        const existente = await this.usuarioRepository.buscarPorEmail(email);
        if(existente){
            throw new Error("Email já cadastrado!");
        }
        const saltRounds = 10;
        const senhaHash = await bcrypt.hash(senha, saltRounds);

        const usuario = new Usuario(email, senhaHash);
        return await this.usuarioRepository.criar(usuario);
    }

        async listarTodos(): Promise<Usuario[]> {
        return await this.usuarioRepository.buscarTodos();
    }

    async buscarPorId(id: number): Promise<Usuario> {
        const usuario = await this.usuarioRepository.buscarPorId(id);
        if (!usuario) {
            throw new Error("Usuário não encontrado!");
        }
        return usuario;
    }

    async buscarPorEmail(email: string): Promise<Usuario | null> {
        return await this.usuarioRepository.buscarPorEmail(email);
    }

     async atualizarUsuario(id: number, email: string, senha?: string): Promise<Usuario> {
        const usuario = await this.buscarPorId(id);

        if (email) {
            const existente = await this.usuarioRepository.buscarPorEmail(email);
            if (existente && existente.id_usuario !== id) {
                throw new Error("Email já está em uso!");
            }
            usuario.Email = email;
        }

        if (senha) {
            const saltRounds = 10;
            usuario.Password = await bcrypt.hash(senha, saltRounds);
        }

        return await this.usuarioRepository.atualizar(usuario);
    }

    async deletarUsuario(id: number): Promise<void> {
        await this.buscarPorId(id);
        await this.usuarioRepository.deletar(id);
    }

    async login(email: string, senha: string): Promise<Usuario> {
        const usuario = await this.usuarioRepository.buscarPorEmail(email);
        if (!usuario) {
            throw new Error("Email ou senha inválidos!");
        }

        const senhaValida = await bcrypt.compare(senha, usuario.Password);
        if (!senhaValida) {
            throw new Error("Email ou senha inválidos!");
        }

        return usuario
    }
    
}
