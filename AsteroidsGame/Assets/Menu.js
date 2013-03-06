#pragma strict

var x:float;
var y:float;
var theme:GUISkin;

function Start () {

}

function Update () {

}

function OnGUI () {

	x = Screen.width/2;
	y = Screen.height/2;

	GUI.skin = theme;

	GUI.Label(Rect(x-150,y-10,300,25), "Welcome to Aster Killer");
	
	if(GUI.Button(Rect(x-50,y+28,100,25), "New Game"))
		{
	
			Application.LoadLevel(1);
			
		}
	
}