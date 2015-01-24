#pragma strict

public var fuerza: Vector2;

function Update () {

	if (Input.GetKey("x")){
		
		transform.rigidbody2D.AddForce(fuerza);
	}

}
