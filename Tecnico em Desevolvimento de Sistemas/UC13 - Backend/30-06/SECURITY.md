# 🔐 Segurança

> Gerado automaticamente pelo **Albertool DocGen**

---

## Mecanismos de Segurança

### 🔑 Autenticação JWT
- Tokens de acesso com expiração configurável
- Validação via middleware em rotas protegidas

### 🔒 Hash de Senhas
- Senhas armazenadas com bcrypt
- Salt rounds configurável

### 🌐 CORS
- Origens permitidas configuradas via variável de ambiente

### ✅ Validação de Dados
- Schemas Zod para validação de entrada
- Sanitização automática de dados recebidos

---

## ⚠️ Boas Práticas

- Nunca commitar o arquivo `.env`
- Rotacionar o `JWT_SECRET` periodicamente
- Manter dependências atualizadas
- Usar HTTPS em produção
