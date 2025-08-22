const buttons = document.querySelectorAll(".button");

buttons.forEach(button => {
  button.addEventListener("click", () => {
    const newColor = button.getAttribute("data-color");
    document.body.style.backgroundColor = newColor;

    // Change text color for light/dark backgrounds
    const isDark = isDarkColor(newColor);
    document.body.style.color = isDark ? "white" : "black";
  });
});

function isDarkColor(color) {
  // Create a temporary div to get computed color
  const div = document.createElement("div");
  div.style.color = color;
  document.body.appendChild(div);
  const rgb = window.getComputedStyle(div).color;
  document.body.removeChild(div);

  const match = rgb.match(/\d+/g);
  if (!match) return false;
  const [r, g, b] = match.map(Number);
  const brightness = (r * 299 + g * 587 + b * 114) / 1000;
  return brightness < 128;
}
