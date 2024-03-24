// 変数numに0～15までのランダムな整数を代入する
let num = Math.floor(Math.random() * 16 );

if (num === 3 || num === 6 || num === 9) {
  console.log('3の倍数です');
}

else if (num === 5 || num === 10) {
    console.log('5の倍数です');
  }

else if (num === 15) {
  console.log('3と５の倍数です');
}

else {
  console.log(num);
}