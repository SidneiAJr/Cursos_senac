# 🪄CT001 - Cadastro de Usuário 

## Objetivo | Verificar se o sistema cadastra usuário com dados válidos

## **Pré-condições:**
- Sistema aberto na tela de cadastro
- Usuário não possui cadastro
- Verificar se Usuario ja esta cadastrado no sistema. 

## **Passos:**
1. Digitar nome de usuário: "joaosilva"
2. Digitar senha: "123456"
3. Clicar no botão "Cadastrar"
4. Verificar se Usuario ja esta cadastrado no sistema. 

## **Resultado esperado:**
- ✅ Mensagem: "Cadastro realizado com sucesso!"
- ✅ Usuário redirecionado para tela de login

---

## 📜 **Casos de Teste | Aplicativo Cadastro**  

### **Caso de Teste | Cadastro de Usuário**  
| ID | CT001 |
|----|-------|
| Descrição | Testar se o usuário consegue se cadastrar com sucesso. |
| Passos | 1. Acessar a tela de cadastro<br>2. Preencher nome, e-mail e senha<br>3. Confirmar cadastro |
| Dados de Entrada | Nome: João Silva, E-mail: joao@email.com, Senha: 123456 |
| Saída Esperada | Conta criada com sucesso. |
| Verificar | Verificar se Usuario ja esta cadastrado no sistema. 

---

### **Caso de Teste | CT002 - Usuário Duplicado**  
| ID | CT002 |
|----|-------|
| Descrição | Validar que não permite cadastrar usuário já existente |
| Pré-condição | Usuário "joaosilva" já cadastrado no sistema |
| Passos | 1. Acessar tela de cadastro<br>2. Digitar "joaosilva" e senha "123"<br>3. Clicar em cadastrar |
| Resultado Esperado | ❌ Mensagem: "Usuário já cadastrado!"<br>❌ Permanecer na tela de cadastro |

---

## Exemplo de Sistema de Login Estatico por Checagem | JS:

```js
/*
=================================
Função | Login
- Função Login estatico.
- Pede usuario e senha.
- Se usuario e senha forem admin ele avança se não da erro de credencial
- Esperado pela função logar
*/

function login(){
    let usuario = prompt("Insira Seu Usuario: ")
    let senha = prompt("Insira a senha: ")

    if(usuario==="Admin" && senha === "Admin"){
        console.log(`Bem Vindo ${usuario}`)
    }else{
        console.log("Erro Credencias Invalidas!")
    }
}

/*
=================================
Função | Cadastro
- Função Cadastro estatico.
- Pede usuario e senha.
- pega as credencial vazia
- Esperado pela função cadastrar usuario
*/

function cadastrado(){
    let usuario = prompt("Insira Seu Usuario: ")
    let senha = prompt("Insira a senha: ")

    if(usuario==="" && senha === ""){
        console.log(`Bem Vindo ${usuario}`)
    }else{
        console.log("Erro Credencias Invalidas!")
    }
}

````

---

## Exemplo em java Estatico por Checagem | Estatico 

```java
package javaapplication1;
import java.util.Scanner;


public class JavaApplication1 {

    
public static void main(String[] args) {
        cadastro cd1 = new cadastro("Admin","100");
        cd1.usercadastro();
    }
    
}


class cadastro{
    private String usuario;
    private String senha;

    public cadastro(String usuario, String senha) {
        this.usuario = usuario;
        this.senha = senha;
    }
    public void usercadastro(){
        Scanner entrada = new Scanner(System.in);
        System.out.println("Insira o Usuario: ");
        usuario = entrada.next();
        System.out.println("Insira o Senha: ");
        senha = entrada.next();
        if(usuario.equals("Admin")&& senha.equals("123")){
            System.out.println("Bem Vindo!");
        }else{
            System.out.println("Credencial Invalida!");
        }
    }
}

```



