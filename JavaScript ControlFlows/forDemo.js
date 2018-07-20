// 1) Print all numbers in between -10 and 19
for(count =-10; count<=19;count++){
	console.log(Number(count));
}


// 2) Print all even numbers between 10 and 40
for(count =10; count<=40; count+=2){
		console.log(Number(count));
}


// 3) Print all odd numbers between 300 and 333
for(count =300 ; count<=333; count++){
	if(count%2 != 0 ){
		console.log(Number(count));
	}
}



// 4) Print all numbers divisible by 5 and 3 between 5 and 50
for(count=5; count<=50; count++){
	if((count%5===0) && (count%3==0)){
		console.log(Number(count));
	}
}