function playSound(seletorAudio) {
  var audio = document.querySelector(seletorAudio);
  if (audio && audio.localName === 'audio') {
    audio.play();
  }
  else {
    console.log('Elemento não é um audio ou não existe');
  }
}

const listaDeTeclas = document.querySelectorAll('.tecla');

for (let increment =0; increment < listaDeTeclas.length; increment++) {
   const tecla = listaDeTeclas[increment];
   const instrumento = tecla.classList[1];
   const idAudio = `#som_${instrumento}`;

   tecla.onclick = function() { 
       playSound(idAudio);
   } 

   tecla.onkeydown = function(event) {
        if (event.code === 'Space' || event.code === 'Enter') {
            tecla.classList.add('ativa');
        }
   }

   tecla.onkeyup = function(event) {
        if (event.code === 'Space' || event.code === 'Enter') {
            tecla.classList.remove('ativa');
        }
   }
}