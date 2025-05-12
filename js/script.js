const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe')

const marioJump = () => {

    mario.classList.add('jump');
    
    setTimeout(() => {
        mario.classList.remove('jump');
    }, 500);
}


document.addEventListener('keydown', marioJump);
