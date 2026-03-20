using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using TMPro;

public class staminasys : MonoBehaviour
{    
    public float staminaMaxima = 100f;  // Máximo de stamina
    public float staminaAtual;          // Stamina atual
    public float taxaConsumo = 10f;    // Taxa de consumo de stamina por segundo
    public float taxaRecarga = 5f;     // Taxa de recarga de stamina por segundo
    private bool estaCorrendo = false;  // Se o jogador está correndo
    public TMP_Text StaminaPlayer;

    // Evento chamado no Update para controlar o consumo e recarga de stamina
    void Update()
    {
        // Verifica se o jogador está pressionando a tecla de correr (Shift, por exemplo)
        if (Input.GetKey(KeyCode.LeftShift) && staminaAtual > 0)
        {
            // O jogador está correndo, consome stamina
            estaCorrendo = true;
            ConsumirStamina();
        }
        else
        {
            // O jogador não está correndo, recarrega stamina
            estaCorrendo = false;
            RecarregarStamina();
        }
    }
    public void UpdateStamina()
    {
      StaminaPlayer.text = "Stamina" + staminaAtual;
    }
         
    // Método para consumir stamina quando o jogador estiver correndo
    void ConsumirStamina()
    {
        // Consome stamina a uma taxa constante
        staminaAtual -= taxaConsumo * Time.deltaTime;

        // Garante que a stamina não ultrapasse o valor mínimo
        if (staminaAtual < 0)
        {
            staminaAtual = 0;
        }
    }

    // Método para recarregar stamina quando o jogador não estiver correndo
    void RecarregarStamina()
    {
        // Recarrega stamina a uma taxa constante
        if (staminaAtual < staminaMaxima)
        {
            staminaAtual += taxaRecarga * Time.deltaTime;
        }

        // Garante que a stamina não ultrapasse o valor máximo
        if (staminaAtual > staminaMaxima)
        {
            staminaAtual = staminaMaxima;
        }
    }
}
