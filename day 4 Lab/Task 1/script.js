import { Rectangle, Square, Circle } from "./Q1.js";

const results = document.getElementById("results");

function displayResult(shape) {
  results.innerHTML += `<p>${shape.toString()}</p>`;
}

window.calculateRectangle = function () {
  const w = parseFloat(document.getElementById("rectWidth").value);
  const h = parseFloat(document.getElementById("rectHeight").value);
  if (!w || !h) return alert("Please enter valid width and height.");
  const rect = new Rectangle(w, h);
  displayResult(rect);
};

window.calculateSquare = function () {
  const s = parseFloat(document.getElementById("squareSide").value);
  if (!s) return alert("Please enter valid side length.");
  const square = new Square(s);
  displayResult(square);
};

window.calculateCircle = function () {
  const r = parseFloat(document.getElementById("circleRadius").value);
  if (!r) return alert("Please enter valid radius.");
  const circle = new Circle(r);
  displayResult(circle);
};
