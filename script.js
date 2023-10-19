const body = document.querySelector("body"),
  horasponteiro = document.querySelector(".horas"),
  minutosponteiro = document.querySelector(".minutos"),
  segundosponteiro = document.querySelector(".segundos"); 
  
const atualizacaoTempo = () => {

  let date = new Date(),
    segDeg = (date.getSeconds() / 60) * 360,
    minDeg = (date.getMinutes() / 60) * 360,
    hrDeg = (date.getHours() / 12) * 360;

  segundosponteiro.style.transform = `rotate(${segDeg}deg)`;
  minutosponteiro.style.transform = `rotate(${minDeg}deg)`;
  horasponteiro.style.transform = `rotate(${hrDeg}deg)`;
};
setInterval(atualizacaoTempo, 1000);
updateTime();
