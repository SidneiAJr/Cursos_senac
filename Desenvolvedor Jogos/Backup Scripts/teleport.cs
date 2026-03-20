using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class teleport : MonoBehaviour
{
   public Transform teleportTarget;
   public GameObject player;
   void onTriggerEnter(Collider Other)
   {
    player.transform.position = teleportTarget.transform.position;
   }
}
