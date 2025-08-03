const audio = document.getElementById('music');
const btn = document.getElementById('btn-msc');
const icon = btn.querySelector('i')

btn.addEventListener('click',() => {
  if (audio.paused) {
    audio.play();
    icon.classList.replace('bi-play-fill', 'bi-pause-fill');
    btn.innerHTML = '<i class="bi bi-pause-fill"></i>Pause'; 
  }else{
    audio.pause();
    icon.classList.replace('bi-pause-fill', 'bi-play-fill');
    btn.innerHTML = '<i class="bi bi-play-fill"></i>Play';

  }

});