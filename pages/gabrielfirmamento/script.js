const bgAnimation = document.getElementById('bgAnimation');

const numberOfColorBoxes = 400;

for (let i = 0; i < numberOfColorBoxes; i++) {
    const colorBox = document.createElement('div');
    colorBox.classList.add('colorBox');
    bgAnimation.append(colorBox)
}

const words = ["Desenvolvedor Web", "Designer Gráfico", "Criador de Conteúdo", "Apaixonado por Tecnologia"];
let wordIndex = 0;
const typingElement = document.getElementById('typing');
const typingSpeed = 100; // Velocidade de digitação
const erasingSpeed = 50; // Velocidade de apagamento
const newWordDelay = 2000; // Tempo de espera antes de iniciar a próxima palavra

function typeWord(word, callback) {
    let i = 0;
    typingElement.textContent = '';
    const interval = setInterval(() => {
        typingElement.textContent += word.charAt(i);
        i++;
        if (i > word.length) {
            clearInterval(interval);
            setTimeout(() => {
                eraseWord(callback);
            }, newWordDelay); // Tempo de pausa após digitar a palavra
        }
    }, typingSpeed); // Velocidade de digitação
}

function eraseWord(callback) {
    let i = typingElement.textContent.length;
    const interval = setInterval(() => {
        typingElement.textContent = typingElement.textContent.substring(0, i - 1);
        i--;
        if (i < 0) {
            clearInterval(interval);
            setTimeout(() => {
                callback();
            }, 500); // Tempo de pausa após apagar a palavra
        }
    }, erasingSpeed); // Velocidade de apagamento
}

function startTyping() {
    typeWord(words[wordIndex], () => {
        wordIndex = (wordIndex + 1) % words.length;
        startTyping();
    });
}

startTyping();
