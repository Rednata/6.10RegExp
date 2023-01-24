const input = document.querySelector('.input');
const output = document.querySelector('.output');
const submit = document.querySelector('button');

input.addEventListener('change', () => {
  const promise = new Promise((resolve) => {
    const reg = /#/g;
    const text = input.value.replace(reg, '№');
    resolve(text);
  })

  promise.then(text => {
    const reg = /-/ig;
    return text.replace(reg, '\u00A0КАК ВСТАВИТЬ UNICODE?\u00A0');    
  })
  .then(text => {
    const reg = /©/ig;
    return text.replace(reg, '©');
  })
  .then(text => {    
    const reg = /\s(в|без|до|для|за|через|над|по|из|у|около|под|о|про|на|к|перед|при|с|между) /gi;    
    return text.replace(reg, (...temp) => {
      return `${temp[0]}\u00A0`
    })
  })
  .then(text => {
      const reg = /( ")/g;
      return text.replace(reg, ' «');      
  })
  .then(text => {
    const reg = /("[ .,!?])/g;
    return text.replace(reg, '» ');          
  })
  .then(text => {
    output.textContent = text;
  })
})
