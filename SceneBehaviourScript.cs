using UnityEngine;
using System.Collections;

public class SceneBehaviourScript : MonoBehaviour
{

    private bool giroIzq;
    private bool giroDer;
    public float velocidadGiro;

    // Use this for initialization
    void Start()
    {

    }

    // Update is called once per frame
    void Update()
    {

        if (Input.GetKeyDown(KeyCode.RightArrow) && !giroIzq)
        {

            giroDer = true;

        }

        if (Input.GetKeyDown(KeyCode.LeftArrow) && !giroDer)
        {

            giroIzq = true;

        }

        if (Input.GetKeyUp(KeyCode.RightArrow) && giroDer)
        {

            giroDer = false;

        }

        if (Input.GetKeyUp(KeyCode.LeftArrow) && giroIzq)
        {

            giroIzq = false;

        }
    }

    void FixedUpdate()
    {

        if (giroDer)
        {

            gameObject.transform.Rotate(-Vector3.forward * velocidadGiro * Time.fixedDeltaTime);

        }

        if (giroIzq)
        {

            gameObject.transform.Rotate(Vector3.forward * velocidadGiro * Time.fixedDeltaTime);

        }


    }
}
