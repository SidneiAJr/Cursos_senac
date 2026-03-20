using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.SceneManagement;

public class Menu : MonoBehaviour
{
   public GameObject pauseMenu; // Referência ao Canvas do menu de pausa

    private bool isPaused = false; // Estado do jogo (pausado ou não)

    void Update()
    {
        // Verifica se o jogador pressionou a tecla "P"
        if (Input.GetKeyDown(KeyCode.P))
        {
            if (isPaused)
            {
                ResumeGame(); // Retoma o jogo
            }
            else
            {
                PauseGame(); // Pausa o jogo
            }
        }
    }

    // Pausar o jogo
    public void PauseGame()
    {

        pauseMenu.SetActive(true); // Ativa o menu de pausa
        Time.timeScale = 0f; // Congela o tempo do jogo
        isPaused = true;
        Cursor.lockState = CursorLockMode.None; // Libera o cursor
        Cursor.visible = true; // Torna o cursor visível
        Debug.Log("Pausa");
    }

    // Retomar o jogo
    public void ResumeGame()
    {
        pauseMenu.SetActive(false); // Desativa o menu de pausa
        Time.timeScale = 1f; // Retoma o tempo normal do jogo
        isPaused = false;
        // Bloqueia o cursor novamente e o esconde
        Cursor.lockState = CursorLockMode.Locked; // Trava o cursor no centro da tela
        Cursor.visible = false; // Esconde o cursor
        Debug.Log("Resumo");
    }

    // Sair do jogo
    public void QuitGame()
    {
        // Na Unity, este comando encerra o jogo compilado (só funciona depois que o jogo estiver pronto, não na Unity)
        Debug.Log("Saindo do jogo...");
        Application.Quit();


    }      
}