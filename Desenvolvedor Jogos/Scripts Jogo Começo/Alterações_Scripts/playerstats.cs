using UnityEngine;
using UnityEngine.UI;
using TMPro;
using System.Collections;

public class PlayerStats : MonoBehaviour
{
    public int maxHealth; // Vida máxima
    public int currentHealth; // Vida atual do personagem
    public int score = 0; // Pontuação do jogador
    public TMP_Text scoreText; // Referência ao texto de pontuação
    public int munition; // Referencia a munição
    public TMP_Text MunicaoPlayer; // Referencia ao texto de municao do player
    private int Escudo;
    
    void Start()
    {
        munition = 10; //Munição do player
        maxHealth= 100;
        currentHealth = maxHealth;   
        UpdateMunicaoPlayerText();
        UpdateScoreText();
    }
    // Método para atualizar a vida
    public void TakeDamage(int damage)
    {
        currentHealth -= damage;
        currentHealth = Mathf.Clamp(currentHealth, 0, maxHealth); // Garante que a vida não fique negativa
    }
    // Método para adicionar pontos
    public void AddScore(int points)
    {
        score += points;
        UpdateScoreText();
    }
    // Método para adicionar Munição
    public void Addmunition(int cartucho)
    {
        munition += cartucho;
        UpdateMunicaoPlayerText();
        
    }
    // Método para adicionar Escudo
    void UpdateScoreText()
    {
        scoreText.text = "Pontuação: " + score;
    }
    //Da Update Na armor TMP
    //Da Update na muni TMP
    public void UpdateMunicaoPlayerText()
    {
        MunicaoPlayer.text = "Munição:" + munition;
    }

}
