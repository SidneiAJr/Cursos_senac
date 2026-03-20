using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class teste : MonoBehaviour
{
    // Distância de interação (quanto longe o jogador pode interagir com os objetos)
    public float distanciaInteracao = 3f;

    // Camada de objetos interativos (opcional, caso queira filtrar quais objetos são interativos)
    public LayerMask camadaObjetosInterativos;

    // Update é chamado uma vez por frame
    void Update()
    {
        // Verificar se o jogador pressionou a tecla "E"
        if (Input.GetKeyDown(KeyCode.E))
        {
            // Realizar a interação com o objeto
            Interagir();
        }
    }

    void Interagir()
    {
        // Criar um Raycast a partir da posição da câmera do jogador, olhando para frente
        RaycastHit hit;
        Ray raio = new Ray(Camera.main.transform.position, Camera.main.transform.forward);

        // Verifica se o Raycast colidiu com algum objeto dentro da distância de interação
        if (Physics.Raycast(raio, out hit, distanciaInteracao, camadaObjetosInterativos))
        {
            // Se o objeto colidido tiver um script de "Interativo", chamamos a função de interação
            Interativo interativo = hit.collider.GetComponent<Interativo>();
            if (interativo != null)
            {
                interativo.Interagir();
            }
        }
    }
}
