using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class coletashield : MonoBehaviour
{
    public AudioClip collectSound; // Som de coleta
    private AudioSource audioSource;
    private PlayerStats playerStats; // Referência ao PlayerStats
    public int Escudo;
    private void Start()
    {
        Escudo = 100;
        // Obtém o componente de áudio
        audioSource = gameObject.AddComponent<AudioSource>();
         // Busca o componente PlayerStats no mesmo GameObject
        playerStats = GetComponent<PlayerStats>();
    }

    private void OnTriggerEnter(Collider other)
    {
        if (other.CompareTag("escudo"))
        {
            //score += 10;  // Aumenta a pontuação
             Escudo += 20;

            // Adiciona pontos ao chamar o método AddScore de PlayerStats; // Adiciona 10 pontos (pode ajustar o valor como preferir)
            playerStats.Addescudo(10);

            audioSource.PlayOneShot(collectSound);
            Destroy(other.gameObject);  // Remove o coletável
            Debug.Log("Escudo Coletado " +  Escudo);
        }
    }
}
