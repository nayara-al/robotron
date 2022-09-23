const controle = document.querySelectorAll('[data-controle]')
const pecas = {
  "bracos": {
      "forca": 29,
      "poder": 35,
      "energia": -21,
      "velocidade": -5
  },

  "blindagem": {
      "forca": 41,
      "poder": 20,
      "energia": 0,
      "velocidade": -20
  },
  "nucleos":{
      "forca": 0,
      "poder": 7,
      "energia": 48,
      "velocidade": -24
  },
  "pernas":{
      "forca": 27,
      "poder": 21,
      "energia": -32,
      "velocidade": 42
  },
  "foguetes":{
    "forca": 0,
    "poder": 28,
    "energia": 0,
    "velocidade": -2
}
}
const estatistica = document.querySelectorAll('[data-estatistica]')
const robo = document.querySelector('.robo')
const controleSkin = document.querySelectorAll('[data-ajusteskin]')

const sourceSkin =  [
    "img/robotron-amarelo.png",
    "img/robotron-azul.png",   
    "img/robotron-branco.png",
    "img/robotron-preto.png",
    "img/robotron-rosa.png",
    "img/robotron-vermelho.png"
]

const corSkin=['amarelo','azul','branco','preto','rosa','vermelho']

controle.forEach( (elemento) => {
  elemento.addEventListener('click', (evento)=> {
    manipulaDados(evento.target.dataset.controle, evento.target.parentNode)
    atualizaEstatistica(evento.target.dataset.peca, evento.target.dataset.controle)
  })
});

function manipulaDados(operacao, controle) {
  const peca = controle.querySelector('[data-contador]')
  if (operacao ==='+') {
    peca.value = Number(peca.value) + 1
  } else {
    peca.value = Number(peca.value) - 1
  } 
}

function atualizaEstatistica(peca, operacao) {
 if(operacao === "+") {
    estatistica.forEach( (elemento) => {
      elemento.textContent = parseInt(elemento.textContent) + pecas[peca][elemento.dataset.estatistica];
    })
  } else {
    estatistica.forEach( (elemento) => {
      elemento.textContent = parseInt(elemento.textContent) - pecas[peca][elemento.dataset.estatistica];
    })
  }
}

controleSkin.forEach( (objeto) => {
  objeto.addEventListener('click', (evento) => {
      alterarSkin(evento.target.dataset.ajusteskin,robo.dataset.cor,evento.target.parentNode )
  } )
})

function alterarSkin(operacao, corAtual, itemPai){

  let posicaoCor = corSkin.indexOf(corAtual)
  let visor = itemPai.querySelector('.controle-contador-skin')

  if (posicaoCor<(corSkin.length-1) && operacao == "+"){
      robo.attributes.src.value = sourceSkin[posicaoCor+1]
      robo.dataset.cor = corSkin[posicaoCor+1]
      visor.value = corSkin[posicaoCor+1]
  } else if (posicaoCor>=(corSkin.length-1) && operacao == "+") {
      robo.attributes.src.value = sourceSkin[0]
      robo.dataset.cor =  corSkin[0]
      visor.value = corSkin[0]
  } 

  if (posicaoCor>0 && operacao == "-") {
      robo.attributes.src.value = sourceSkin[posicaoCor-1]
      robo.dataset.cor =  corSkin[posicaoCor-1]
      visor.value = corSkin[posicaoCor-1]
      console.log(posicaoCor)
  } else if (posicaoCor<=0 && operacao == "-"){
      robo.attributes.src.value = sourceSkin[corSkin.length-1]
      robo.dataset.cor =  corSkin[corSkin.length-1]
      visor.value = corSkin[corSkin.length-1]
  }

}