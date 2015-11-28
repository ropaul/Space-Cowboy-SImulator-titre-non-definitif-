#pragma strict

#pragma strict

// This variable allows control of the ball's speed
// It will appear in the component of the GameObject as editable
var speed: double = 5;
var vuedroite : boolean = false ;
var vuegauche: boolean = false ;
var vuehaut : boolean = false ;
var vuebas : boolean = false ;

// Contains the audio clip to play
public var soundEffect: AudioClip;


public var specialEffect : GameObject;

function Start () {
	
}

function Update () {
	transform.Translate(Vector3.forward*0.5, Camera.main.transform);
	IAReactif ();
	//UpdateVaiseauxPlan();
}



function IAReactif () {
	// GameObject.FindGameObjectWithTag("Your_Tag_Here").transform.position;
	// var raycastD : RaycastHit;
	// var rayDroite = GetComponent.<Camera>().ScreenPointToRay(Input.position);
	// var raycastG : RaycastHit;
	// var rayGauche = GetComponent.<Camera>().ScreenPointToRay(Input.position);
	
	
	// Vector3 fwd = transform.TransformDirection(Vector3.forward);
        // if (Physics.Raycast(transform.position, fwd, 1000)) {
            // print("There is something in front of the object!");
        // }
	
	
	// if(raycast.collider.name =="nav"){		
		// var Target : gameObject;
		// Debug.DrawRay(ray.origin, ray.direction*1000,Color.red);
	// }
		// Target.transform.position = RaycastHit.point;
		 // if (Target!= null){
		 // Target.transform.position = rayHit.point;
		 // }
		
	// else {
		// if ( vuedroite == true ){
			// transform.Rotate(Vector3.up, Space.World);
		// }
		// if ( vuegauche  == true ){
			// transform.Rotate(Vector3.down, Space.World);
		// }
		// if ( vuehaut  == true ){
			// transform.Rotate(Vector3.right, Space.Self);
		// }
		// if ( vuebas == true ){
			// transform.Rotate(Vector3.left, Space.Self);
		// }
	
	// }
	
		
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