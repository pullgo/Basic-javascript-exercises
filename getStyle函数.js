// JavaScript Document
function $(){
	if(typeof v==='function'){
		window.onload = 'v';
		}else if(typeof v==='string'){
			return document.getElementById(v);
		}else if(typeof v==='object'){
			return v ;
	}
}

//currentStyle getComputedStyle浏览器判断兼容问题

function getStyle(obj,attr){
	return obj.currentStyle?obj.currentStyle[attr]:getComputedStyle(obj)[attr];
}