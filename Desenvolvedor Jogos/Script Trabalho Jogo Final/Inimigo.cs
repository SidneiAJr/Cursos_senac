using UnityEngine;

public class Inimigo : MonoBehaviour
{
    private PlayerStats playerStats; // Referência ao PlayerStats 
    private PlayerStats stats;

    private void Start() { 
        playerStats = GetComponent<PlayerStats>(); 
        stats =  GetComponent<PlayerStats>();
    } 

    private void OnControllerColliderHit(ControllerColliderHit hit)
    {
        if (hit.gameObject.CompareTag("Inimigo"))
        {
        stats.TakeDamage(10); 
           if(stats.currentHealth<=0)
           {
           stats.currentHealth = 0;
           stats.UpdateVidaPlayer();
           }
            
        }
    }
}
