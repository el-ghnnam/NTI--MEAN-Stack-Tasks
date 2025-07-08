function calculate() {
  const val1 = document.getElementById("val1").value.trim();
  const val2 = document.getElementById("val2").value.trim();
  const val3 = document.getElementById("val3").value.trim();

  const a = parseFloat(val1);
  const b = parseFloat(val2);
  const c = parseFloat(val3);

  const outputDiv = document.getElementById("output");

  // Check for empty fields
  if (val1 === "" || val2 === "" || val3 === "") {
    outputDiv.innerHTML = "<p style='color: red;'>Please fill in all three fields.</p>";
    return;
  }

  // Check for valid numbers
  if (isNaN(a) || isNaN(b) || isNaN(c)) {
    outputDiv.innerHTML = "<p style='color: red;'>Only numeric values are allowed.</p>";
    return;
  }

  // Check for division by 0
  if (b === 0 || c === 0) {
    outputDiv.innerHTML = "<p style='color: red;'>Division by zero is not allowed (b or c is 0).</p>";
    return;
  }

  // Perform operations
  const sum = a + b + c;
  const product = a * b * c;
  const division = a / b / c;

  const output = `
    <p class="operation">sum of the 3 values ${a} + ${b} + ${c} = <span class="result-value">${sum}</span></p>
    <p class="operation">multiplication of the 3 values ${a} * ${b} * ${c} = <span class="result-value">${product}</span></p>
    <p class="operation">division of the 3 values ${a} / ${b} / ${c} = <span class="result-value">${division}</span></p>
  `;

  outputDiv.innerHTML = output;
}
