using UnityEngine;

public class Arma : MonoBehaviour
{
    public string nomeArma;      // Nome da arma
    public float dano;           // Dano da arma
    public float velocidadeAtaque; // Velocidade do ataque (tempo entre ataques)

    public void Atacar()
    {
        // Lógica de ataque da arma
        Debug.Log("Atacando com " + nomeArma + " causando " + dano + " de dano.");
    }
}
