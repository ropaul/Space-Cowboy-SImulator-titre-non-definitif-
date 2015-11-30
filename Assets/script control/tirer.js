#pragma strict


var explosion : GameObject ;

function Start () {
	
}

function Update () {

	
	
	UpdateKeyboardMovements();
	//UpdateVaiseauxPlan();
}

function UpdateKeyboardMovements(){
// Testing the keyboard events for arrows
// And apply a force to the desired direction on the rigid body
	
	
	if(Input.GetKey("a")){
	var hit : RaycastHit;
	//var ray = GetComponent.<Camera>().ScreenPointToRay(transform.position); 
	var forward : Vector3 = transform.TransformDirection( - Vector3.up ) * 10;
	if (Physics.Raycast(transform.position, forward,hit, 1000)) {
		Debug.DrawRay(transform.position,forward,Color.red);
		Destroy(hit.collider.gameObject);
		Instantiate (explosion, hit.collider.gameObject.transform.position ,hit.collider.gameObject.transform.rotation );
	}
	else {
		Debug.DrawRay(transform.position,forward,Color.green);
	}
	
	
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