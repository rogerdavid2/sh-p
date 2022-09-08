document.addEventListener('DOMContentLoaded', () => {
    const animatedTags = document.querySelectorAll('h2, h3, p, section img, a.button')
    animatedTags.forEach(tag => {
        tag.style.opacity = 0
    })

    const fadeIn = function () {
        let delay = 0.25
        animatedTags.forEach(tag => {
            const tagTop = tag.getBoundingClientRect().top; // top position within window: getBCR is based on the window whearse offsetTop is based on page
            // as you scrolled downwards the top of an element becomes negative 

            // to see if it's in the frame
            const tagBottom = tag.getBoundingClientRect().bottom
            console.log(tagTop, tagBottom);
            console.log(window.innerHeight);

            // see with gBCR if it is in the window
            if (tagTop < window.innerHeight && tagBottom > 0) { // bottom is off the page
                tag.style.animation = `fadein 1s ${delay}s both`
                delay += 0.25
            } else {
                tag.style.opacity = 0
                tag.style.animation = ''
            }
        })
    }

    //on load, run fadeIn
    fadeIn()

    //run on scroll
    document.addEventListener('scroll', () =>
        fadeIn()
    )

    //run on browser resize
    window.addEventListener('resize', () =>
        fadeIn()
    )

})