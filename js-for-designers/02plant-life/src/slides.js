document.addEventListener('DOMContentLoaded', () => {

    const slideArea = document.querySelector('div.slides')
    const images = slideArea.querySelectorAll('img')

    let currentSlide = 0
    let z = 1

    // click through image slideshow
    slideArea.addEventListener('click', () => {
        currentSlide += 1
        if (currentSlide > images.length - 1) {
            currentSlide = 0
        }
        z += 1
        //remove animation per image
        images.forEach(image => {
            image.style.animation = ''
        })
        images[currentSlide].style.zIndex = z
        images[currentSlide].style.animation = 'fade 0.5s' // the current image has the animation applied, the rest don't
    })

    //animation: 1name 2duration 3timing-function 4delay 5iteration-count 6fill-mode


    // randomized image spread on mouseover 
    slideArea.addEventListener('mouseover', () => {
        images.forEach(image => {
            // snap images to grid (-50, -25, 0, 25, 50)
            const x = 25 * (Math.floor(Math.random() * 5)) - 50
            const y = 25 * (Math.floor(Math.random() * 5)) - 50
            image.style.transform = `translate(${x}px, ${y}px)`
        })
    })

    slideArea.addEventListener('mouseout', () => {
        images.forEach(image => { image.style.transform = '' })
    })

})