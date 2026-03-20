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
            Destroy(this.gameObject);
        }
        }
    }
}
