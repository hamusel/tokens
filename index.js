let tokensAlex = parseInt(localStorage.getItem('user1Tokens'));
let tokensBotea = parseInt(localStorage.getItem('user2Tokens'));

tokensAlex = isNaN(tokensAlex) ? 10 : tokensAlex;
tokensBotea = isNaN(tokensBotea) ? 10 : tokensBotea;


document.getElementById('alexTokensAmount').textContent = 'Jetoane: ' + tokensAlex;
document.getElementById('boteaTokensAmount').textContent = 'Jetoane: ' + tokensBotea;


document.getElementById('alexFace').addEventListener('click', () => {
    if (tokensBotea >= 1) {
        tokensBotea--;
        tokensAlex++;
        updateTokens("alex");
    }
})

document.getElementById('boteaFace').addEventListener('click', () => {
    if (tokensAlex >= 1) {
        tokensBotea++;
        tokensAlex--;
        updateTokens("botea");
    }
})

let alex = document.getElementById('Alex')
let botea = document.getElementById('Botea')
let existingAlexTokens = document.querySelectorAll('#alexToken').length;
let existingBoteaTokens = document.querySelectorAll('#boteaToken').length;


for (let i = existingAlexTokens; i < tokensBotea; i++) {
    addAlex()
}

for (let i = existingBoteaTokens; i < tokensAlex; i++) {
    addBotea()
}

function addAlex() {
    const alexToken = document.createElement('img');
    alexToken.classList.add('token');
    alexToken.src = "Jeton-Alex.png"
    botea.appendChild(alexToken);
}


function addBotea() {
    const boteaToken = document.createElement('img');
    boteaToken.classList.add('token');
    boteaToken.src = "Jeton-Andrei.png"
    alex.appendChild(boteaToken);
}


function addToken(character) {
    if (character === "alex") {
        const boteaToken = document.createElement('img');
        boteaToken.classList.add('token');
        boteaToken.src = "Jeton-Andrei.png";
        alex.appendChild(boteaToken);
    } else if (character === "botea") {
        const alexToken = document.createElement('img');
        alexToken.classList.add('token');
        alexToken.src = "Jeton-Alex.png";
        botea.appendChild(alexToken);
    }
}

function removeToken(character) {
    if (character === "alex") {
        const tokens = alex.querySelectorAll('.token');
        if (tokens.length > 0) {
            tokens[tokens.length - 1].classList.toggle('translated');
            alex.removeChild(tokens[tokens.length - 1]);
        }
    } else if (character === "botea") {
        const tokens = botea.querySelectorAll('.token');
        if (tokens.length > 0) {
            tokens[tokens.length - 1].classList.toggle('translated');
            botea.removeChild(tokens[tokens.length - 1]);
        }
    }
}

function updateTokens(character) {
    document.getElementById('alexTokensAmount').textContent = 'Jetoane: ' + tokensAlex;
    document.getElementById('boteaTokensAmount').textContent = 'Jetoane: ' + tokensBotea;
    if (character === "alex") {
        addToken("alex");
        removeToken("botea")
    } else {
        addToken("botea");
        removeToken("alex");
    }

    localStorage.setItem('user1Tokens', tokensAlex);
    localStorage.setItem('user2Tokens', tokensBotea);

}

const images = document.querySelectorAll('img');

images.forEach(image => {
    image.addEventListener('dragstart', (event) => {
        event.preventDefault();
    });
});
