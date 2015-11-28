#pragma strict

function Start () {
	
}

function Update () {
	var ray = GetComponent.<Camera>().ScreenPointToRay(transform.position); 
	Debug.DrawRay(ray.origin, ray.direction*1000,Color.red);
	//transform.Translate(Vector3.forward*0.5, Camera.main.transform);
	UpdateKeyboardMovements();
	//UpdateVaiseauxPlan();
}

function UpdateKeyboardMovements(){
// Testing the keyboard events for arrows
// And apply a force to the desired direction on the rigid body
	
	
	if(Input.GetKey("a")){
//	Vector3 fwd = transform.TransformDirection(Vector3.forward);
        // if (Physics.Raycast(transform.position, fwd, 1000)) {
            // print("There is something in front of the object!");
        // }
	
		// var raycast : RaycastHit;
		// var ray = GetComponent.<Camera>().ScreenPointToRay(Vector3.forward); 
		// Debug.DrawRay(ray.origin, ray.direction*1000,Color.red);
		// transform.Rotate(Vector3.right, Space.Self);
		//Target.transform.position = RaycastHit.point;

		// if (Target!= null){
		// Target.transform.position = rayHit.point;
		// }
	}
	
}