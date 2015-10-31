#pragma strict

var speed : double =0.5;

function Start () {

}

function Update () {

move();

}



function move () {



if (Input.GetKey("d"))
{
transform.Translate(Vector3.right*speed, Camera.main.transform);
}
else if (Input.GetKey("q"))
{
transform.Translate(Vector3.left*speed, Camera.main.transform);
}
else if (Input.GetKey("z"))
{
transform.Translate(Vector3.forward*speed, Camera.main.transform);
}
else if (Input.GetKey("s"))
{
transform.Translate(Vector3.back*speed, Camera.main.transform);
}
else if (Input.GetKey("a"))
{
transform.Translate(Vector3.up*speed, Camera.main.transform);
}
else if (Input.GetKey("e"))
{
transform.Translate(Vector3.down*speed, Camera.main.transform);
}
else if (Input.GetKey("x"))
{
transform.Rotate(Vector3.up);
}


}

function OnCollisionEnter(collideEvent : Collision){
if (collideEvent.gameObject.name == "Ball")
{
Destroy(collideEvent.gameObject);
}
}