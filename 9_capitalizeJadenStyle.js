function capitalizeJadenStyle(el) {
  return el
    .split(" ")
    .map((word) => {
      if (word.length > 0) {
        const firstLetter = word[0].toUpperCase();
        return firstLetter + word.slice(1);
      } else {
        return word;
      }
    })
    .join(" ");
}

const originalQuote = "how can mirrors be real if our eyes aren't real";
const jadenStyleQuote = capitalizeJadenStyle(originalQuote);
console.log(jadenStyleQuote);
