const animatedCursor = document.getElementById("animatedCursor");

document.addEventListener("mousemove", (event) => {
  animatedCursor.style.left = `${event.clientX}px`;
  animatedCursor.style.top = `${event.clientY}px`;
});

document.querySelectorAll("a").forEach((link) => {
  link.addEventListener("mouseenter", () => {
    animatedCursor.classList.add("visible");
  });

  link.addEventListener("mouseleave", () => {
    animatedCursor.classList.remove("visible");
  });
});
