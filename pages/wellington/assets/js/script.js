const myName = document.querySelector(".main__name-link");
myName.style.position = "absolute";

function getRandomColor() {
	return Math.floor(Math.random() * 16777215).toString(16);
}

//evento de passar o mouse
myName.addEventListener("mouseover", function () {
	const randomColor = getRandomColor();
	myName.style.color = "#" + randomColor;
});

myName.addEventListener("mouseout", function () {
	myName.style.color = "black";
});

//inicia o texto
let posicaoX = Math.random() * (window.innerWidth - myName.offsetWidth);
let posicaoY = Math.random() * (window.innerHeight - myName.offsetHeight);

let velocidadeX = 5;
let velocidadeY = 2;
let animacao;

function moveText() {
	const containerWidth = window.innerWidth;
	const containerHeight = window.innerHeight;
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
