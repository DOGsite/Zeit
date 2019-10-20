let block = document.querySelector('.time');
let p = document.querySelector('.timenow');
let d = document.querySelector('#datenow');
setInterval(function(){
	let now1 = new Date();
	let hours1 = 23 - now1.getHours();
	let minutes1 = 59 - now1.getMinutes();
	let seconds1 = 60 - now1.getSeconds();
	if(hours1<10){
   hours1 = "0" + hours1;
	}
	if(minutes1<10){
		minutes1 = "0" + minutes1;
		 }
		 if(seconds1<10){
			seconds1 = "0" + seconds1;
			 }
	block.innerHTML =   hours1 + ":" + minutes1 + ":" + seconds1;
	
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

	let day = now.getDay();
	let date = now.getDate() ;
	let month = now.getMonth() ;
	let year = now.getFullYear();
	if (day == 1){
		day = ("Mounday / Пн ");
	} 
	else if (day == 2){
		day = ("Tuesday / Вт "); 
	} 
	else if (day == 3){
		day = ("Wednesday / Ср ");
	} 
	else if (day == 4){
		day = ("Thursday / Чт "); 
	} 
	else if (day == 5){
		day =("Friday / Пт ") ; 
	} 
	else if (day == 6){
		day = ("Saturday / Сб "); 
	} 
	else{
		day = ("Sunday / Вс "); 
	} 
	if (date< 10){
		date = "0" + date;
		
	}
	if (month< 10){
		month = "0" + month;
	}
	month = now.getMonth() + 1;
	d.innerHTML =   day  + " , " + date +  "." + month + "." +  year;
	},0001)

// 	setInterval(function(){
// 	let now = new Date();
	
	
	
// },0100)
	


