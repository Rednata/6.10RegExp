//Задание 1.Напишите функцию которая может перебрать такой массив
//  и отфильтрует его оставив только имена файлов с расширениями .js .jsx .ts

const arr = ['module.jsx', 'index.html', 'style.css', 'index.js', 'file.ts', 'library.css', 'my.plugin.js'];

const arrFilter = (arr) => {
  const reg = /.+\.js\b|.+\.ts\b|.+\.jsx\b/;
  return arr.filter(elem => elem.match(reg));
}

console.log(arrFilter(arr));

