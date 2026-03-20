void Update()
{
    if (Input.GetKeyDown(KeyCode.Space))
    {
        TakeDamage(10); // Dano ao pressionar a tecla Espaço
    }
    
    if (Input.GetKeyDown(KeyCode.P))
    {
        AddScore(5); // Pontos ao pressionar a tecla P
    }
}
