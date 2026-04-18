# React | Introdução ao Frontend

## Como o React funciona?

O React funciona através de **componentes reutilizáveis**. Ele quebra a interface em pequenos pedaços (componentes) que podem ser reaproveitados em várias partes do código.

### Exemplo prático:

Você cria um botão uma única vez:

```jsx
// BotaoSair.jsx
function BotaoSair() {
    return <button className="btn-sair">Sair</button>;
}
// Dashboard.jsx
import BotaoSair from './components/BotaoSair';

function Dashboard() {
    return (
        <div>
            <h1>Dashboard</h1>
            <BotaoSair /> {/* mesmo botão! */}
        </div>
    );
}

// Login.jsx
import BotaoSair from './components/BotaoSair';

function Login() {
    return (
        <div>
            <h1>Login</h1>
            <BotaoSair /> {/* mesmo botão de novo! */}
        </div>
    );
}
```

## Vantagens do React
- ✅ Reutilização de código - escreva uma vez, use várias
- ✅ Manutenção facilitada - muda num lugar, atualiza em todos
- ✅ Organização - cada componente tem sua responsabilidade
- ✅ Performance - atualiza só o que precisa (Virtual DOM)

## Desvantagens
- ❌ Curva de aprendizado íngrime
- ❌ Configuração inicial complexa
- ❌ Pode ser exagerado para projetos pequenos
