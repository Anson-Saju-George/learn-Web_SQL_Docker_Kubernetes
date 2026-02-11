const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const text = document.getElementById("scramble");

text.addEventListener("mouseenter", () => {
  const original = text.dataset.value;
  let iteration = 0;
  let scrambleCount = 0;

  const interval = setInterval(() => {
    text.innerText = original
      .split("")
      .map((char, index) => {
        if (index < iteration) return char;
        return letters[Math.floor(Math.random() * letters.length)];
      })
      .join("");

    scrambleCount++;

    if (scrambleCount === 2) {
      iteration++;
      scrambleCount = 0;
    }

    if (iteration > original.length) {
      clearInterval(interval);
    }
  }, 50);
});
