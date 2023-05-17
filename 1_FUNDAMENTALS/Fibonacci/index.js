function startFibonacci() {
  const lastNumber = parseInt(document.getElementById("lastNumber").value);
  let fibSeq = [];
  let a = 0;
  let b = 1;

  while (a <= lastNumber) {
    fibSeq.push(a);
    const previousNumber = a;

    a = b;
    b = previousNumber + a;
  }

  document.getElementById("result").textContent = fibSeq.join(", ");
}
