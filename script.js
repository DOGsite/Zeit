let block = document.querySelector('.time');
setInterval(function(){
	let now = new Date();
	let hours = 23 - now.getHours();
	let minutes = 59 - now.getMinutes();
	let seconds = 60 - now.getSeconds();
	block.innerHTML =   hours + ":" + minutes + ":" + seconds;
},1000)

let p = document.querySelector('.timenow');
setInterval(function(){
	let now = new Date();
	p.innerHTML =   now.getHours() + ":" + now.getMinutes() + ":" + now.getSeconds();
},1000)

// if(seconds > 0){
//     seconds--;
// }
// else {
//     seconds = 59;
//     minutes-- ;
// }
// if( minutes < 0){
//     minutes = 59;
//     hours--;
// }
// let block = document.querySelector('.time');
// setInterval(function(){
//     let now = new Date();
//     let hours = 23 - now.getHours();
//     let minutes = 60 - now.getMinutes();
//     let seconds = 60 - now.getSeconds();
//     block.innerHTML = hours + ':' + minutes + ':' + seconds;
// }, 1000)