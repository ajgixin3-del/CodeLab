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

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 100;
    if (pageYOffset >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active");
    }
  });
});

const contactForm = document.getElementById("contactForm");
const formOutput = document.getElementById("formOutput");

contactForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const name = document.getElementById("name").value;
  formOutput.textContent = `Thanks, ${name}! Your message is received.`;
  contactForm.reset();
});

const problemItems = document.querySelectorAll("#practice li");

problemItems.forEach((item) => {
  item.addEventListener("mouseenter", () => {
    item.style.backgroundColor = "#7c5cff";
    item.style.color = "#fff";
  });
  item.addEventListener("mouseleave", () => {
    item.style.backgroundColor = "#1a1a23";
    item.style.color = "#e4e4e7";
  });
});
