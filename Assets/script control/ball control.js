#pragma strict

var speed: double = 5;

function Start () {

}

function Update () {

if ( Input .GetKey( "right" ) ){
 GetComponent.<Rigidbody>().AddForce( Vector3.right*speed ) ;
 }
 

 else if ( Input .GetKey ( "left" ) )
{
 GetComponent.<Rigidbody>().AddForce( Vector3.left*speed ) ;
}
 else if( Input .GetKey ( "up" ) )
{
 GetComponent.<Rigidbody>().AddForce( Vector3.forward*speed ) ;
}
 else if ( Input .GetKey ( "down" ) )
{
 GetComponent.<Rigidbody>().AddForce(Vector3.back*speed ) ;
}


}
