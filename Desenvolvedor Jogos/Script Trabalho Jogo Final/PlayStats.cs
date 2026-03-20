using UnityEngine;
using UnityEngine.UI;
using TMPro;
using System.Collections;

public class PlayerStats : MonoBehaviour
{
    public int maxHealth; // Vida máxima
    public int currentHealth; // Vida atual do personagem
    public int score = 0; // Pontuação do jogador
    public Slider healthBar; // Referência à barra de vida
    public TMP_Text scoreText; // Referência ao texto de pontuação
    public Image healthBarFill;
    private Color originalColor;
    private bool isFlashing = false;
    private float flashDuration = 0.2f;
    public int munition; // Referencia a munição
    public int Armor; // Referencia a armadura do player
    public TMP_Text MunicaoPlayer; // Referencia ao texto de municao do player
    public TMP_Text VidaPlayer;
    public Image ammoFill; // fill da ammo
    void Start()
    {
        // Define a armadura
        Armor = 30; // Armadura base do Player
        maxHealth= 100;
        munition = 5;
        //Munição Player
        currentHealth = maxHealth;   
        healthBar.maxValue = maxHealth;
        healthBar.value = currentHealth;
        originalColor=healthBarFill.color;
        //Vida do player 
        UpdateVidaPlayer();
        UpdateScoreText();
        UpdateMunicaoPlayerText();
    
    }
    // Método para atualizar a vida
    public void TakeDamage(int damage)
    {
        currentHealth -= damage;
        currentHealth = Mathf.Clamp(currentHealth, 0, maxHealth); // Garante que a vida não fique negativa
        healthBar.value = currentHealth;
        if(currentHealth > 0 && !isFlashing)
        {
           StartCoroutine(FlashRed());
        }
    }
    // Método para adicionar armadura
    // Método para adicionar pontos
    public void AddScore(int points)
    {
        score += points;
        UpdateScoreText();
    }
    // Método para adicionar Stamina
     public void Addmunition(int cartucho)
    {
        munition += cartucho;
        UpdateMunicaoPlayerText();
        
    }
    public void AddVida(int vidapl)
    {
        currentHealth += vidapl;
        UpdateVidaPlayer();

    }
    public void UpdateVidaPlayer()
    {
      VidaPlayer.text = "Vida:" + currentHealth;
    }
    // Atualiza o Score TMP
    void UpdateScoreText()
    {
        scoreText.text = "Pontuação:" + score;
    }
    //Da Update Na armor TMP
    public void UpdateMunicaoPlayerText()
    {
        MunicaoPlayer.text = "Munição:" + munition;
    }
    private IEnumerator FlashRed(){
        isFlashing=true;
        healthBarFill.color = Color.red;
        yield return new WaitForSeconds(flashDuration);
        healthBarFill.color = originalColor;
        isFlashing = false;
    }

}
