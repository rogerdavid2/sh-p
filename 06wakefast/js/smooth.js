/* How to make page move slower than scroll so a tween 
    It needs content to not be affected by scroll

    base layer: usual scroll everything is in 
    page layer: will be behind in speed
*/

/*
    Make the body tag the same height as the main tag
    When you scroll down make the site go upwards
    use rAF() for this 
 
    the bodyTag will be slower than main
    bigger the constant the faster
    smaller the constant the slower
*/
const mainTag = document.querySelector("main");
const bodyTag = document.querySelector("body");
const figcaptions = document.querySelectorAll("figcaption")

const motion = window.matchMedia('(prefers-reduced-motion: no-preference)')
const large = window.matchMedia('(min-width: 600px)') // page is wider than a certain size

if (motion.matches && large.matches) {
    mainTag.style.position = "fixed";
    mainTag.style.left = 0;
    mainTag.style.top = 0;
    mainTag.style.width = "100%";


    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.intersectionRatio > 0.25) { // threshold must be updated 
                entry.target.classList.add("in-view");
            } else {
                entry.target.classList.remove("in-view");
            }
        })
    }, {
        threshold: [0, 0.25, 1]
    });

    figcaptions.forEach(caption => {
        observer.observe(caption);
    })


    // where we are vs where we want to be
    let currentScroll = 0;
    let aimScroll = 0;

    const changeScroll = function () {
        bodyTag.style.height = mainTag.offsetHeight + "px";

        // same speed
        // currentScroll = aimScroll;
        // technique formula
        currentScroll = currentScroll + (aimScroll - currentScroll) * 0.1;
        mainTag.style.transform = `translate(0, ${-1 * currentScroll}px)`;

        figcaptions.forEach(caption => {
            const box = caption.getBoundingClientRect(); // find the rectable an a div
            const midY = box.y + box.height / 2; // find the mid point of the rectangle div
            const midScreen = window.innerHeight / 2;
            const diff = midY - midScreen; // further the distance the bigger the effect, vice-versa, exactly middle zero movement

            const images = caption.querySelectorAll("img");
            images.forEach((img, index) => {
                const speed = 0.1 + 0.05 * index; // always above 0.1, 0.05 is gap, 0.1 is starting point
                img.style.transform = `translate3D(0, ${diff * speed}px, 0)`;
            })

        })

        requestAnimationFrame(changeScroll);
    }

    window.addEventListener("scroll", () => {
        aimScroll = window.pageYOffset;
    })

    changeScroll();
}