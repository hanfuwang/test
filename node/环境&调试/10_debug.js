//调试代码
//node --inspect-brk debug.js
//chrome://inspect/#devices(网页进入)
function test1(){
	const a=parseInt(Math.random()*10);
	const b=parseInt(Math.random()*10);
}
function test2(a,b){
	if(a>b){
		a+=a*2
	}else{
		b-=a;
	}
	return a+b;
}
test1();
