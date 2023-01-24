// Задание 4. Напишите функцию которая принимает строку, в этой строке находит url адрес и заменяет с помощью replace на тег домены вида http://site.ru, https://site.com ...

const strUrl = 'sdfsmd sddf sdf@dlkvm.ru vkdjnkdf http://site.ru sdfm dLKNm, xcvdf https://site.com askmsdlkf';

const makeLink = (str) => {
  const temp = str.split(' ');
  const regUrl = /(https?:\/\/)(site\.(com|ru))/g;

  const replaceUrl = (str) => {
    return str.replace(regUrl, (...href) => {    
      const newUrl = `<a href="${href[0]}">${href[2]}</a>`;    
      return newUrl;
    });
  }
  
  return temp.map(replaceUrl).join(' ');
};

console.log(makeLink(strUrl));