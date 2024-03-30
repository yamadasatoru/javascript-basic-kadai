const date = new Date();
const year = date.getFullYear() + '年';
const month = date.getMonth()+1 + '月';
const day = date.getDate() + '日';

console.log(year + month + day);