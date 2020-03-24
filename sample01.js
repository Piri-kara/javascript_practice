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



// var startTIme = null;
// var displayArea = document.getElementById('display-area');

// 上記のコードをオブジェクトに！
// gameオブジェクトは開始時間と表示エリアという要素を共通で持っている
// var game = {
//   startTime: null,
//   displayArea: document.getElementById('display-area')
// }

// function start(){
//   // 開始時刻の取得
//   game.startTime = Date.now();
//   // HTML上で何かキーが押されたら、stop関数を呼び出す
//   document.body.onkeypress = stop;
// }
// function stop(){
//   var currentTIme = Date.now();
//   var seconds = (currentTIme - game.startTime) / 1000;
//   if (9.5 <= seconds && seconds <= 10.5 ){
//     game.displayArea.innerText = seconds + '秒でした。すごい！'
//   } else {
//     game.displayArea.innerText = seconds + '秒でした。残念！'
//   }
// }
// // confirmはalertと同様に引数で渡した文字列をダイアログで表示する
// // confirmではボタンがOKとキャンセルの2つに増える
// if (confirm('OKを押して10秒だと思ったら何かキーを押してください')){
//   start();
// }

var game = {
  startTime: null,
  displayArea: document.getElementById('display-area'),
  start: function(){
    game.startTime = Date.now();
    document.body.onkeypress = game.stop;
  },
  stop: function(){
    var currentTime = Date.now();
    var seconds = (currentTime - game.startTime) / 1000;
    if (9.5 <= seconds && seconds <= 10.5){
      game.displayArea.innerText = seconds + '秒でした。すごい！'
    } else {
      game.displayArea.innerText = seconds + '秒でした。残念！'
    }
  }
}
if (confirm('OKを押して10秒だと思ったら何かのキーを押してください')){
  game.start();
}