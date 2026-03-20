using UnityEngine;
using UnityEngine.UI;
using TMPro;
using System.Collections;

public class PlayerStats : MonoBehaviour
{
    public int maxHealth = 100; // Vida máxima
    public int currentHealth; // Vida atual do personagem
    public int score = 0; // Pontuação do jogador
    public Slider healthBar; // Referência à barra de vida
    public TMP_Text scoreText; // Referência ao texto de pontuação
    public Image healthBarFill;
    private Color originalColor;
    private bool isFlashing = false;
    private float flashDuration = 0.2f;
    public int munition;
    private int ammo_Muni;
    private int Armor;
    private int base_armor;

    void Start()
    {
        // Define a vida inicial como o valor máximo
        munition = 10;
        Armor = 10; 
        ammo_Muni = munition;
        currentHealth = maxHealth;   
        healthBar.maxValue = maxHealth;
        healthBar.value = currentHealth;
        originalColor=healthBarFill.color;
        base_armor = Armor;
        UpdateScoreText();
    }

    // Método para atualizar a vida
    public void TakeDamage(int damage)
    {
        currentHealth -= damage;
        //currentHealth = Mathf.Clamp(currentHealth, 0, maxHealth); // Garante que a vida não fique negativa
        healthBar.value = currentHealth;
        if(currentHealth > 0 && !isFlashing)
        {
           StartCoroutine(FlashRed());
        }
    }

    // Método para adicionar pontos
    public void Addarmor(int armadura)
    {
      Armor += armadura;
      UpdateScoreText();
    }
    public void AddScore(int points)
    {
        score += points;
        UpdateScoreText();
    }
    public void Addmunition(int cartucho)
    {
        munition += cartucho;
        UpdateScoreText();
        
    }

    // Atualiza o texto da pontuação
    void UpdateScoreText()
    {
        scoreText.text = "Pontuação: " + score;
    }
    private IEnumerator FlashRed(){
        isFlashing=true;
        healthBarFill.color = Color.red;
        yield return new WaitForSeconds(flashDuration);
        healthBarFill.color = originalColor;
        isFlashing = false;
    }

}
