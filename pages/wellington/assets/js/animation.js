const myName = document.querySelector(".construction__link");
const container = document.querySelector(".construction");


container.style.position = "relative";

myName.style.position = "absolute";

function getRandomColor() {
	return Math.floor(Math.random() * 16777215).toString(16);
}

// Evento de passar o mouse
myName.addEventListener("mouseover", function () {
	const randomColor = getRandomColor();
	myName.style.color = "#" + randomColor;
});

myName.addEventListener("mouseout", function () {
	myName.style.color = "black";
});


let posicaoX = Math.random() * (container.offsetWidth - myName.offsetWidth);
let posicaoY = Math.random() * (container.offsetHeight - myName.offsetHeight);

let velocidadeX = 2;
let velocidadeY = 2;
let animacao;

function moveText() {
	const containerWidth = container.offsetWidth;
	const containerHeight = container.offsetHeight;
	const textWidth = myName.offsetWidth;
	const textHeight = myName.offsetHeight;

	posicaoX += velocidadeX;
	posicaoY += velocidadeY;

	if (posicaoX + textWidth >= containerWidth || posicaoX <= 0) {
		velocidadeX = -velocidadeX;
	}

	if (posicaoY + textHeight >= containerHeight || posicaoY <= 0) {
		velocidadeY = -velocidadeY;
	}

	myName.style.left = posicaoX + "px";
	myName.style.top = posicaoY + "px";

	animacao = requestAnimationFrame(moveText);
}

moveText();
setTimeout(() => {
	cancelAnimationFrame(animacao);
}, 15000);
