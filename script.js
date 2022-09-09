let result = prompt("Adivinhe o número que estou pensando? Está entre o e 10");
const randomNumber = Math.round(math.random() * 10);

let xAttempts = 1 

while(Number(result) != randomNumber) {
  result = prompt("Erro, tente novamente:")
  xAttempts++
}

alert(`Parabéns! O número qu eu pensei foi ${randomNumber} e você adivinhou o número em ${xAttempts}.`)