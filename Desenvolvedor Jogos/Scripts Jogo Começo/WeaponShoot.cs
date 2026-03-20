using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class WeaponShoot : MonoBehaviour
{
    // Start is called before the first frame update
    // Inicia a ações
    public Animator animator;
   

    // Update is called once per frame
    void Update()
    {
       if(Input.GetMouseButtonDown(0))
       {
        animator.SetTrigger("Shoot");
       } 
    }
}
