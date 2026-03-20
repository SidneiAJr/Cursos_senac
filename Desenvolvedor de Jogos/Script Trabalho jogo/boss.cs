using UnityEngine;

public class Boss : MonoBehaviour
{
    private PlayerStats playerStats; // Referência ao PlayerStats 
    private PlayerStats vidadoplayer;
    private PlayerStats stats;

    private void Start() { 
        playerStats = GetComponent<PlayerStats>(); 
        stats =  GetComponent<PlayerStats>();
    } 

    private void OnControllerColliderHit(ControllerColliderHit hit)
    {
        if (hit.gameObject.CompareTag("Boss"))
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
