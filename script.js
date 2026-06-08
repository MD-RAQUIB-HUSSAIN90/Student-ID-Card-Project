let form = document.querySelector("form");
let inputs = document.querySelectorAll("input");
let main = document.querySelector("#main");
let box = document.querySelector("#box");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  // CREATE INPUTS
  let profile = document.createElement("div");
  let img = document.createElement("img");
  let name = document.createElement("h3");
  let age = document.createElement("h5");
  let email = document.createElement("h5");
  let para = document.createElement("p");
  let card = document.createElement("div");
  let boxChild = document.createElement("div");

  // ASSINGING, STYLING, APPENDING
  card.id = "card";
  card.style.backgroundSize = "cover";
  box.appendChild(card);
  card.append(profile);
  boxChild.id = "boxChild";
  boxChild.append(name, age, email, para);
  card.append(boxChild);

  // ADD CLASSLIST NAME
  profile.classList.add("profile");
  name.classList.add("name");
  age.classList.add("age");
  email.classList.add("email");
  para.classList.add("para");
  img.setAttribute("src", inputs[0].value);
  profile.appendChild(img);

  // ADD VALUES
  name.textContent = `Name:   ${inputs[1].value}`;
  age.textContent = `Age:     ${inputs[2].value}`;
  email.textContent = `Email: ${inputs[3].value}`;
  para.textContent = `Description: ${inputs[4].value}`;
  console.log(card);
});

