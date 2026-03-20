using System.Collections;
using System.Collections.Generic;
using UnityEngine;

[RequireComponent(typeof(CharacterController))] // Assegura que o CharacterController está presente
public class PlayerMovement : MonoBehaviour
{
    public float speed = 6.0f; // Velocidade de movimento do Player
    
    private CharacterController controller; // Referência ao CharacterController

    public float jump = -2f;

    public float gravity = - 9.89f;

    private Vector3 velocity;

    //private Vector3 playerVelocity; Verificar qual funciona.

    //O método Start() é chamado UMA VEZ assim que o jogo começa
    void Start()
    {
        
        // Obtém o componente CharacterController que está anexado ao Player
        //GetComponent significa "Pegar componente"
        controller = GetComponent<CharacterController>();
    }

    void Update()
    {
        // Obter entrada do usuário (teclas W, A, S, D)
        float horizontalInput = Input.GetAxis("Horizontal"); // Entrada para esquerda e direita
        float verticalInput = Input.GetAxis("Vertical");     // Entrada para frente e trás
        groundedPlayer = controller.isGrounded;
        if (groundedPlayer && playerVelocity.y < 0)
        {
            playerVelocity.y = 0f;
        }
        Vector3 move = new Vector3(Input.GetAxis("Horizontal"), 0, Input.GetAxis("Vertical"));
        controller.Move(move * Time.deltaTime * playerSpeed);
        if (move != Vector3.zero)
        {
            gameObject.transform.forward = move;
        }


        playerVelocity.y += gravityValue * Time.deltaTime;
        controller.Move(playerVelocity * Time.deltaTime);

        // Cria um vetor de direção com base na entrada
        Vector3 moveDirection = transform.right * horizontalInput + transform.forward * verticalInput;

        // Move o Player com o CharacterController
        controller.SimpleMove(moveDirection * speed);
    }
}
