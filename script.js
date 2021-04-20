let number = parseInt(prompt('Enter a number'));

if(number == 0){
    console.log("number is zero: "+ number);
}
else if((number%5==0)&&(number%11==0)){
    console.log("number is divisible by 5 and 11: "+ number);
}
else{
    console.log("number is not divisible by 5 and 11");
}
