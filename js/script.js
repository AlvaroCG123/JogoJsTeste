const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe')

const marioJump = () => {

    mario.classList.add('jump');
    
    setTimeout(() => {
        mario.classList.remove('jump');
    }, 500);
}

const loop = setInterval(() =>{

    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');

    console.log(marioPosition)

    if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 80) {

        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;

        mario.style.animation = 'none';
        mario.style.bottom = `${marioPosition}px`;

        mario.src ='./img/game-over.png'
        mario.style.width = '75px'
        mario.style.marginLeft = '50px'
    }

}, 10)


document.addEventListener('keydown', marioJump);

document.addEventListener('keydown', function(event) {
    if (event.code === 'Space') {
      event.preventDefault(); // impede a rolagem da página
      location.reload(); // recarrega a página (F5)
    }
  });