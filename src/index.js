import "./style.css";

function test() {
  const text = document.createElement("h1");
  text.textContent = "hello wwebbbpack";
  text.classList.add("test");
  document.body.appendChild(text);
}

test();
