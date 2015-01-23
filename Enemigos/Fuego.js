#pragma strict

public var intervalo: float;
public var duracion: float;
private var fuego: boolean = false;

function Start(){

	InvokeRepeating("fuegoOn", intervalo, intervalo+duracion);
}

function fuegoOn(){
	
	fuego = true;
	// Modificar collision box
	// Animacion fuego
	fuego = false;
}

function OnCollisionEnter(collision: Collision){

	if(collision.gameObject.tag == "pj" && fuego == true){
		// Game Over
		// Animacion muerte quemado
		// Pantalla puntuacion 
	}
}