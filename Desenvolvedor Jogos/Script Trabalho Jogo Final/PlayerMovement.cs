using System.Collections;
using System.Collections.Generic;
using UnityEngine;

[RequireComponent(typeof(CharacterController))] // Assegura que o CharacterController está presente
public class PlayerMovement : MonoBehaviour
{
    public float speed = 15.0f; // Velocidade de movimento do Player
    public float jumpHeight = 3.0f; // Altura do pulo
    public float gravity = -9.81f; // Força da gravidade
    private CharacterController controller; // Referência ao CharacterController
    private Vector3 velocity; // Armazena a velocidade do player para gravidade e pulo
    private bool isGrounded; // Verifica se o player está no chão
    public float Velocidadedecorrida = 15f; //velocidade de corrida
    private PlayerStats playerStats;//Referencia ao Player Status, onde esta os status do player principal
    private PlayerStats stamina; //Referencia a stamina do player no playerStats

    void Start()
    {
        // Obtém o componente CharacterController que está anexado ao Player
        controller = GetComponent<CharacterController>();
    }

    void Update()
    {
        // Verifica se o player está no chão
        isGrounded = controller.isGrounded;
        // Reseta a velocidade para evitar acumulação ao tocar o chão
        if (isGrounded && velocity.y < 0)
        {
            velocity.y = -2f;
        }

        // Obter entrada do usuário (teclas W, A, S, D)
        float horizontalInput = Input.GetAxis("Horizontal"); // Entrada para esquerda e direita
        float verticalInput = Input.GetAxis("Vertical");     // Entrada para frente e trás

        // Cria um vetor de direção com base na entrada
        Vector3 moveDirection = transform.right * horizontalInput + transform.forward * verticalInput;

        // Move o Player com o CharacterController
        controller.SimpleMove(moveDirection * speed);

        // Checa se o player quer pular e se ele está no chão
        if (Input.GetButtonDown("Jump") && isGrounded)
        {
            // Define a velocidade para o pulo usando a fórmula de altura
            velocity.y = Mathf.Sqrt(jumpHeight * -2f * gravity);
        }

        // Aplica a gravidade ao player
        velocity.y += gravity * Time.deltaTime;

        // Move o player verticalmente com base na velocidade
        controller.Move(velocity * Time.deltaTime);

        if(Input.GetKey(KeyCode.LeftShift))
        {
          speed=Velocidadedecorrida;
        }



        

    }
}
