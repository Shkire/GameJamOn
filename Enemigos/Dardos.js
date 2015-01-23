#pragma strict

function OnCollisionEnter(collision: Collision){

	if(collision.gameObject.tag != "pf"){
	
		Destroy(this);
	}
}
