package Util;

import jakarta.persistence.EntityManager;
import jakarta.persistence.EntityManagerFactory;
import jakarta.persistence.Persistence;


public class HibernateUtil {
    
private static final EntityManagerFactory emf =
            Persistence.createEntityManagerFactory("myJpaUnit");

    /**
     * Entrega um EntityManager novo.
     * Sempre feche (em.close()) quando terminar.
     */
    public static EntityManager getEntityManager() {
        return emf.createEntityManager();
    }
    
}
