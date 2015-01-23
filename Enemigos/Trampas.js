#pragma strict


function OnCollisionEnter(collision: Collision){

	if(collision.gameObject.tag == "pj"){
		// Game Over
		// Animacion muerte
		// Pantalla puntuacion 
		Debug.Log("Hit PJ");
	}

}