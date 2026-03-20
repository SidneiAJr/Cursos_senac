using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Potion : MonoBehaviour
{
    private PlayerStats playerStats; // Referência ao PlayerStats
    private int Potion2;

    private void Start()
    {
         // Busca o componente PlayerStats no mesmo GameObject
        playerStats = GetComponent<PlayerStats>();
    }

    private void OnTriggerEnter(Collider other)
    {
        if (other.CompareTag("HP"))
        {
            Potion2 += 2;
            playerStats.AddVida(2);
            Destroy(other.gameObject);  // Remove o coletável
            Debug.Log("Vida Sendo curada " + Potion2 );
        }
    }
}
