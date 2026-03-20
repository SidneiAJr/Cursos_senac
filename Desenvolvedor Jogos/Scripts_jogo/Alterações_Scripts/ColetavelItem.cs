using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class ColetavelItem : MonoBehaviour
{
    
    // Detecta colisão com o coletável
    private int HP2;
    private PlayerStatus playerStatus;

    private void Start()
    {
         // Busca o componente PlayerStats no mesmo GameObject
        playerStatus = GetComponent<PlayerStatus>();
    }

    private void OnTriggerEnter(Collider other)
    {
        if (other.CompareTag("HP"))
        {
            HP2 += 20;
            playerStatus.Addvida(20);
            Destroy(other.gameObject);  // Remove o coletável
            Debug.Log("Vida Coletada " +HP2 );
        }
    }
}
