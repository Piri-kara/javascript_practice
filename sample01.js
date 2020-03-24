// 10万以下の数字のFizzBuzz判定
// for(var i=1; i < 100001; i++){
//   if(i%3===0 && i%5===0){
//     document.write("FizzBuzz");
//   }
//   else if(i%3===0){
//     document.write("Fizz");
//   }
//   else if(i%5===0){
//     document.write("Buzz")
//   }
//   else{
//     document.write(i + " ")
//   }
// }

// var myBirthTime = new Date(1992, 7, 7, 12, 0);
// function updateParagraph(){
//   // 現在の日時を取得
//   var now = new Date();
//   // getTimeメソッドで日時のUTCからのミリ秒を取得
//   // 1000で割って秒に変換
//   var seconds = (now.getTime() - myBirthTime.getTime()) / 1000;
//   document.getElementById('birth-time').innerText = '生まれてから' + seconds + '秒経過';
// }
// // setIntervalは指定された関数を指定されたミリ秒ごとに繰り返し実行する
// setInterval(updateParagraph, 50);

// function areaOfCircle(r){
//   var area = r * r * 3.14;
//   return area;
// }

// document.write('<p>半径 5cm の円の面積は ' + areaOfCircle(5) + 'です。</p>');
// document.write('<p>半径 10cm の円の面積は ' + areaOfCircle(10) + 'です。</p>');
// document.write('<p>半径 15cm の円の面積は ' + areaOfCircle(15) + 'です。</p>');