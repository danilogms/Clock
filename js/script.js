const secondHand = document.querySelector("[data-second]");
const minuteHand = document.querySelector("[data-minute]");
const hourHand = document.querySelector("[data-hour]");

//FUNÇÃO QUE IRÁ SETAR A ROTATION NO CSS ATRAVES DA PORCENTAGEM ADQUIRIDA PELOS ELEMENTOS NA FUNÇÃO SETTIME.
const setPercent = (element, percentTime) => {
  element.style.setProperty("--rotation", percentTime * 360);
};

//FUNÇÃO PRINCIPAL QUE IRÁ ATRIBUIR AOS ELEMENTOS(PONTEIROS) UMA PORCENTAGEM ATRAVES DE UMA DIVISÃO DOS SEGUNDOS/MINUTOS/HORAS ATUAIS POR 60 OU 12, TENDO UM RESULTADO EM X E SENDO MULTIPLICADO POSTERIORMENTE POR 360 PARA SETAR A ROTATION
function setTime() {
  const currentData = new Date();

  const secondPercent = currentData.getSeconds() / 60; //COMO É UM MÉTODO, TEM Q SER ATIVADO COM ()
  const minutePercent = currentData.getMinutes() / 60; //MINUTOS E SEGUNDOS USAMOS 60 COMO PARÂMETRO
  const hourPercent = currentData.getHours() / 12; //HORAS USAMOS 12 COMO PARÂMETRO

  setPercent(secondHand, secondPercent);
  setPercent(minuteHand, minutePercent);
  setPercent(hourHand, hourPercent);
}

function digitalClock() {
  let digitalHour = document.querySelector(".digital-hour");
  let digitalMinute = document.querySelector(".digital-minutes");
  let digitalSecond = document.querySelector(".digital-seconds");
  let digitalAmPm = document.querySelector(".digital-ampm");

  //Atribuindo Hora minuto e segundo a variaveis manipuláveis.
  let h = new Date().getHours();
  let m = new Date().getMinutes();
  let s = new Date().getSeconds();

  //Manipulando AMPM
  let am = h >= 12 ? "PM" : "AM";

  //Convertendo 24hrs para 12 hrs
  if (h > 12) {
    h = h - 12;
  }

  //Se o número digital for menor que 10, adicionamos o 0 junto ao numero
  h = h < 10 ? "0" + h : h;
  m = m < 10 ? "0" + m : m;
  s = s < 10 ? "0" + s : s;

  //Puxando innerHtml e atribuindo as variáveis digitais
  digitalHour.innerHTML = h;
  digitalMinute.innerHTML = m;
  digitalSecond.innerHTML = s;
  digitalAmPm.innerHTML = am;
}

digitalClock();
setInterval(digitalClock, 1000);
setTime(); //ATIVANDO A FUNÇÃO PRINCIPAL
setInterval(setTime, 1000); //SETANDO A CALL DA FUNÇÃO PRINCIPAL A CADA 1 SEGUNDO
