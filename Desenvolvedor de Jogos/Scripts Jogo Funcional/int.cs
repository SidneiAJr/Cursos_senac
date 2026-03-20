using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Inimigo_Inteligencia : MonoBehaviour
{
    public Transform[] waypoints;
    public float patrolSpeed = 2.0f;
    private int currentWaypoints = 0;
    public float detectionRange = 10.0f;
    public float chaseSpeed = 4.0f;
    private Transform player;
    // Update is called once per frame
    void Start()
    {
        player = GameObject.FindGameObjectWithTag("Player").transform; // Localiza o Jogador pela Tag...
    }
    void Update()
    {
        float distanceToPlayer = Vector3.Distance(transform.position, player.position);

        if(distanceToPlayer <= detectionRange)
        {
            ChasePlayer();
        }
        else{
            Patrol();
        }

    }
    void ChasePlayer()
    {
     Vector3 direction = (player.position - transform.position).normalized;
     Rigidbody rb = GetComponent<Rigidbody>();
     rb.position += direction * chaseSpeed * Time.deltaTime;
     transform.LookAt(player);
    }
      void Patrol()
      {
       if(waypoints.Length == 0 ) return;
       Transform target = waypoints[currentWaypoints];
       Vector3 direction = (target.position - transform.position).normalized;
       Rigidbody rb = GetComponent<Rigidbody>();
       rb.position += direction * patrolSpeed * Time.deltaTime;
       if(Vector3.Distance(transform.position,transform.position)<0.5f)
       {
       currentWaypoints = (currentWaypoints +1 ) % waypoints.Length;
       }
      }
    }
