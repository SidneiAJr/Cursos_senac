using UnityEngine;

public class TrocaDeArma : MonoBehaviour
{
    public Arma[] armas;          // Lista de armas que o jogador pode equipar
    private int armaAtual = 0;     // Índice da arma equipada no momento
    private Arma arma;

    void Start()
    {
        EquiparArma(armaAtual); // No início, equipamos a primeira arma
    }

    void Update()
    {
        // Trocar de arma com a tecla numérica (1-9 ou outras teclas)
        if (Input.GetKeyDown(KeyCode.Alpha1))
        {
            EquiparArma(0); // Trocar para a primeira arma
        }
        else if (Input.GetKeyDown(KeyCode.Alpha2) && armas.Length > 1)
        {
            EquiparArma(1); // Trocar para a segunda arma
        }
        else if (Input.GetKeyDown(KeyCode.Alpha3) && armas.Length > 2)
        {
            EquiparArma(2); // Trocar para a terceira arma
        }

        // Chama a função de ataque da arma atual (usando a tecla de ataque)
        if (Input.GetButtonDown("Fire1")) // Geralmente é o clique do mouse ou o botão de ataque
        {
            armas[armaAtual].Atacar();
        }
    }

    // Função para equipar uma arma específica
    void EquiparArma(int indiceArma)
    {
        if (indiceArma >= 0 && indiceArma < armas.Length)
        {
            // Desativa todas as armas
            foreach (Arma arma in armas)
            {
                arma.gameObject.SetActive(false);
            }

            // Ativa a arma selecionada
            armas[indiceArma].gameObject.SetActive(true);
            armaAtual = indiceArma; // Atualiza a arma atual
            Debug.Log("Arma equipada: " + armas[armaAtual].nomeArma);
        }
    }
}
