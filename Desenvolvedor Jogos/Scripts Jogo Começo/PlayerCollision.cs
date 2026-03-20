using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class PlayerCollision : MonoBehaviour
{
    public AudioClip collectSound; // Som de coleta
    private AudioSource audioSource;
    public ParticleSystem collectEffect; // Efeito visual de coleta
    private ParticleSystem copia; // Cópia da partícula

    private void Start()
    {
        // Obtém o componente de áudio
        audioSource = gameObject.AddComponent<AudioSource>();
    }

    // Método chamado automaticamente quando o jogador colide com outro objeto
    private void OnControllerColliderHit(ControllerColliderHit hit)
    {
        // Verifica se o objeto com o qual colidimos possui a tag "Item"
        //SE o GameObject com o qual o player colidir tiver a tag "Item", acontece algo
        if (hit.gameObject.CompareTag("item"))
        {
            // Exibe uma mensagem no console indicando a colisão
            Debug.Log("Item coletado!");
            
            // Aqui você pode adicionar outras interações, como efeitos sonoros, pontos, etc.
            
             // Toca o som de coleta
            audioSource.PlayOneShot(collectSound);

            // Ativa o efeito de partículas na posição do objeto coletado
            //Instantiate: método que cria uma cópia de um objeto no jogo. Os argumentos são: 1- o objeto que eu quero instanciar, 2- a posição onde ele será criado, 3 - a rotação dele
            //Quaternion é o comando que usamos na Unity para pegar a rotação de algo. O identity indica que a rotação é neutra, sem rotação.
            copia = Instantiate(collectEffect, hit.transform.position, Quaternion.identity);

            copia.gameObject.SetActive(true);

            // Desativa o item coletado
            hit.gameObject.SetActive(false);
            
        }
    }
}
