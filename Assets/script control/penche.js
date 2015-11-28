#pragma strict

function Start () {

}

function Update () {
UpdateKeyboardMovements();
}

function UpdateKeyboardMovements(){
// Testing the keyboard events for arrows
// And apply a force to the desired direction on the rigid body
	


	if(Input.GetKey("q") && ! Input.GetKey("d") ){
		//transform.Rotate(Vector3.forward, Space.Self);
		//transform.localEulerAngles=Vector3.Lerp(transform.localEulerAngles, new Vector3(0,0,45) ,Time.deltaTime);
		transform.localRotation = Quaternion.Lerp(transform.localRotation, new Quaternion.Euler(0,0,45) ,Time.deltaTime);
	}
	else if(Input.GetKey("d") && ! Input.GetKey("q")){
		//transform.Rotate(Vector3.back, Space.Self);
		//transform.localEulerAngles=Vector3.Lerp(transform.localEulerAngles, new Vector3(0,0,-45) ,Time.deltaTime);
		transform.localRotation = Quaternion.Lerp(transform.localRotation, new Quaternion.Euler(0,0,-45) ,Time.deltaTime);
	}
	else{
		//transform.localEulerAngles=Vector3.Lerp(transform.localEulerAngles, new Vector3(0,0,0) ,Time.deltaTime*2);
		transform.localRotation = Quaternion.Lerp(transform.localRotation, new Quaternion.Euler(0,0,0) ,Time.deltaTime*3);
	}
}
	