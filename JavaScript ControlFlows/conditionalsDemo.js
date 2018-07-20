//JavaScript assigns a truthy or falsy value to the statement.

var age=prompt("Whats your age?");

if(age<18){
	console.log("You aren't old enough to enter the venue");
}
else if(age<21){
	console.log("You can enter the venue but you can't drink");
}
else{
	console.log("You can enter the venue and drink");
}