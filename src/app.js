const faq = document.querySelectorAll(".faq-question");

faq.forEach((faq) => {
  faq.addEventListener("click", () => {
    faq.classList.toggle("active");
  });
});
