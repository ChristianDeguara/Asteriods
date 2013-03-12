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

var randomX:float;
var randomY:float;

randomX = Random.Range(minPos,maxPos);
randomY = Random.Range(minPos,maxPos);

if (randomX == 0)
{
	randomX +=1;
}


theNewPos= new Vector3 (randomX,randomY,3);
Instantiate(theObject,theNewPos,Quaternion.identity);
}