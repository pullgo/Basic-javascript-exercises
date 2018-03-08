// JavaScript Document
function shake(obj,attr,endFn){
	var pos =parseInt( getStyle(obj,attr));//有隐患 未解决
	var arr = [];
	var timer=null;
	var num = 0;
	for(var i=10;i>0;i-=1){

		arr.push(i,-i);

	}
	arr.push(0);
	//alert(arr);
	clearInterval(obj.shake);//timer 与 domove同用 冲突 改为obj.shake

	obj.shake=setInterval(function(){

		obj.style[attr]=pos+arr[num]+'px';

		num++;

		if(num===arr.length){

			clearInterval(obj.shake);

			endFn&&endFn();

		};

	},50);

}
function getStyle(obj,attr){
	
	return obj.currentStyle?obj.currentStyle[attr]:getComputedStyle(obj)[attr];
}