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
    private Color originalColor;
    public int munition; // Referencia a munição
    private int Armor; // Referencia a armadura do player
    public TMP_Text MunicaoPlayer; // Referencia ao texto de municao do player
    public TMP_Text ArmaduraPlayer; // Referencia ao texto de municao do player
    public TMP_Text EscudoPlayer; //Referencia ao escudo player
    private int Escudo;
    public TMP_Text VidaPlayer; // Referencia ao texto de municao do player
    void Start()
    {
        // Define a armadura
        munition = 10; //Munição do player
        Armor = 30; // Armadura base do Player
        Escudo = 100; //Escudo do player
        maxHealth= 300;
        //Munição Player
        currentHealth = maxHealth;   
        //Vida do player 
        UpdateArmaduraPlayerText();
        UpdateEscudoTeste();
        UpdateVidaPlayer();
        UpdateMunicaoPlayerText();
        UpdateScoreText();
    }
    // Método para atualizar a vida
    public void TakeDamage(int damage)
    {
        currentHealth -= damage;
        currentHealth = Mathf.Clamp(currentHealth, 0, maxHealth); // Garante que a vida não fique negativa
    }

    // Método para adicionar armadura
    public void Addarmor(int armadura)
    {
      Armor += armadura;
      UpdateArmaduraPlayerText();
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
    public void Addescudo(int escudobase)
    {
        Escudo += escudobase;
        UpdateEscudoTeste();
        
    }
    // Método para adicionar Stamina
    public void AddVida(int vidapl)
    {
        currentHealth += vidapl;
        UpdateVidaPlayer();

    }
    public void UpdateVidaPlayer()
    {
      VidaPlayer.text = "Sua Vida Atual é:" + currentHealth;
    }
    void UpdateScoreText()
    {
        scoreText.text = "Pontuação: " + score;
    }
    //Da Update Na armor TMP
    void UpdateArmaduraPlayerText()
    {
        ArmaduraPlayer.text = "Armadura " + Armor;
    }
    //Da Update na muni TMP
    public void UpdateMunicaoPlayerText()
    {
        MunicaoPlayer.text = "Munição:" + munition;
    }
    //Da Update No Escudo TMP
    void UpdateEscudoTeste()
    {
        EscudoPlayer.text = "Escudo: " + Escudo;
    }

}
