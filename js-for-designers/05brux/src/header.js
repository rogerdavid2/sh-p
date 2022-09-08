document.addEventListener('DOMContentLoaded', () => {
    const headerTag = document.querySelector('header')

    const toggleHeader = function () {
        const pixels = window.pageYOffset
        if (pixels > 100) {
            headerTag.classList.add('scrolled');
        } else {
            headerTag.classList.remove('scrolled');
        }

        fadeBox(pixels)
    }

    const fadeBox = function (p) {
        const alpha = Math.min(p / 1000, 0.75)
        headerTag.style.boxShadow = ` 0 0 10px rgba(0, 0, 0, ${alpha}) `
    }

    toggleHeader()

    document.addEventListener('scroll', () => {
        toggleHeader()
    })
})