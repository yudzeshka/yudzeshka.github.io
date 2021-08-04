import { getApplicationDiv } from "./lib.js";

import { getHelpText, validateTriangle } from "./triangles/validation.js";
import { isTriangle } from "./triangles/geometry.js";
import { getAnswerPhrase } from "./triangles/output.js";

let sides = [
  { sideName: document.querySelector("#side1name").value, sideLength: document.querySelector("#side1value").value },
  { sideName: document.forms.newTriangle.elements.side2name.value, sideLength: document.forms.newTriangle.elements.side2value.value },
  { sideName: document.forms.newTriangle.elements.side3name.value, sideLength: document.forms.newTriangle.elements.side3value.value },
];

let lowerBound = document.forms.newTriangle.elements.lowerBound.value;
let upperBound = document.forms.newTriangle.elements.upperBound.value;
    

function renderErrorList(messages) {
  const errorListElement = document.createElement("ul");

  messages.forEach((message) => {
    const messageItem = document.createElement("li");
    messageItem.innerHTML = message;

    errorListElement.append(messageItem);
  });

  return errorListElement;
}

function renderHelpText(helpText) {
  const helpTextElement = document.createElement("p");
  helpTextElement.innerHTML = helpText;

  return helpTextElement;
}

function renderErrorScreen(messages, helpText) {
  const fragment = new DocumentFragment();

  fragment.append(renderErrorList(messages));
  fragment.append(renderHelpText(helpText));

  return fragment;
}

function renderAnswerScreen(answerPhrase, answer) {
  const answerElement = document.createElement("p");
  answerElement.innerHTML = answerPhrase;

  return answerElement;
}

function renderNonvalidResult(appRoot, messages) {
  appRoot.classList.add("error-box");

  appRoot.append(
    renderErrorScreen(messages, getHelpText(lowerBound, upperBound))
  );
}

function renderValidResult(appRoot, isTriangle) {
  const boxClassName = isTriangle ? "info-box" : "warning-box";
  appRoot.classList.add(boxClassName);

  appRoot.append(
    renderAnswerScreen(getAnswerPhrase(sides, isTriangle), isTriangle)
  );
}

function render(appRoot) {
  appRoot.classList.add("tooltip-box");

  const validationResult = validateTriangle(sides, lowerBound, upperBound);

  validationResult.isValid
    ? renderValidResult(appRoot, isTriangle(sides))
    : renderNonvalidResult(appRoot, validationResult.errorMessages);
}

// const eventProcessor = {
//   counter: 1,

//   handleEvent(event) {
//     console.log(`counter: ${this.counter++}`);

//     event.preventDefault();
//   },
// };


function main() {
  document.querySelector("#button1").onclick = () => {const appDiv = getApplicationDiv("#app");
  
  // const a = document.body.querySelector("a");
  // a.addEventListener("click", eventProcessor);

  if (appDiv !== null) {
    render(appDiv);
  } else {
    console.log("App div not found");
  }
}

}


export { main };

