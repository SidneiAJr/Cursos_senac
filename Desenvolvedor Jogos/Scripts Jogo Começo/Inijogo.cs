using UnityEngine;
using UnityEngine.UI;
using TMPro;
using System.Collections;
public class Inijogo : MonoBehaviour
{
[SerializeField]private string Menu;
[SerializeField]private GameObject painelMenuInicial;
[SerializeField]private GameObject painelSair;
public void Jogar(){
    SceneManager.LoadScene(Level1);
}
public void Sair(){
    Application.Quit();
    Debug.Log("Saindo do Jogo");
}
}
