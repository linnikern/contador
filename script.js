// Data para a contagem regressiva (ano, mês - 1, dia, hora, minuto, segundo)
var countDownDate = new Date(2023, 6, 17, 23, 59, 59).getTime()

// Resto do código para a contagem regressiva
// ...

// Atualiza o contador a cada 1 segundo
var countdown = setInterval(function () {
  // Obtém a data e hora atual
  var now = new Date().getTime()

  // Calcula a diferença entre a data atual e a data da contagem regressiva
  var distance = countDownDate - now

  // Calcula os dias, horas, minutos e segundos restantes
  var days = Math.floor(distance / (1000 * 60 * 60 * 24))
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
  var seconds = Math.floor((distance % (1000 * 60)) / 1000)

  // Exibe o resultado no elemento com o id "countdown"
  document.getElementById("countdown").innerHTML =
    days + "d " + hours + "h " + minutes + "m " + seconds + "s "

  // Encerra a contagem regressiva quando alcançar a data final
  if (distance < 0) {
    clearInterval(countdown)
    document.getElementById("countdown").innerHTML =
      "Contagem regressiva encerrada!"
  }
}, 1000)
