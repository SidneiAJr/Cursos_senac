using System.Collections;
using System.Collections.Generic;
using UnityEngine;
public class Inimigo : MonoBehaviour
{
    public int xpGanho = 50;
    public int Health; // Vida máxima
    public GameObject player;
    private PlayerStats playerStats;
    private PlayerStatus playerstatus;
    private int item;
    public GameObject projectilePrefab;
 
    void OnDestroy()
    {
        // Supondo que o PlayerLevel esteja no GameObject do jogador
       GameObject player = GameObject.FindWithTag("Player");
        if (player != null)
        {
            player.GetComponent<PlayerStatus>().AdicionarExperiencia(xpGanho);
        }
    }
     void Start()
    {
        Health=100;
        playerStats = player.GetComponent<PlayerStats>();
    }

    public void TakeDamage(int damage)
    {
        Health -= damage;
        if (Health <= 0)
        {
            Die();
        }
    }
     //comparação de tag para dar dano.
    private void OnCollisionEnter(Collision other)
    {
        if (other.gameObject.CompareTag("Bala"))
        {
        TakeDamage(50);
        Destroy(other.gameObject);
        if (Health <= 0){
            playerStats.AddScore(10);
            Instantiate(projectilePrefab, transform.position, Quaternion.identity);
            Destroy(this.gameObject);
            Debug.Log("Item coletado: ");
        }
        }
    }
    void Die()
    {
        DropItem();  // Chama o método de dropar item
        Destroy(gameObject);        // Destroi o inimigo
        Debug.Log("Inimigo morreu!");
    }
    void DropItem()
    {
        if(Health>0){
            Debug.Log("O Inimigo morreu e dropou"+item);
        }

    }
    
    
}
