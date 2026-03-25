import { UsuarioReposity } from "./config/repositories/user-repository";

async function main() {
    const userRepo = new UsuarioReposity()
    console.log(await userRepo.inserir("Daniel","20"));
    console.log(await userRepo.inserir("Baloso Silva","quatro"));
    console.log(await userRepo.inserir("Miguel da rocha","sete"));
    console.log(await userRepo.delete(1));
    console.log(await userRepo.update(1,"pedro","vinte"));
    console.log(await userRepo.mostrarTodos());
}

main()
