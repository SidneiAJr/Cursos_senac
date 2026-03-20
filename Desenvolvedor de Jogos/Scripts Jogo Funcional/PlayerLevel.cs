using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI; // Para trabalhar com UI
using TMPro;
public class PlayerLevel : MonoBehaviour
{
    // Propriedades do jogador
    public int nivel = 0;
    public int experiencia = 0;
    public int experienciaParaProximoNivel = 5; // Quantidade de XP necessária para o próximo nível
    public int experienciaPorNivel = 5; // A XP necessária por nível
    public TMP_Text Xpplayer;
    // UI para mostrar o nível e XP
    private Text nivelText;
    private Text experienciaText;
    private PlayerStats stats;
    public float aumentoDanoPorNivel = 5f;
    private PlayerStatus playerStatus;
    public TMP_Text VidaPlayer;
    private PlayerStats playerStats;
    // Atualiza a UI e verifica se o jogador subiu de nível
    void Update()
    {
        // Atualiza a UI com o nível e XP do jogador
        if (nivelText != null && experienciaText != null)
        {
            nivelText.text = "Nível: " + nivel.ToString();
            experienciaText.text = "XP: " + experiencia.ToString() + "/" + experienciaParaProximoNivel.ToString();
        }

        // Verifica se o jogador atingiu o limite de XP para subir de nível
        if (experiencia >= experienciaParaProximoNivel)
        {
            SubirDeNivel();
        }
        Updatenivel();
        UpdatevidaNivel();
    }
    public void Updatenivel()
    {
        Xpplayer.text = "Level:" + nivel;
    }
    public void UpdatevidaNivel()
    {
      VidaPlayer.text = "Vida:" + playerStats.currentHealth;
    }
    // Método para adicionar XP ao jogador
    public void AdicionarExperiencia(int xp)
    {
        experiencia += xp;

        // Verifica se o jogador atingiu a XP necessária para subir de nível
        if (experiencia >= experienciaParaProximoNivel)
        {
            SubirDeNivel();
        }
    }

    // Método para subir de nível
    void SubirDeNivel()
    {
        nivel++;
        experiencia -= experienciaParaProximoNivel; 
        experienciaParaProximoNivel = experienciaPorNivel + (nivel - 1) * 20;
        Debug.Log("Você subiu para o nível " + nivel + "!");
        playerStatus.vidaMaxima += playerStatus.aumentoVidaPorNivel;
        playerStatus.vidaAtual = playerStatus.vidaMaxima;
    }
}
