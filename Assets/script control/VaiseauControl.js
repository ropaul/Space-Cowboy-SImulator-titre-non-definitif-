#pragma strict

// This variable allows control of the ball's speed
// It will appear in the component of the GameObject as editable
var speed: double = 5;

// Contains the audio clip to play
public var soundEffect: AudioClip;


public var specialEffect : GameObject;

function Start () {
	
}

function Update () {
	transform.Translate(Vector3.forward*speed, Camera.main.transform);
	UpdateKeyboardMovements();
	//UpdateVaiseauxPlan();
}

function UpdateKeyboardMovements(){
// Testing the keyboard events for arrows
// And apply a force to the desired direction on the rigid body
	
	
	if(Input.GetKey("z")){
		transform.Rotate(Vector3.right, Space.Self);
	}
	if(Input.GetKey("s")){
		transform.Rotate(Vector3.left, Space.Self);
	}
	if(Input.GetKey("q")){
		transform.Rotate(Vector3.down, Space.World);
	}
	if(Input.GetKey("d")){
		transform.Rotate(Vector3.up, Space.World);
	}

	
}

function UpdateVaiseauxPlan(){
	if(!(Input.GetKey("z")||Input.GetKey("s"))){
		if(transform.rotation.x >0 && transform.rotation.x <180){
			transform.Rotate(Vector3.left, Space.Self);
		}
		else if(transform.rotation.x >180 && transform.rotation.x < 360){
			transform.Rotate(Vector3.right, Space.Self);	
		}
	}
	//transform.rotation.y=0;
	transform.rotation.z=0;
}

// Starts audio clip at collision !
// it needs a component audio source in the GameObject of course
function OnCollisionEnter(collideEvent:Collision){
	GetComponent.<AudioSource>().PlayOneShot(soundEffect);
	//or an alternative
	// AudioSource.PlayClipAtPoint(myClip, transform.position);
	
	Instantiate(specialEffect, collideEvent.gameObject.transform.position, collideEvent.gameObject.transform.rotation);
	Destroy(collideEvent.gameObject);
}