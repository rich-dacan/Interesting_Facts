const btnNumber = document.querySelector('#btn_number');
btnNumber.addEventListener('click', updateApiNumber);

const btnMonth = document.querySelector('#btn_month');
btnMonth.addEventListener('click', updateApiDate);

// const btnDay = document.querySelector('#btn_day');
// btnDay.addEventListener('click', updateApiDate);

async function updateApiNumber () {

  const inputNum = document.querySelector('#inputNumber');
  let inputActual = inputNum.value;

  const div = document.querySelector('#number');

  const h2 = document.createElement('h2');

  const response = await fetch (`http://numbersapi.com/${inputActual}/trivia?json`);
    
  const resJson = await response.json();
  
  console.log(resJson);

  h2.innerHTML = resJson.text;
  h2.style.borderBottom = 'solid black 3px';

  div.appendChild(h2);
  console.log(h2);
  

}

// TRATATIVA DE DADOS: a day of year in the form month/day (eg. 2/29, 1/09, 04/1), if type is date;
// ESTA API NÃO ACEITARA ESTE INPUT COM O TIPO 'DATE' POIS ELE PEGARÁ PRO PARÂMETRO PRIMEIRO O MES, DEPOIS O DIA E RETORNARÁ UM EVENTO ALEATÓRIO QUE OCORREU NESTA DATA EM QUALQUER ANO ALEATÓRIO;

async function updateApiDate () {

  const inputMonth = document.querySelector('.inputMonth');
  let inputMonthActual = inputMonth.value;

  const inputDay = document.querySelector('.inputDay');
  let inputDayActual = inputDay.value;

  console.log(inputDay)

  const div = document.querySelector('#date');

  const h2 = document.createElement('h2');

  const response = await fetch (`http://numbersapi.com/${inputMonthActual}/${inputDayActual}/date?json`);
    
  const resJson = await response.json();
  
  console.log(resJson);

  h2.innerHTML = resJson.text;
  h2.style.borderBottom = 'solid black 3px';
  

  div.appendChild(h2);
  console.log(h2);
  

}

// function updateApiDate () {

//   const inputDate = document.querySelector('#inputDate');

//   let inputActual = inputDate.value;

//   console.log(inputActual);
// }


// Atividade S3B06: Estou capturando o valor do input inserido pelo usuário, passo esse valor pra request da api, ela me retorna o objeto considerando o valor do input, porém logo na linha seguinte estoura o seguinte erro: 'Uncaught (in promise) SyntaxError: Unexpected token i in JSON at position 2'


// fetch (`http://numbersapi.com/${inputActual}`)

//   .then ((response) => {
//     console.log(response)
  
//     const h2 = document.createElement('h2');
//     h2.innerHTML = response.url;

//     div.appendChild(h2)
//     console.log(h2)
    
//     return response
  
    
//   }); 
  