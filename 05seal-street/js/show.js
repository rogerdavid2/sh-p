const sections = document.querySelectorAll('section');

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.intersectionRatio > 0.1) { // if more than 10% in view
            entry.target.classList.add("in-view")
        } else[
            entry.target.classList.remove('in-view')
        ]
    })
}, {
    threshold: [0.0, 0.1, 1.0]
})

sections.forEach((section) => {
    observer.observe(section);
    const div = section.querySelector('div');
    const mq = window.matchMedia("(prefers-reduced-motion: no-preference)")

    if (mq.matches) {
        document.addEventListener("mousemove", function (event) {
            const aimX = (event.clientX - (window.innerWidth / 2)) / 20; // ev.pageX / 10 is based on top left corner
            const aimY = (event.clientY - (window.innerHeight / 2)) / -20; // use a negative to fix direction: ev.pageY/10 pixels per degree

            div.style.transform = `rotateX(${aimY}deg) rotateY(${aimX}deg)`;
        })
    }
})

/*
sections.forEach(section => {
let currentX = 0;
let currentY = 0;
let aimX = 0;
let aimY = 0;

const mq = window.matchMedia("(prefers-reduced-motion: no-preference)")

const updatePosition = function () {
    if (mq.matches) {
        currentX += (aimX - currentX) * 0.2
        currentY += (aimY - currentY) * 0.2
        const div = section.querySelector("div img")
        div.style.transform = `rotateX(${-10 * currentY}deg) rotateY(${10 * currentX}deg)`
        requestAnimationFrame(updatePosition)
    }
}

updatePosition();
document.addEventListener("mousemove", function (event) {
    aimX = (event.pageX - (window.innerWidth / 2)) / window.innerWidth
    aimY = (event.pageY - (window.innerHeight / 2)) / window.innerHeight
})


/*const div = section.querySelector('div');
const mq = window.matchMedia("(prefers-reduced-motion: no-preference)")

if (mq.matches) {
    document.addEventListener("mousemove", function (event) {
        const aimX = (event.clientX - (window.innerWidth / 2)) / 20; // ev.pageX / 10 is based on top left corner
        const aimY = (event.clientY - (window.innerHeight / 2)) / -20; // use a negative to fix direction: ev.pageY/10 pixels per degree

        div.style.transform = `rotateX(${aimY}deg) rotateY(${aimX}deg)`;
    })

}
})*/