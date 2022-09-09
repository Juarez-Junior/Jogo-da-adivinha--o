// variáveis
const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")
const btnTry = document.querySelector("#btnTry")
const btnReset = document.querySelector("#btnReset")
const randomNumber = Math.round(Math.random() * 10)
let xArttempts = 1

// Eventos
btnTry.addEventListener('click', handleTryClick)
btnReset.addEventListener('click', handleResetClick)
document.addEventListener('keydown', enterKey)

// funções
function handleTryClick(event) {
  event.preventDefault()

  const inputNumber = document.querySelector("#inputNumber")

  if (Number(inputNumber.value) == randomNumber) {
    toggleScreen()

    document
      screen2.querySelector("h2").innerText = `acertou em ${xArttempts} tentativas`
  }
  inputNumber.value = ""
  xArttempts++
}

function handleResetClick() {
  toggleScreen()
  location.reload()
  xArttempts = 1
}

function toggleScreen() {
  screen1.classList.toggle("hide")
  screen2.classList.toggle("hide")
}

function enterKey(e) {
  if((e.key == 'Enter') && (screen1.classList.contains('hide'))) {
    handleResetClick()
  }
}
