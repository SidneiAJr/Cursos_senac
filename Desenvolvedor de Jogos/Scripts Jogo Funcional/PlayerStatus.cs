using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI; // Para trabalhar com UI
using TMPro;

public class PlayerStatus : MonoBehaviour
{
    public int nivel = 0;                  // Nível atual do jogador
    public int vidaAtual;                 // Vida atual do jogador
    public int vidaMaxima = 100;         // Vida máxima do jogador
    public int experienciaAtual = 0;     // Experiência atual do jogador
    public int experienciaParaSubir = 100; // Quantidade de experiência necessária para subir de nível
    public int aumentoVidaPorNivel = 30;   // Quanto a vida aumenta por nível
    public TMP_Text Xpplayer;
    public TMP_Text VidaPlayer;
    private Text nivelText;
    private Text experienciaText;
    public int experiencia = 0;
    public int experienciaParaProximoNivel = 5; // Quantidade de XP necessária para o próximo nível
    public int experienciaPorNivel = 5; // A XP necessária por nível
    private int armaduraplayer = 5;
    private int velataque = 5;
    private double roubo = 0.25;
    public int armaduraplyernivel = 30;
    public int roubonivel = 30;
    public int velataquenivel = 20;


    public void AdicionarExperiencia(int quantidade)
    {
        // Adiciona a quantidade de experiência
        experienciaAtual += quantidade;
        
        // Verifica se o jogador atingiu ou ultrapassou a experiência necessária para subir de nível
        while (experienciaAtual >= experienciaParaSubir)
        {
            // Subir de nível
            experienciaAtual -= experienciaParaSubir;  // Reduz a experiência restante
            SubirDeNivel();
        }
    }

    void SubirDeNivel()
    {
        nivel++;  // Aumenta o nível
        Debug.Log("Você subiu para o nível " + nivel);
        
        // Aumenta a vida máxima
        vidaMaxima += aumentoVidaPorNivel;
        armaduraplayer += armaduraplyernivel;
        roubo += roubonivel;
        velataque += velataquenivel;
        // Restaura a vida do jogador para o valor máximo
        vidaAtual = vidaMaxima;
        Debug.Log("Vida aumentada! Vida Máxima: " + vidaMaxima);
    }
     public void Updatenivel()
    {
        Xpplayer.text = "Level:" + nivel;
    }
    public void UpdatevidaNivel()
    {
      VidaPlayer.text = "Vida:" + vidaAtual;
    }
    // Método para adicionar XP ao jogador
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
}

