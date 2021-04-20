const sContainer = document.querySelector('.slider-container')
const rightSlide = document.querySelector('.right-slige')
const leftSlide = document.querySelector('.left-slide')
const downButton = document.querySelector('.down-button')
const upButton = document.querySelector('.up-button')
const sLength = rightSlide.querySelectorAll('div').length

let asIndex = 0

leftSlide.style.top = `${(sLength - 1) * 100}vh`

upButton.addEventListener('click', () => chSlide('up'))
downButton.addEventListener('click', () => chSlide('down'))

const chSlide = (direction) => {
    const sHeight = sContainer.clientHeight
    if(direction === 'up') {
        asIndex++
        if(asIndex > sLength - 1) {
            asIndex = 0
         }
        } else if(direction === 'down') {
            asIndex--
            if(asIndex < 0) {
                asIndex = sLength - 1
            }
        }

    rightSlide.style.transform = `translateY(-${asIndex * sHeight}px)`
    leftSlide.style.transform = `translateY(${asIndex * sHeight}px)`
}