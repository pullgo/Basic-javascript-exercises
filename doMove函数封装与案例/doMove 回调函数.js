function doMove(obj,attr,dir,target,endFn){
		
	dir = parseInt(getStyle(obj,attr))<target?dir:-dir;//正负问题
		
	clearInterval(obj.timer);//否则会根据点击的次数 速度变快问题
		
	obj.timer=setInterval(function(){
		
    var speed = parseInt(getStyle(obj,attr))+dir;//parseInt 30px变成30,
  
		if(speed > target && dir>0||speed < target && dir<0){//赋值前限制 步长无法被800整除时 停止的数据会大于800 前
		
		    speed = target;
		}
	//if(speed < target && dir<0){//赋值前限制 步长无法被800整除时 停止的数据会大于800  后
	    // speed = target;}
	obj.style[attr] = speed +'px';//div如果不定位则无法解析
	//alert(parseInt(getStyle(oDiv,'left')));
		if(speed == target){
			
			clearInterval(obj.timer);
			/*if(endFn){
				endFn();//解决函数传参有或者没有问题  等价于endFn&&endFn(); 
				}*/
			 endFn&&endFn();
			//alert(speed);
		}
	},30)
	
    function getStyle(obj,attr){

	return obj.currentStyle?obj.currentStyle[attr]:getComputedStyle(obj)[attr];}
}
	