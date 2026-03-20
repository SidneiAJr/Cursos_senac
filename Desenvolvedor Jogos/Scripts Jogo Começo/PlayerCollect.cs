using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class PlayerCollect : MonoBehaviour
{
    public int score = 0;
    public AudioClip collectSound; // Som de coleta
    private AudioSource audioSource;
    public ParticleSystem collectEffect;
    public ParticleSystem copia;
    private void Start()
    {
        // Obtém o componente de áudio
        audioSource = gameObject.AddComponent<AudioSource>();
    }
    private void OnControllerColliderHit(ControllerColliderHit hit){
        
        Instantiate(collectEffect, hit.transform.position, Quaternion.identity);
        copia = Instantiate(collectEffect, hit.transform.position, Quaternion.identity);
        copia.gameObject.SetActive(true);
    }

    private void OnTriggerEnter(Collider other)
    {
        if(other.CompareTag("Coletável"))
        {
            score +=10;
            audioSource.PlayOneShot(collectSound);
            Destroy(other.gameObject);
            Debug.Log("Coletável obtido! Pontuação: " + score);
            audioSource.PlayOneShot(collectSound);
        }
    }
}

