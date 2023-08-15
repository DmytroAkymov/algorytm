function capitalizeJadenStyle(el) {
<<<<<<< HEAD
    return el
        .split(' ')
        .map((word) => {
            if (word.length > 0) {
                const firstLetter = word[0].toUpperCase();
                return firstLetter + word.slice(1);
            } else {
                return word;
            }
        })
        .join(' ');
=======
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
>>>>>>> 3d0a8280383fb04df021e895bd7279e4c19ae328
}

const originalQuote = "how can mirrors be real if our eyes aren't real";
const jadenStyleQuote = capitalizeJadenStyle(originalQuote);
console.log(jadenStyleQuote);
