// ============================================
// 📦 IMPORTAÇÃO DO ROUTER DO EXPRESS
// ============================================

// Router é uma classe do Express que permite criar grupos de rotas.
// Isso ajuda a organizar as rotas em módulos separados.
// 
// O Router funciona como um "mini-app" que pode ser montado no app principal.
// Exemplo: app.use('/api', routes) → todas as rotas começam com /api
import { Router } from 'express';

// ============================================
// 📦 IMPORTAÇÃO DOS CONTROLLERS
// ============================================

// UsuarioController gerencia rotas relacionadas a usuários.
// PostController gerencia rotas relacionadas a posts.
import { UsuarioController } from '../controllers/UsuarioController';
import { PostController } from '../controllers/PostController';

// ============================================
// 📦 IMPORTAÇÃO DOS MIDDLEWARES
// ============================================

// validateUser → valida os dados de criação de usuário
// validatePost → valida os dados de criação de post
// asyncHandler → captura erros de funções assíncronas
import { validateUser } from '../middlewares/validateUser';
import { validatePost } from '../middlewares/validatePost';
import { asyncHandler } from '../middlewares/asyncHandler';

// ============================================
// 🚀 CRIAÇÃO DO ROUTER
// ============================================

// routes é a instância do Router onde todas as rotas são registradas.
// Depois, esse router é exportado e usado no server.ts:
// app.use('/api', routes);
const routes = Router();

// ============================================
// 🏗️ INSTÂNCIA DOS CONTROLLERS
// ============================================

// Criamos instâncias dos controllers para usar em todas as rotas.
// 
// bind(userController) → garante que o `this` dentro do controller seja o controller.
// Sem o bind, o `this` seria undefined quando a função fosse chamada pelo Express.
const userController = new UsuarioController();
const postController = new PostController();

// ============================================
// ============================================
// 👤 ROTAS DE USUÁRIOS
// ============================================
// ============================================

// ============================================
// 📋 GET /users → LISTAR TODOS OS USUÁRIOS
// ============================================
// 
// asyncHandler captura erros automaticamente.
// Se userController.list lançar um erro, o asyncHandler passa pro errorHandler.
routes.get('/users', asyncHandler(userController.list.bind(userController)));

// ============================================
// 🔍 GET /users/:id → BUSCAR USUÁRIO POR ID
// ============================================
// 
// :id é um parâmetro de rota. O valor fica disponível em req.params.id
// Exemplo: GET /users/1 → req.params.id = "1"
routes.get('/users/:id', asyncHandler(userController.getByID.bind(userController)));

// ============================================
// 📝 POST /users → CRIAR UM NOVO USUÁRIO
// ============================================
// 
// validateUser é executado ANTES do controller.
// Se os dados forem inválidos, retorna 400 e NÃO chama o controller.
// 
// Fluxo: requisição → validateUser → asyncHandler → userController.create
routes.post('/users', validateUser, asyncHandler(userController.create.bind(userController)));

// ============================================
// ✏️ PUT /users/:id → ATUALIZAR UM USUÁRIO
// ============================================
// 
// PUT substitui o recurso inteiro (ou atualiza parcialmente, dependendo da implementação).
// Aqui, o controller decide quais campos podem ser atualizados.
routes.put('/users/:id', asyncHandler(userController.update.bind(userController)));

// ============================================
// 🗑️ DELETE /users/:id → DELETAR UM USUÁRIO
// ============================================
// 
// DELETE remove um recurso do banco de dados.
// Retorna 204 No Content quando bem-sucedido.
routes.delete('/users/:id', asyncHandler(userController.delete.bind(userController)));

// ============================================
// ============================================
// 📝 ROTAS DE POSTS
// ============================================
// ============================================

// ============================================
// 📋 GET /posts → LISTAR TODOS OS POSTS
// ============================================
routes.get('/posts', asyncHandler(postController.list.bind(postController)));

// ============================================
// 🔍 GET /posts/:id → BUSCAR POST POR ID
// ============================================
routes.get('/posts/:id', asyncHandler(postController.getById.bind(postController)));

// ============================================
// 📝 POST /posts → CRIAR UM NOVO POST
// ============================================
// 
// validatePost verifica se title e userId estão presentes.
// Se faltar algum, retorna 400.
routes.post('/posts', validatePost, asyncHandler(postController.create.bind(postController)));

// ============================================
// ✏️ PUT /posts/:id → ATUALIZAR UM POST
// ============================================
routes.put('/posts/:id', asyncHandler(postController.update.bind(postController)));

// ============================================
// 🗑️ DELETE /posts/:id → DELETAR UM POST
// ============================================
routes.delete('/posts/:id', asyncHandler(postController.delete.bind(postController)));

// ============================================
// 📤 EXPORTAÇÃO DO ROUTER
// ============================================

// Exporta o router para ser usado no server.ts
// 
// Exemplo de uso no server.ts:
// import routes from './routes';
// app.use('/api', routes);
// 
// Resultado: todas as rotas ficam sob /api
// GET /api/users, GET /api/posts, etc.
export default routes;
