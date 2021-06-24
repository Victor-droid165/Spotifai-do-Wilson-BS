function f1(id, nomeDaClasse){
  var ignoraClick_Elemento = document.getElementById(id);

  document.addEventListener('click', function(event) {
      var elementoClicado = ignoraClick_Elemento.contains(event.target);
      if (!elementoClicado) {
          ignoraClick_Elemento.value = "";
        document.getElementsByClassName(nomeDaClasse)[0].classList.remove("hide");
        document.getElementsByClassName(nomeDaClasse)[1].classList.remove("hide");
      }else{
        document.getElementsByClassName(nomeDaClasse)[0].classList.add("hide");
        document.getElementsByClassName(nomeDaClasse)[1].classList.add("hide");
      }
  });
}

function play(id) {
  var audio = document.getElementById(id);
  if (audio.paused) {
    audio.play();
  }else{
    audio.pause();
    audio.currentTime = 0;
  }
}

function playVideo(){
    document.getElementById("mv").currentTime=0;
    document.getElementById("mv").classList.remove("hide");
    document.getElementById("botao").classList.remove("hide");
    document.getElementById("h6").classList.add("hide");
    document.getElementById("botao2").classList.add("hide");
    document.getElementById("mv").play();
} 

function pauseVid(){
  document.getElementById("mv").pause();
  document.getElementById("mv").muted = !document.getElementById("mv").muted;
  document.getElementById("mv").classList.add("hide");
  document.getElementById("botao").classList.add("hide");
  document.getElementById("h6").classList.remove("hide");
  document.getElementById("botao2").classList.remove("hide");
  window.setTimeout(playVideo, 600000);
}