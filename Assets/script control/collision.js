#pragma strict

var thePrefab : GameObject ;
public var specialEffect :GameObject ;

function Start () {

}

function Update () {

}

// Starts audio clip at collision !
// it needs a component audio source in the GameObject of course
function OnCollisionEnter(collideEvent:Collision){
	//GetComponent.<AudioSource>().PlayOneShot(soundEffect);
	//or an alternative
	// AudioSource.PlayClipAtPoint(myClip, transform.position);
	
	Instantiate(specialEffect, collideEvent.gameObject.transform.position, collideEvent.gameObject.transform.rotation);
	Destroy(collideEvent.gameObject);
	var instance : GameObject = Instantiate (thePrefab, transform.position , transform.rotation );
}