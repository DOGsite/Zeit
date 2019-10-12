let block = document.querySelector('.time');
setInterval(function(){
	let now = new Date();
	let hours = 23 - now.getHours();
	let minutes = 59 - now.getMinutes();
	let seconds = 60 - now.getSeconds();
	if(hours<10){
   hours = "0" + hours;
	}
	if(minutes<10){
		minutes = "0" + minutes;
		 }
		 if(seconds<10){
			seconds = "0" + seconds;
			 }
	block.innerHTML =   hours + ":" + minutes + ":" + seconds;
	
},1000)

let p = document.querySelector('.timenow');
setInterval(function(){
	let now = new Date();
	let hours = now.getHours();
	let minutes = now.getMinutes();
	let seconds = now.getSeconds();
	if(hours<10){
		hours = "0" + hours;
		 }
		 if(minutes<10){
			 minutes = "0" + minutes;
			  }
			  if(seconds<10){
				 seconds = "0" + seconds;
				  }
		p.innerHTML =   hours + ":" + minutes + ":" + seconds;
	
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