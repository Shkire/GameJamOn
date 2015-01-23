#pragma strict

public var velocidad: float;
public var intervalo: float;
public var alturaMinima: float;

private var mov: boolean = false;


function Start(){

	movimiento();
}

function Update () {

	// Si mov activo llama la funcion movimiento que mueve la cuchilla
	if(mov){
	
		rotatePointAroundPivot();
	}
	
	// Si la cuchilla llega a cierto punto se para el movimiento y se reinicia
	/*if(this.transform.position.y < alturaMinima){
	
		mov = false;
		// Recolocacion
		movimiento();
	}*/
 	
}

function rotatePointAroundPivot() {
   
   transform.position = Quaternion.Euler(0, 0, velocidad * Time.deltaTime) * ( transform.position - transform.parent.position) + transform.parent.position;
}

function movimiento(){

	WaitForSeconds(intervalo);
	mov = true;
}
