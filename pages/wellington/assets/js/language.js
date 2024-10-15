const textProfile = document.querySelector('.profile__greeting');

const userLang = navigator.language || navigator.userLanguage;
console.log("Idioma do navegador:", userLang);

if (userLang === 'pt-BR') {
    textProfile.innerHTML = 'Olá <span role="img" aria-label="waving hand">👋</span>,<br> Me chamo Wellington, Engenheiro de Software interessado em Programação Funcional (FP) e BEM (Block, Element, Modifier), meu foco principal está no front-end. Meu objetivo é solucionar os seus problemas da maneira certa.';
}
if(userLang === 'en-US') {
    textProfile.innerHTML = "Hello <span role='img' aria-label='waving hand'>👋</span>,<br> I'm Wellington, a Software Engineer interested in Functional Programming (FP) and BEM (Block, Element, Modifier). My main focus is on front-end development, and my goal is to solve your problems the right way.";
}