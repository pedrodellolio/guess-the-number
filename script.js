const guessButton = document.querySelector("#check");
const resultAlert = document.querySelector(".result");
const guessInput = document.querySelector(".guessInput");

var chosenNumber = 0;
var errors = 0;

window.onload = () => {
  loadGame();
  guessInput.focus();
};

function loadGame() {
  resultAlert.classList.remove("wrong");
  resultAlert.classList.remove("success");
  resultAlert.innerHTML = "";
  guessButton.disabled = false;
  chosenNumber = getRandomArbitrary(0, 100);
  guessInput.value = "";
  errors = 0;
}

function getRandomArbitrary(min, max) {
  let random = Math.round(Math.random() * (max - min) + min);
  return random;
}

function guessNumber() {
  event.preventDefault();
  resultAlert.style.display = "block";
  const guessValue = parseInt(event.target["guess"].value);

  if (guessValue === chosenNumber) {
    resultAlert.classList.add("success");
    if (resultAlert.classList.contains("wrong"))
      resultAlert.classList.remove("wrong");
    resultAlert.innerHTML = `Acertou! O número secreto era ${chosenNumber}. Erros: ${errors}.<br/>Clique em REINICIAR para iniciar um novo jogo`;
    guessButton.disabled = true;
    return;
  } else {
    errors += 1;
    resultAlert.classList.add("wrong");
    if (resultAlert.classList.contains("success"))
      resultAlert.classList.remove("success");
    resultAlert.textContent = `O número secreto é ${
      guessValue > chosenNumber ? "menor" : "maior"
    } que ${guessValue}`;
  }
  guessInput.value = "";
}
