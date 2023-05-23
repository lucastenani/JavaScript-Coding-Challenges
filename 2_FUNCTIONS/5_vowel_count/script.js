function vowelCount(string) {
  let count = 0;

  for (const e of string.toLowerCase()) {
    if (e === "a" || e === "e" || e === "i" || e === "o" || e === "u") {
      count++;
    }
  }
  return count;
}

console.log(vowelCount("Hello, World!"));
console.log(vowelCount("JavaScript is fun."));
console.log(vowelCount("The quick brown fox jumps over the lazy dog."));
console.log(vowelCount("Hmmm, tsk tsk!"));
