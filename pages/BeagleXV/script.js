const buttonRedeSocial = document.getElementById('botao');
const redesSociais = document.getElementById('redes-sociais');
buttonRedeSocial.addEventListener('click', function(){
    if(redesSociais.innerHTML === ''){
        const gitHub = document.createElement('li');     
        const gitHubLink = document.createElement('a');
        gitHubLink.href = 'https://github.com/BeagleXV';
        gitHubLink.textContent = 'github.com/BeagleXV';
        gitHubLink.target = '_blank';

        gitHub.appendChild(gitHubLink);
        redesSociais.appendChild(gitHub);
        
        const twitter = document.createElement('li')
        const twitterLink = document.createElement('a');
        twitterLink.href = 'https://x.com/0xB34gl3XV';
        twitterLink.textContent = 'x.com/0xB34gl3XV';
        twitterLink.target = '_blank';

        twitter.appendChild(twitterLink)
        redesSociais.appendChild(twitter);
    } else{
        redesSociais.innerHTML = '';    
    }
});