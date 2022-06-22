const mario = document.querySelector(".mario")
const pipe = document.querySelector(".pipe")
const clouds = document.querySelector(".clouds")

const jump = () => {
    mario.classList.add('jump')

    setTimeout(()=> {
        mario.classList.remove('jump')
    }, 500)
}

const gameLoop = setInterval(()=> {
    const pipePosition = pipe.offsetLeft
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '')
    const cloudsPosition = clouds.offsetLeft
    if (pipePosition <= 120 && marioPosition < 80 && pipePosition > 0){
        pipe.style.animation = 'none'
        pipe.style.left = `${pipePosition}px`

        mario.style.animation = 'none'
        mario.style.bottom = `${marioPosition}px`

        mario.src = './images/game-over.png'
        mario.style.width = '70px'
        mario.style.marginLeft = '50px'

        clouds.style.animation = 'none'
        clouds.style.left = `${cloudsPosition}px`

        clearInterval(gameLoop);
    }
}, 10)

document.addEventListener('keydown', jump);