const redText = document.createElement("p");
redText.textContent = "Hey I'm red!";
redText.style.cssText = "color: red;";

const blueHead = document.createElement("h3");
blueHead.textContent = "I'm a blue h3!";
blueHead.style.cssText = "color: blue;";

const boxDiv = document.createElement("div");
boxDiv.style.cssText = "background-color: pink; border-color: black;";

const inDivHead = document.createElement("h1");
inDivHead.textContent = "I'm in a div";

const me2p = document.createElement("p");
me2p.textContent = "ME TOO!"

const container = document.querySelector('#container');

container.appendChild(redText);
container.appendChild(blueHead);

boxDiv.appendChild(inDivHead);
boxDiv.appendChild(me2p);

container.appendChild(boxDiv);

const btn = document.querySelector('#btn');
btn.onclick = () => alert("Hello World");


const btn2 = document.querySelector('#btn2');
btn2.addEventListener('click', () => {
  alert("Hello World");
});

btn.addEventListener('click', function (e) {
    console.log(e);
  });

btn.addEventListener('click', function (e) {
    e.target.style.background = 'blue';
});
