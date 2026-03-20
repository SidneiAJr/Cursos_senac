package DAO;
import jakarta.persistence.EntityManager;
import jakarta.persistence.TypedQuery;
import Model.Usuario;
import Util.HibernateUtil;


public class UsuarioDao {
    public void salvar(Usuario u) {
        EntityManager em = HibernateUtil.getEntityManager();

        try {
            // ORM exige transação pra operações que alteram dados
            em.getTransaction().begin();

            // persist = "insere" no banco
            em.persist(u);

            em.getTransaction().commit();

        } catch (Exception e) {
            // Se deu problema, desfaz a transação
            if (em.getTransaction().isActive()) {
                em.getTransaction().rollback();
            }
            throw e;

        } finally {
            // Sempre fecha o em
            em.close();
        }
    }
    public Usuario buscarPorEmail(String usuario) {
        EntityManager em = HibernateUtil.getEntityManager();

        try {
            // JPQL: consulta por CLASSE e ATRIBUTOS (não tabela/coluna)
            TypedQuery<Usuario> q = em.createQuery(
                "SELECT u FROM Usuario u WHERE u.usuario = :usuario",
                Usuario.class
            );

            // parâmetro nomeado
           q.setParameter("usuario", usuario);

            // getResultList para evitar exception de "não encontrado"
            var lista = q.getResultList();

            // se lista vazia, não existe usuário
            return lista.isEmpty() ? null : lista.get(0);

        } finally {
            em.close();
        }
    }
}
