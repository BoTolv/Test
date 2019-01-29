function calculate(){
	var t = widthbox.value;
	var w = document.getElementById("widthbox").value;
	var l = document.getElementById("lenghtbox").value;
	var h = document.getElementById("heightbox").value;
	
	w=parseFloat(w);
	h=parseFloat(h);
	l=parseFloat(l);
	var result = w*l*h;
	
	document.getElementById("result").innerHTML = result;
}

function multiplication(){
	document.getElementById("mult-tb").innerHTML="";
	var f= document.getElementById("factor").value;
	for(var i=1;i<=20;i++) {
		var res=f*i;
		
		document.getElementById("mult-tb").innerHTML += res+"<br/>";
	}
}

function insertText(){
	document.getElementById("newContent").innerHTML="Hej verden!";
}