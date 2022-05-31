let fimdejogo = false
let jogador = 1

function clicou(area) {
    let bloco = document.getElementById(area)
    if (fimdejogo == true) {
        window.alert('O jogo já acabou!')
    }
    else if (bloco.classList == 'circulo' || bloco.classList == 'xis') {
        window.alert('Espaço já preenchido!')
    }
    else if (jogador == 1) {
        bloco.classList.add('circulo')
        bloco.setAttribute('value', 'circulo')
        jogador *= -1
        verificar()
    }
    else if (jogador == -1) {
        bloco.classList.add('xis')
        bloco.setAttribute('value', 'xis')
        jogador *= -1
        verificar()
    }
    jogada()
}

function verificar() {
    let linhas = document.getElementsByTagName('tr')
    linha1 = linhas[0].children
    linha2 = linhas[1].children
    linha3 = linhas[2].children

    //VERIFICADOR HORIZONTAL 1
    if (linha1[0].getAttribute('class') != null && linha1[0].getAttribute('class') == linha1[1].getAttribute('class') && linha1[0].getAttribute('class') == linha1[2].getAttribute('class')) {
        if (linha1[0].getAttribute('class') == 'circulo') {
            finalizar('circulo')
            pintarArea('circulo', 'h1')
        }
        else {
            finalizar('xis')
            pintarArea('xis', 'h1')
        }
    }
    //VERIFICADOR HORIZONTAL 2
    else if (linha2[0].getAttribute('class') != null && linha2[0].getAttribute('class') == linha2[1].getAttribute('class') && linha2[0].getAttribute('class') == linha2[2].getAttribute('class')) {
        if (linha2[0].getAttribute('class') == 'circulo') {
            finalizar('circulo')
            pintarArea('circulo', 'h2')
        }
        else {
            finalizar('xis')
            pintarArea('xis', 'h2')
        }
    }
    //VERIFICADOR HORIZONTAL 3
    else if (linha3[0].getAttribute('class') != null && linha3[0].getAttribute('class') == linha3[1].getAttribute('class') && linha3[0].getAttribute('class') == linha3[2].getAttribute('class')) {
        if (linha3[0].getAttribute('class') == 'circulo') {
            finalizar('circulo')
            pintarArea('circulo', 'h3')
        }
        else {
            finalizar('xis')
            pintarArea('xis', 'h3')
        }
    }
    //VERIFICADOR VERTICAL 1
    else if (linha1[0].getAttribute('class') != null && linha1[0].getAttribute('class') == linha2[0].getAttribute('class') && linha1[0].getAttribute('class') == linha3[0].getAttribute('class')) {
        if (linha1[0].getAttribute('class') == 'circulo') {
            finalizar('circulo')
            pintarArea('circulo', 'v1')
        }
        else {
            finalizar('xis')
            pintarArea('xis', 'v1')
        }
    }
    //VERIFICADOR VERTICAL 2
    else if (linha1[1].getAttribute('class') != null && linha1[1].getAttribute('class') == linha2[1].getAttribute('class') && linha1[1].getAttribute('class') == linha3[1].getAttribute('class')) {
        if (linha1[1].getAttribute('class') == 'circulo') {
            finalizar('circulo')
            pintarArea('circulo', 'v2')
        }
        else {
            finalizar('xis')
            pintarArea('xis', 'v2')
        }
    }
    //VERIFICADOR VERTICAL 3
    else if (linha1[2].getAttribute('class') != null && linha1[2].getAttribute('class') == linha2[2].getAttribute('class') && linha1[2].getAttribute('class') == linha3[2].getAttribute('class')) {
        if (linha1[2].getAttribute('class') == 'circulo') {
            finalizar('circulo')
            pintarArea('circulo', 'v3')
        }
        else {
            finalizar('xis')
            pintarArea('xis', 'v3')
        }
    }
    //VERIFICADOR DIAGONAL ESQUERDA
    else if (linha1[0].getAttribute('class') != null && linha1[0].getAttribute('class') == linha2[1].getAttribute('class') && linha1[0].getAttribute('class') == linha3[2].getAttribute('class')) {
        if (linha1[0].getAttribute('class') == 'circulo') {
            finalizar('circulo')
            pintarArea('circulo', 'd1')
        }
        else {
            finalizar('xis')
            pintarArea('xis', 'd1')
        }
    }
    //VERIFICADOR DIAGONAL DIREITA
    else if (linha1[2].getAttribute('class') != null && linha1[2].getAttribute('class') == linha2[1].getAttribute('class') && linha1[2].getAttribute('class') == linha3[0].getAttribute('class')) {
        if (linha1[2].getAttribute('class') == 'circulo') {
            finalizar('circulo')
            pintarArea('circulo', 'd2')
        }
        else {
            finalizar('xis')
            pintarArea('xis', 'd2')
        }
    }

    else if (
        linha1[0].getAttribute('class') != undefined &&
        linha1[1].getAttribute('class') != undefined &&
        linha1[2].getAttribute('class') != undefined &&
        linha2[0].getAttribute('class') != undefined &&
        linha2[1].getAttribute('class') != undefined &&
        linha2[2].getAttribute('class') != undefined &&
        linha3[0].getAttribute('class') != undefined &&
        linha3[1].getAttribute('class') != undefined &&
        linha3[2].getAttribute('class') != undefined) {

        finalizar('velha')
    }
}

function finalizar(classe) {
    fimdejogo = true
    let tipo = classe;
    let res = document.getElementById('res')
    if (tipo == 'velha') {
        res.innerHTML = "<p>Deu velha 😥</p>"
    }
    else if (tipo == 'circulo') {
        res.innerHTML = "<p>O vencedor foi o <strong id='jogador1' style='color: green;'>Jogador 1</strong>!</p>"
    }
    else if (tipo == 'xis') {
        res.innerHTML = "<p>O vencedor foi o <strong id='jogador2' style='color: red;'>Jogador 2</strong>!</p>"
    }
    res.innerHTML += '<input type="button" value="Jogar Novamente" id="botao"></input>'
    let botao = document.getElementById('botao')
    botao.addEventListener('click', () => {
        location.reload()
    })
}

function jogada() {
    let jogadorVez = document.getElementById('vez')
    if (fimdejogo != true) {
        if (jogador == 1) {
            jogadorVez.innerHTML = "Vez do jogador 1"
            jogadorVez.style = "color: green; text-shadow: 1px 1px 1px white;"
        }
        else {
            jogadorVez.innerHTML = "Vez do jogador 2"
            jogadorVez.style = "color: crimson; text-shadow: 1px 1px 1px white;"
        }
    }
    else {
        jogadorVez.innerHTML = ''
    }
}
function pintarArea(forma, posicao){
    let cor
    if(forma == 'circulo'){
        cor = '--cor1'
    }
    else{
        cor = '--cor2'
    }
    switch(posicao){
       case 'h1':
            document.getElementById('area1').style.backgroundColor = `var(${cor})`
            document.getElementById('area2').style.backgroundColor = `var(${cor})`
            document.getElementById('area3').style.backgroundColor = `var(${cor})`
       break;
       case 'h2':
           document.getElementById('area4').style.backgroundColor = `var(${cor})`
           document.getElementById('area5').style.backgroundColor = `var(${cor})`
           document.getElementById('area6').style.backgroundColor = `var(${cor})`
       break;
       case 'h3':
           document.getElementById('area7').style.backgroundColor = `var(${cor})`
           document.getElementById('area8').style.backgroundColor = `var(${cor})`
           document.getElementById('area9').style.backgroundColor = `var(${cor})`
       break;
       case 'v1':
           document.getElementById('area1').style.backgroundColor = `var(${cor})`
           document.getElementById('area4').style.backgroundColor = `var(${cor})`
           document.getElementById('area7').style.backgroundColor = `var(${cor})`
       break;
       case 'v2':
           document.getElementById('area2').style.backgroundColor = `var(${cor})`
           document.getElementById('area5').style.backgroundColor = `var(${cor})`
           document.getElementById('area8').style.backgroundColor = `var(${cor})`
       break;
       case 'v3':
           document.getElementById('area3').style.backgroundColor = `var(${cor})`
           document.getElementById('area6').style.backgroundColor = `var(${cor})`
           document.getElementById('area9').style.backgroundColor = `var(${cor})`
       break;
       case 'd1':
           document.getElementById('area1').style.backgroundColor = `var(${cor})`
           document.getElementById('area5').style.backgroundColor = `var(${cor})`
           document.getElementById('area9').style.backgroundColor = `var(${cor})`
       break;
       case 'd2':
           document.getElementById('area3').style.backgroundColor = `var(${cor})`
           document.getElementById('area5').style.backgroundColor = `var(${cor})`
           document.getElementById('area7').style.backgroundColor = `var(${cor})`
       break;
    }
}
