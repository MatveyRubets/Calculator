let a = '';
let b = '';
let sign = '';
let finish = false;

const digit = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.' ];
const action = ['-', '+', 'X', '÷'];
const out = document.querySelector('.calc-screen p');

function clearAll() {
  a = '';
  b = '';
  sign = '';
  finish = false;
  out.textContent = 0;
}

document.querySelector('.ac').onclick = clearAll;
document.querySelector('.buttons').onclick = (event) => {
  if(!event.target.classList.contains('btn')) return;
  if(event.target.classList.contains('ac')) return;
  out.textContent = '';
  const key = event.target.textContent;
  if(digit.includes(key)){
    if(b === '' && sign === '' && a ==='' && key === '.') {
      a = '0'
    }
    if(b === '' && sign === '' && a ==='0.' && key === '.') {
      a = '0'
    }
    if(b === '' && sign === '' && a ==='' && key === '0'){
      a = '';
      console.log(a, b, sign)
      out.textContent = 0;
    } else if (b === '' && sign === '') {
      a += key;
      console.log(a, b, sign)
      out.textContent = a; 
    } else if (a !== '' && b !== '' && finish) {
      b = key;
      console.log(a, b, sign)
      finish = false;
      out.textContent = b;
    } else {
      b += key;
      console.log(a, b, sign)
      out.textContent = b;
    }
    return
  }
  if (action.includes(key)) {
    sign = key;
    out.textContent = sign;
    return;
  }
  if(key === '=') {
    if (b === '') b = a;
    switch (sign) {
      case '+':
        a = (+a) + (+b);
        break;
      case '-':
        a = a - b;
        break;
      case 'X':
        a = a * b;
        break;
      case '÷':
        if (b === '0') {
          clearAll();
          out.textContent = 'Error';
          return;
        }
        a = a / b;
        break;
    }
    finish = true;
    out.textContent = a;
  }
  if(key === '%') {
    a = a / 100;
    out.textContent = a;
  }
}
console.log(typeof (a))