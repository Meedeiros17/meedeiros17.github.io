function ctor() {
  let tempc = document.getElementById("entrada-tempc").value;
  if (tempc < -273.15) {
    document.getElementById("result-tempr").value = "Não existe";
  } else {
    let tempr = (tempc * 4) / 5;
    document.getElementById("result-tempr").value = tempr.toFixed(2);
  }
}

function abctox() {
  let a = document.getElementById("entrada-a").value;
  let b = document.getElementById("entrada-b").value;
  let c = document.getElementById("entrada-c").value;

  let delta = b * b - 4 * a * c;
  document.getElementById("result-delta").value = delta.toFixed(2);
  if (delta >= 0) {
    let x1 = (-b + Math.sqrt(delta)) / (2 * a);
    let x2 = (-b - Math.sqrt(delta)) / (2 * a);
    document.getElementById("result-x1").value = x1.toFixed(2);
    document.getElementById("result-x2").value = x2.toFixed(2);
  } else if (delta < 0) {
    document.getElementById("result-x1").value = "Valor inexistente";
    document.getElementById("result-x2").value = "Valor inexistente";
  }
}

function wtocv() {
  let watt = document.getElementById("entrada-watt1").value;
  let cv = watt / 735.5;
  document.getElementById("result-cv").value = cv.toFixed(2);
}

function wtohp() {
  let watt = document.getElementById("entrada-watt2").value;
  let hp = watt / 745.7;
  document.getElementById("result-hp").value = hp.toFixed(2);
}

function wtobtu() {
  let watt = document.getElementById("entrada-watt3").value;
  let btu = watt * 3.412141633;
  document.getElementById("result-btu").value = btu.toFixed(2);
  //Fonte da fórmula de watts para btu/hr: https://www.rapidtables.org/pt/convert/power/Watt_to_BTU.html
}

document.getElementById("calcula-tempr").addEventListener("click", ctor);
document.getElementById("calcula-raiz").addEventListener("click", abctox);
document.getElementById("calcula-cv").addEventListener("click", wtocv);
document.getElementById("calcula-hp").addEventListener("click", wtohp);
document.getElementById("calcula-btu").addEventListener("click", wtobtu);
