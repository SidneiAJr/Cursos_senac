using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class explosion : MonoBehaviour
{
    public AudioClip destroySound; // Som de coleta
    private AudioSource audioSource; 
    void Start()
    {
        audioSource = gameObject.AddComponent<AudioSource>();
        audioSource.PlayOneShot(destroySound);
    }

    // Update is called once per frame
    void Update()
    {
        
    }
}
