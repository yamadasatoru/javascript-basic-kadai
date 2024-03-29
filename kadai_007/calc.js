// 変数numに0～15までのランダムな整数を代入する
let num = Math.floor(Math.random() * 16 );

// 先に３と５の倍数の場合をチェックする
if (num % 3 === 0 && num % 5 === 0) {
  console.log('3と５の倍数です');
}
// 次に3の倍数だけをチェックする
else if (num % 3 === 0 ) {
  console.log('3の倍数です');
  }
// その後で５の倍数だけをチェックする
else if (num % 5 === 0) {
  console.log('5の倍数です');
}
// それ以外の場合、numの値をそのまま出力する
else {
  console.log(num);
}