const problems = [
  "Check if string is palindrome",
  "Return missing number in array",
  "Reverse a string",
  "Find the maximum number",
  "Count vowels in a string",
];

const button = document.getElementById("randomBtn");
const output = document.getElementById("randomOutput");

button.addEventListener("click", function () {
  const randomIndex = Math.floor(Math.random() * problems.length);
  output.textContent = problems[randomIndex];
});
