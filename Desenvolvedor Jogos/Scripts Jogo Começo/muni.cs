using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class muni : MonoBehaviour
{
    //public int score = 0;  // Armazena a pontuação do jogador

    // Detecta colisão com o coletável
    public AudioClip collectSound; // Som de coleta
    private AudioSource audioSource;
    private PlayerStats playerStats; // Referência ao PlayerStats
    private int munition;

    private void Start()
    {
        munition = 10;
        // Obtém o componente de áudio
        audioSource = gameObject.AddComponent<AudioSource>();
         // Busca o componente PlayerStats no mesmo GameObject
        playerStats = GetComponent<PlayerStats>();
    }

    private void OnTriggerEnter(Collider other)
    {
        if (other.CompareTag("muni"))
        {
            //score += 10;  // Aumenta a pontuação
            munition += 20;

            // Adiciona pontos ao chamar o método AddScore de PlayerStats; // Adiciona 10 pontos (pode ajustar o valor como preferir)
            playerStats.Addmunition(10);

            audioSource.PlayOneShot(collectSound);
            Destroy(other.gameObject);  // Remove o coletável
            Debug.Log("Munição Coletada " + munition);
        }
    }
}
