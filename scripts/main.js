const image = document.querySelector("img")

image.onclick = () =>
{
  const source = image.getAttribute("src")
  if (source === "images/artemis-logo.png")
    image.setAttribute("src", "images/apollo-logo.png")
  else
    image.setAttribute("src", "images/artemis-logo.png")
}

let button  = document.querySelector("button")
let heading = document.querySelector("h1")

function setUserName()
{
  const name = prompt("Please enter your name.");
  if (!name)
    setUserName();
  else
  {
    localStorage.setItem("name", name);
    heading.textContent = `Artemis is cool, ${name}`;
  }
}

if (!localStorage.getItem("name"))
  setUserName()
else
{
  const storedName = localStorage.getItem("name")
  heading.textContent = `Artemis is cool, ${storedName}`
}

button.onclick = setUserName
