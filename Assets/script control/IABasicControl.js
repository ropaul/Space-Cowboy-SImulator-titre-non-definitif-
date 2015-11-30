#pragma strict

#pragma strict

// This variable allows control of the ball's speed
// It will appear in the component of the GameObject as editable
var speed: double = 0.5;
var vuedroite : boolean = false ;
var vuegauche: boolean = false ;
var vuehaut : boolean = false ;
var vuebas : boolean = false ;

var followTime : int = 2000 ;

var vecup : Vector3 = Vector3(0,10,0) ;
var vecdown : Vector3 = Vector3(0,-10,0) ;
var vecright : Vector3 = Vector3(10,0,0) ;
var vecleft : Vector3 = Vector3(-10,0,0) ;


// Contains the audio clip to play
public var soundEffect: AudioClip;


public var specialEffect : GameObject;

function Start () {
	
}

function Update () {
	transform.Translate(Vector3.forward*speed, Camera.main.transform);
	IAReactif ();
	//UpdateVaiseauxPlan();
}



function IAReactif () {

	var tempoH : int =0;
	var tempoB : int =0;
	var tempoG : int =0;
	var tempoD : int =0;
	
	var hitH1 : RaycastHit;
	var hitH2 : RaycastHit;
	var hitH3 : RaycastHit;
	var hitH4 : RaycastHit;
	
	var hitB1 : RaycastHit;
	var hitB2 : RaycastHit;
	var hitB3 : RaycastHit;
	var hitB4 : RaycastHit;
	
	var hitG1 : RaycastHit;
	var hitG2 : RaycastHit;
	var hitG3 : RaycastHit;
	var hitG4 : RaycastHit;
	
	var hitD1 : RaycastHit;
	var hitD2 : RaycastHit;
	var hitD3 : RaycastHit;
	var hitD4 : RaycastHit;
	
	var tableH = [ 2*vecup + vecleft , 2*vecup ,2*vecup + vecright];
	var tableB = [ 2*vecdown + vecleft , 2*vecdown ,2*vecdown + vecright];
	var tableG = [ 2*vecleft + vecdown , 2*vecleft ,2*vecleft + vecup];
	var tableD = [ 2*vecright + vecdown , 2*vecright ,2*vecright + vecup];
	
	var table = [ tableH ,tableB,tableG,tableD];
	
	var hitH = [ hitH1,hitH2,hitH3,hitH4]; 
	var hitB = [ hitB1,hitB2,hitB3,hitB4];
	var hitG = [ hitG1,hitG2,hitG3,hitG4];
	var hitD = [ hitD1,hitD2,hitD3,hitD4];
	
	var hit = [ hitH,hitB ,hitG,hitD] ;
	 
	var forward : Vector3 = transform.TransformDirection(  Vector3.forward ) * 10000;
	
	
	
	var j : int =0 ;
	
	for ( j = 0 ; j < 3 ; j++) {
		if (Physics.Raycast(transform.position +  tableH[j], forward,hitH[j], 1000)) {
		Debug.DrawRay(transform.position+ tableH[j],forward,Color.red);
		tempoH = followTime;
		vuehaut = true ;
		}
		else {
			Debug.DrawRay(transform.position + tableH[j],forward,Color.yellow);
		}
	}
	
	for ( j = 0 ; j < 3 ; j++) {
		if (Physics.Raycast(transform.position +  tableB[j], forward,hitB[j], 1000)) {
		Debug.DrawRay(transform.position+ tableB[j],forward,Color.red);
		tempoB = followTime;
		vuebas = true ;
		}
		else {
			Debug.DrawRay(transform.position + tableB[j],forward,Color.yellow);
		}
	}
	for ( j = 0 ; j < 3 ; j++) {
		if (Physics.Raycast(transform.position +  tableG[j], forward,hitG[j], 1000)) {
		Debug.DrawRay(transform.position+ tableG[j],forward,Color.red);
		tempoG = followTime;
		vuegauche = true ;
		}
		else {
			Debug.DrawRay(transform.position + tableG[j],forward,Color.yellow);
		}
	}
	for (j = 0 ; j < 3 ; j++) {
		if (Physics.Raycast(transform.position +  tableD[j], forward,hitD[j], 1000)) {
		Debug.DrawRay(transform.position+ tableD[j],forward,Color.red);
		tempoD = followTime;
		vuedroite = true ;
		}
		else {
			Debug.DrawRay(transform.position + tableD[j],forward,Color.yellow);
		}
	}

	
	
	
	if ( vuedroite == true ){
		transform.Rotate(Vector3.up, Space.World);
	}
	if ( vuegauche  == true ){
		transform.Rotate(Vector3.down, Space.World);
	}
	if ( vuehaut  == true ){
		transform.Rotate(Vector3.right, Space.Self);
	}
	if ( vuebas == true ){
		transform.Rotate(Vector3.left, Space.Self);
	}


	
		
}

