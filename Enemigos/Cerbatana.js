#pragma strict

public var intervalo: float;
public var dardo: GameObject;
public var origen: GameObject;
public var direccion: Vector3;

function Start(){

	InvokeRepeating("lanza", intervalo, intervalo);
}

function lanza(){

	var instancia: GameObject = Instantiate(dardo, origen.transform.position, new Quaternion.Euler(0,0,90));
	instancia.rigidbody.AddForce(direccion);
}

