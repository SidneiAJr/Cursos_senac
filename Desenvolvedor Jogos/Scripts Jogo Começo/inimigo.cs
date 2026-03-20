using UnityEngine;
using UnityEngine.UI;
using TMPro;
using System.Collections;

public class Inimigo : MonoBehaviour
{
    public int Health; // Vida máxima
    public ParticleSystem sm_ini; // Efeito visual de coleta
    public ParticleSystem copia;
    public AudioClip collectSound; // Som de coleta
    private AudioSource audioSource; 
    public GameObject player;
    private PlayerStats playerStats;

   // Método para atualizar a vida
    void Start()
    {
        Health=100;
        audioSource = gameObject.AddComponent<AudioSource>();
         playerStats = player.GetComponent<PlayerStats>();
    }

    public void TakeDamage(int damage)
    {
        Health -= damage;
    }
     //comparação de tag para dar dano.
    private void OnCollisionEnter(Collision other)
    {
        if (other.gameObject.CompareTag("Projétil"))
        {
        TakeDamage(50);
        Destroy(other.gameObject);
        if (Health <= 0){
            audioSource.PlayOneShot(collectSound);
            playerStats.AddScore(10);
            Destroy(this.gameObject);
            copia = Instantiate(sm_ini, this.transform.position, Quaternion.identity);
        }
        }
    }
}
