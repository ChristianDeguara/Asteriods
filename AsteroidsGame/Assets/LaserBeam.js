#pragma strict
var laserSpeed : int;
function Start () {

}

function Update () {

	transform.Translate(Vector3.up * laserSpeed *Time.deltaTime);

}

function OnBeamInvisible(){

	Destroy(this.gameObject);
	
}