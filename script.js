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

}

function verificar() {
    let linhas = document.getElementsByTagName('tr')
    linha1 = linhas[0].children
    linha2 = linhas[1].children
    linha3 = linhas[2].children

    if (linha1[0].getAttribute('class') != null && linha1[0].getAttribute('class') == linha1[1].getAttribute('class') && linha1[0].getAttribute('class') == linha1[2].getAttribute('class')) {
        if (linha1[0].getAttribute('class') == 'circulo') {
            finalizar('circulo')
        }
        else {
            finalizar('xis')
        }
    }
    else if (linha2[0].getAttribute('class') != null && linha2[0].getAttribute('class') == linha2[1].getAttribute('class') && linha2[0].getAttribute('class') == linha2[2].getAttribute('class')) {
        if (linha2[0].getAttribute('class') == 'circulo') {
            finalizar('circulo')
        }
        else {
            finalizar('xis')
        }
    }
    else if (linha3[0].getAttribute('class') != null && linha3[0].getAttribute('class') == linha3[1].getAttribute('class') && linha3[0].getAttribute('class') == linha3[2].getAttribute('class')) {
        if (linha3[0].getAttribute('class') == 'circulo') {
            finalizar('circulo')
        }
        else {
            finalizar('xis')
        }
    }
    else if (linha1[0].getAttribute('class') != null && linha1[0].getAttribute('class') == linha2[0].getAttribute('class') && linha1[0].getAttribute('class') == linha3[0].getAttribute('class')) {
        if (linha1[0].getAttribute('class') == 'circulo') {
            finalizar('circulo')
        }
        else {
            finalizar('xis')
        }
    }
    else if (linha1[1].getAttribute('class') != null && linha1[1].getAttribute('class') == linha2[1].getAttribute('class') && linha1[1].getAttribute('class') == linha3[1].getAttribute('class')) {
        if (linha1[1].getAttribute('class') == 'circulo') {
            finalizar('circulo')
        }
        else {
            finalizar('xis')
        }
    }
    else if (linha1[2].getAttribute('class') != null && linha1[2].getAttribute('class') == linha2[2].getAttribute('class') && linha1[2].getAttribute('class') == linha3[2].getAttribute('class')) {
        if (linha1[2].getAttribute('class') == 'circulo') {
            finalizar('circulo')
        }
        else {
            finalizar('xis')
        }
    }
    else if (linha1[0].getAttribute('class') != null && linha1[0].getAttribute('class') == linha2[1].getAttribute('class') && linha1[0].getAttribute('class') == linha3[2].getAttribute('class')) {
        if (linha1[0].getAttribute('class') == 'circulo') {
            finalizar('circulo')
        }
        else {
            finalizar('xis')
        }
    }
    else if (linha1[2].getAttribute('class') != null && linha1[2].getAttribute('class') == linha2[1].getAttribute('class') && linha1[2].getAttribute('class') == linha3[0].getAttribute('class')) {
        if (linha1[2].getAttribute('class') == 'circulo') {
            finalizar('circulo')
        }
        else {
            finalizar('xis')
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
