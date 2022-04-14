let jogador = null;
let fimDeJogo = false
let vencedor = document.getElementById('vencedor-selecionado');
let jogador_Selecionado = document.getElementById('jogador-selecionado')
let quadrados = document.getElementsByClassName('quadrado');

alternaJogador('X')

function escolherQuadrado (id){
    let quadrado = document.getElementById(id);
    
    if(quadrado.innerHTML !== '-') {
        return;
    }
    if( fimDeJogo != false){
        return;
    }
    quadrado.innerHTML = jogador;
    quadrado.style.color = '#000';

    checarVencedor();

    if  (jogador === 'X'){
        jogador = 'O';
    }   else {
        jogador = 'X';
    }

    alternaJogador(jogador);
}

function alternaJogador(valor) {
    jogador = valor
    jogador_Selecionado.innerHTML = jogador
}

function checarVencedor() {
    if (checarSequencia(quadrados[0], quadrados[1], quadrados[2])) {
        mudarCorQuadrado(quadrados[0], quadrados[1], quadrados[2]);
        mudarVencedor(quadrados[0]);
        console.log('1')
        return;
     }else if(checarSequencia(quadrados[3], quadrados[4], quadrados[5])) {
         mudarCorQuadrado(quadrados[3], quadrados[4], quadrados[5])
         mudarVencedor(quadrados[3])
         console.log('2')
         return;
     }else if(checarSequencia(quadrados[6], quadrados[7], quadrados[8])) {
         mudarCorQuadrado(quadrados[6], quadrados[7], quadrados[8])
         mudarVencedor(quadrados[6])
         console.log('3')
         return;
     }else if(checarSequencia(quadrados[0], quadrados[3], quadrados[6])) {
        mudarCorQuadrado(quadrados[0], quadrados[3], quadrados[6])
        mudarVencedor(quadrados[0])
        console.log('4')
        return;
     }else if(checarSequencia(quadrados[1], quadrados[4], quadrados[7])) {
        mudarCorQuadrado(quadrados[1], quadrados[4], quadrados[7])
        mudarVencedor(quadrados[1])
        console.log('5')
        return;
     }else if(checarSequencia(quadrados[2], quadrados[5], quadrados[8])) {
        mudarCorQuadrado(quadrados[2], quadrados[5], quadrados[8])
        mudarVencedor(quadrados[2]) 
        console.log('6')
        return;
     }else if(checarSequencia(quadrados[0], quadrados[4], quadrados[8])) {
        mudarCorQuadrado(quadrados[0], quadrados[4], quadrados[8])
        mudarVencedor(quadrados[0])
        console.log('7')
        return;
     }else if(checarSequencia(quadrados[2], quadrados[4], quadrados[6])) {
        mudarCorQuadrado(quadrados[2], quadrados[4], quadrados[6])
        mudarVencedor(quadrados[2])
        console.log('8')
    }
}

function checarSequencia( quadrado1, quadrado2, quadrado3) {
    let eIgual = false;

    if(quadrado1.innerHTML !=='-' && quadrado1.innerHTML === quadrado2.innerHTML && quadrado2.innerHTML === quadrado3.innerHTML ){
        eIgual = true
        fimDeJogo = true;
    }
    console.log(eIgual)
    return eIgual;
}

function mudarCorQuadrado(quadrado1, quadrado2, quadrado3){
    quadrado1.style.background = '#0f0';
    quadrado2.style.background = '#0f0';
    quadrado3.style.background = '#0f0';
}

function mudarVencedor(vencedordaPartida) {
    vencedor.innerHTML = vencedordaPartida.innerHTML;
}

function reiniciar(){
    for(let i = 0; i<9;i++) {
        quadrados[i].innerHTML = "-" ;
        quadrados[i].style.color = '#eee';
    }

    vencedor.innerHTML = " ";
    fimDeJogo = false;
    
    alternaJogador("X")
}

