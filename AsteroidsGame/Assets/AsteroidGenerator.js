#pragma strict
 
var theObject:Rigidbody;
var theNewPos:Vector3;
var maxPos:int=10;
var minPos:int=-10;
var max=15;
var i = 0;
 
 
 
 
function Start(){ 
for(i=0;i<max;i++)
{
 
spawn();
yield(WaitForSeconds(5));
}
 
 
}
 
 
function Update(){
 

 
 
}
 
 
function spawn() {
 
 

print("made a new asteroid"+i);
theNewPos= new Vector3 (Random.Range(minPos,maxPos),Random.Range(minPos,maxPos),3);
Instantiate(theObject,theNewPos,Quaternion.identity);
}