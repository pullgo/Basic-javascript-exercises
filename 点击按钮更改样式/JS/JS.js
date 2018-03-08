var cbox=document.getElementById('change_box');
var pbox=document.getElementById('pop_box');

document.getElementById('set').onclick = show;
function show(){
	pbox.style.display = 'block';	   
}
	 
document.getElementById('sure').onclick = hide;
function hide(){
	pbox.style.display = 'none';	   
}
	   
document.getElementById('renew').onclick = old;
function old(){
	cbox.style.backgroundColor = 'red';
	cbox.style.width = '100px';
	cbox.style.height = '100px';
}
	   
document.getElementById('blue').onclick = bnb;
function bnb(){
	cbox.style.backgroundColor = 'blue';	
}
	 
document.getElementById('green').onclick = bng;
function bng(){
	cbox.style.backgroundColor = 'green';	   
}
	 
document.getElementById('yellow').onclick = bny;
function bny(){
	cbox.style.backgroundColor = 'yellow';	   
}
document.getElementById('onebox').onclick = Oone;
function Oone(){
	cbox.style.width = '400px';	
}
	 
document.getElementById('twobox').onclick = Otwo;
function Otwo(){
	cbox.style.width = '300px';	
}
	
document.getElementById('therebox').onclick = Othere;
function Othere(){
	cbox.style.width = '200px';	
}
	   
document.getElementById('tonebox').onclick = tOone;
function tOone(){
	cbox.style.height = '400px';	
}
	 
document.getElementById('ttwobox').onclick = tOtwo;
function tOtwo(){
	cbox.style.height = '300px';	
}
	
document.getElementById('ttherebox').onclick = tOthere;
function tOthere(){
	cbox.style.height = '200px';	
}
	   
