using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class HpCollect : MonoBehaviour
{
    //public int score = 0;  // Armazena a pontuação do jogador

    // Detecta colisão com o coletável
    private PlayerStats playerStats; // Referência ao PlayerStats
    private int HP2;

    private void Start()
    {
         // Busca o componente PlayerStats no mesmo GameObject
        playerStats = GetComponent<PlayerStats>();
    }

    private void OnTriggerEnter(Collider other)
    {
        if (other.CompareTag("HP"))
        {
            HP2 += 20;
            // Adiciona pontos ao chamar o método AddScore de PlayerStats; // Adiciona 10 pontos (pode ajustar o valor como preferir)
            playerStats.AddVida(20);
            Destroy(other.gameObject);  // Remove o coletável
            Debug.Log("Vida Coletada " +HP2 );
        }
    }
}
