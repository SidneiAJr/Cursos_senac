# 🛡️ Middlewares

> Gerado automaticamente pelo **Albertool DocGen**

---

_Nenhum middleware encontrado._

### 📌 O que é um Middleware?

Middlewares são funções que interceptam requisições HTTP antes de chegarem aos controllers.

**Exemplo:**

```typescript
export const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
    const token = req.headers.authorization;
    if (!token) return res.status(401).json({ message: "Não autorizado" });
    // verifica o token...
    next();
};
```
