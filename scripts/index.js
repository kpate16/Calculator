window.onload = init;

function init() {
  const btn1 = document.getElementById("add");
  const btn2 = document.getElementById("substract");
  const btn3 = document.getElementById("multiply");
  const btn4 = document.getElementById("divide");

  btn1.addEventListener("click", onAddBtnClicked);
  btn2.addEventListener("click", onSubstractBtnClicked);
  btn3.addEventListener("click", onMultiplyBtnClicked);
  btn4.addEventListener("click", onDivideBtnClicked);
}
function onAddBtnClicked(event) {
  var number1 = document.getElementById("number1").value;
  var number2 = document.getElementById("number2").value;
  var answer = document.getElementById("answer");
  answer.value = parseFloat(number1) + parseFloat(number2);
}
function onSubstractBtnClicked(event) {
  var number1 = document.getElementById("number1").value;
  var number2 = document.getElementById("number2").value;
  var answer = document.getElementById("answer");
  answer.value = parseFloat(number1) - parseFloat(number2);
}
function onMultiplyBtnClicked(event) {
  var number1 = document.getElementById("number1").value;
  var number2 = document.getElementById("number2").value;
  var answer = document.getElementById("answer");
  answer.value = parseFloat(number1) * parseFloat(number2);
}
function onDivideBtnClicked(event) {
  var number1 = document.getElementById("number1").value;
  var number2 = document.getElementById("number2").value;
  var answer = document.getElementById("answer");
  answer.value = parseFloat(number1) / parseFloat(number2);
}
