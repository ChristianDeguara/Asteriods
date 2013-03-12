#pragma strict
 
var theObject:Rigidbody;
var theNewPos:Vector3;
var maxPos:int=10;
var minPos:int=-10;
var max=2;
var i = 0;
var speed:int;
var invade:boolean;
 
 
 
 
function Start(){ 

for(i=0;i<max;i++)
{
 
spawn();

} 
 
}
 
 
function Update(){

 
        transform.Translate(Time.deltaTime*speed*Vector3.left);
 
 

}
 
 
function spawn() {
 
theNewPos= new Vector3 (Border_Controller.rightmost,Border_Controller.topmost-4,3);
Instantiate(theObject,theNewPos,Quaternion.identity);
yield(WaitForSeconds(5));
}