
const container = document.querySelector("#container");


const content = document.createElement("div");
content.classList.add("content");
content.textContent = "This is the glorious text-content!";


container.appendChild(content);

const para1 = document.createElement("div");
para1.classList.add("para1");
para1.textContent = "Hey I'm red!";
para1.style = ["color: red;"];

container.appendChild(para1);

const h3 = document.createElement("div");
h3.classList.add("h3");
h3.textContent = "I'm a blue h3!";
h3.style = ["color: blue;"];

container.appendChild(h3);

const container2 = document.querySelector("#container2");
container2.style = ["background-color: pink; border-style: solid;"];

const h1 = document.createElement("div");
h1.classList.add("h1");
h1.textContent = "I'm in a div";

container2.appendChild(h1);

const para2 = document.createElement("div");
para2.classList.add("para2");
para2.textContent = "ME TOO!";

container2.appendChild(para2);




