#pragma strict

// Poner el script a un objeto empty en el sitio exacto a detectar

public var trampa1: GameObject;
public var trampa2: GameObject;
public var velocidad: float;

private var mov: boolean = false;

function OnTriggerEnter(other: Collider){

	if(other.gameObject.tag == "pj"){
		
		other.collider.isTrigger = true;
		mov = true;
		
		// Game Over
		// Animacion muerte y cierra de trampas
		// Pantalla puntuacion 
	}
}

function Update(){

	if(mov){
	
		rotatePointAroundPivot();
	}
	
	if(trampa2.transform.position.x <= 0.6 || trampa1.transform.position.x >= -0.6){
	
		mov = false;
		Debug.Log("Stopped");
	}
}

function rotatePointAroundPivot() {
   
    trampa1.transform.position = Quaternion.Euler(0, 0, -velocidad * Time.deltaTime) * ( trampa1.transform.position - trampa1.transform.parent.position) +  trampa1.transform.parent.position;
	trampa2.transform.position = Quaternion.Euler(0, 0, velocidad * Time.deltaTime) * ( trampa2.transform.position -  trampa2.transform.parent.position) +  trampa2.transform.parent.position;
	trampa1.rigidbody.AddTorque(Vector3(0,0,-50));
	trampa2.rigidbody.AddTorque(Vector3(0,0,50));
}