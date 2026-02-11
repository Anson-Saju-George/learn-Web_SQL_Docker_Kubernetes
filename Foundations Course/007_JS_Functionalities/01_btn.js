// <!-- the HTML file -->
// <!-- METHOD 1 -->
<button onclick="alertFunction()">CLICK ME BABY</button>

// the JavaScript file
// METHOD 1
function alertFunction() {
  alert("YAY! YOU DID IT!");
}

//////////////////////////////////////////////////////////////////////
// <!-- the HTML file -->
// <!-- METHODS 2 & 3 -->
<button id="btn">CLICK ME BABY</button>

// the JavaScript file
// METHODS 2 & 3
function alertFunction() {
  alert("YAY! YOU DID IT!");
}
const btn = document.querySelector("#btn");

// METHOD 2
btn.onclick = alertFunction;

// METHOD 3
btn.addEventListener("click", alertFunction);


// Callback Function Example
btn.addEventListener("click", function (e) {
  console.log(e);
});

btn.addEventListener("click", function (e) {
  console.log(e.target);
});

btn.addEventListener("click", function (e) {
  e.target.style.background = "blue";
});


// Multiple Buttons Example
// buttons is a node list. It looks and acts much like an array.
const buttons = document.querySelectorAll("button");

// we use the .forEach method to iterate through each button
buttons.forEach((button) => {
  // and for each one we add a 'click' listener
  button.addEventListener("click", () => {
    alert(button.id);
  });
});
