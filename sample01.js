// 10万以下の数字のFizzBuzz判定
for(var i=1; i < 100001; i++){
  if(i%3===0 && i%5===0){
    document.write("FizzBuzz");
  }
  else if(i%3===0){
    document.write("Fizz");
  }
  else if(i%5===0){
    document.write("Buzz")
  }
  else{
    document.write(i + " ")
  }
}