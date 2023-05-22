function calculateRate() {
  const userName = document.getElementById("userName").value;
  const userAge = Number(document.getElementById("userAge").value);
  const isStudent = document.getElementById("isStudent").checked;

  if (!userName) {
    return alert("Please enter a valid name");
  }

  if (userAge < 0 || isNaN(userAge) || !userAge) {
    return alert("Please enter a valid age");
  }

  let rate = 2.5;
  let discountedRate = rate;

  switch (true) {
    case isStudent:
      discountedRate = (rate * 50) / 100;
      break;
    case userAge >= 0 && userAge <= 6:
      discountedRate = 0;
      break;
    case userAge >= 60:
      let discountAmount = (rate * 30) / 100;
      discountedRate = rate - discountAmount;
      break;
  }

  let formattedValue = discountedRate.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
  });

  let message = `Hello ${userName}, as you are ${userAge} years old you will pay ${formattedValue}`;
  document.getElementById("result").textContent = message;
}
