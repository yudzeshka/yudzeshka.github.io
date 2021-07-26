import { getApplicationDiv } from "./lib.js";

import { getHelpText, validateTriangle } from "./triangles/validation.js";
import { isTriangle } from "./triangles/geometry.js";
import { getAnswerPhrase } from "./triangles/output.js";

const sides = [
  { sideName: "a", sideLength: 300 },
  { sideName: "b", sideLength: 400 },
  { sideName: "c", sideLength: 800 },
];

const lowerBound = 0;
const upperBound = 1000;


function renderErrorScreen(messages) {
  const fragment = new DocumentFragment();

  const errorListElement = document.createElement("div");
  const sadImg = document.createElement("img");
sadImg.src = "./media/img/sadsmile.png";
sadImg.className = "img";

  messages.forEach((message) => {
    const messageItem = document.createElement("p");
    messageItem.innerHTML = message;

    errorListElement.append(messageItem);
    errorListElement.append(sadImg);
  });
  fragment.append(errorListElement);
  return fragment;
}

function renderAnswerScreen(answerPhrase, answer) {
  const answerBlock = document.createElement("div");
  const answerElement = document.createElement("p");
  answerElement.innerHTML = answerPhrase;
  const smileImg = document.createElement("img");
  smileImg.src = "./media/img/funnysmile.png";
smileImg.className = "img";
const cryImg = document.createElement("img");
  cryImg.src = "./media/img/crysmile.png";
cryImg.className = "img";
  answerElement.className = answer ? "positive" : "negative";
  answerBlock.prepend(answerElement);
  
  if (answer) {answerBlock.append(smileImg)} else {
    answerBlock.append(cryImg);
  }
    
  

  return answerBlock;
}

function render(appRoot) {
  const validationResult = validateTriangle(sides, lowerBound, upperBound);

  if (!validationResult.isValid) {
    appRoot.append(renderErrorScreen(validationResult.errorMessages));

    return;
  }

  const answer = isTriangle(sides);

  appRoot.append(renderAnswerScreen(getAnswerPhrase(sides, answer), answer));
}

function main() {
  const appDiv = getApplicationDiv("#app");
  const data = document.createElement("div");
  data.className = "datastyles";
  const tittle = document.createElement("h1");
  const dano = document.createElement("p");
  tittle.innerHTML = "Находим треугольники по сторонам";
  data.append(tittle);
  dano.innerHTML = `Даны стороны: "${sides[0].sideName}" длиной  ${sides[0].sideLength}, "${sides[1].sideName}" длиной  ${sides[1].sideLength}, "${sides[2].sideName}" длиной  ${sides[2].sideLength}.`;
  data.append(dano);
  appDiv.before(data);

  const diap = dano.cloneNode(true);
  diap.className = "diapstyles";
  diap.innerHTML = `Значения сторон необходимо вводить в диапозоне от ${lowerBound} до ${upperBound}.`;
  appDiv.after(diap);

  if (appDiv !== null) {
    render(appDiv);
  } else {
    console.log("App div not found");
  }
}

export { main };
