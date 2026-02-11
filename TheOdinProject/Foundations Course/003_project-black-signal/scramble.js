export function scrambleOnce(element, options = {}) {
  if (element.dataset.scrambled === "true") return;

  const letters = options.letters || "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  const speed = options.speed || 40;
  const scramblesPerLetter = options.scrambles || 2;

  const original = element.dataset.value || element.innerText;

  let iteration = 0;
  let count = 0;

  element.dataset.scrambled = "true";

  // Count only non-space characters for progression
  const realChars = original.split("").filter(c => c !== " ").length;

  const interval = setInterval(() => {
    let locked = 0;

    element.innerText = original
      .split("")
      .map((char) => {
        // Always keep spaces
        const chars = " :";
        if (chars.includes(char)) return char;

        // Lock real characters progressively
        if (locked < iteration) {
          locked++;
          return char;
        }

        return letters[Math.floor(Math.random() * letters.length)];
      })
      .join("");

    count++;

    if (count === scramblesPerLetter) {
      iteration++;
      count = 0;
    }

    if (iteration > realChars) {
      clearInterval(interval);
      element.innerText = original;
    }
  }, speed);
}
