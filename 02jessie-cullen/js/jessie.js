const headerTag = document.querySelector('header')
const blobGroups = document.querySelectorAll('g.blob');
const sectionTags = document.querySelectorAll('section');
const arrowTag = document.querySelector('img.arrow');


const fadeArrow = function () {
    const pixels = window.pageYOffset;
    arrowTag.style.opacity = 1 - easeInCubic(pixels / 250);
}

/* some number between [0, 1] */
const easeInCubic = function (x) {
    return x * x * x;
}

const fadeHeader = function () {
    const pixels = window.pageYOffset;

    console.log('pixels', pixels);
    const test = 1 - easeInCubic(pixels / 500);

    if (pixels === 0) {
        console.log('top of section')
        console.log(pixels, test)
    }
    if (pixels === 250) {
        console.log('middle of section');
        console.log(pixels, test)
    }
    if (pixels === 500) {
        console.log('end of section')
        console.log(pixels, test);
    }


    // the bigger the dividend the longer the animation lasts, start at 1!
    headerTag.style.opacity = 1 - easeInCubic(pixels / 500); // pixels / 500 will show the text as you scroll down, but we want to show text first then fade out

}

const checkBlobs = function () {
    const pixels = window.pageYOffset;
    blobGroups.forEach((blob, index) => {
        const currentSection = sectionTags[index];
        if (pixels > currentSection.offsetTop - 300) { // is pixels is further down than section 300 pixels earlier
            blob.classList.add('in-view');
        } else {
            blob.classList.remove('in-view');
        }
    })

}

window.addEventListener("scroll", function () {
    fadeHeader();
    checkBlobs();
    fadeArrow();
})

/*  
    Math: linear equation results to cubic
    Top of page at 0 with height of 500px
                pYO
    Top:    1 - (0) / 500 = 1      to cubic=> 1 - (1 * 1 * 1) => 1
    Middle: 1 - (250) / 500 = 0.5  to cubic=> 1 - (0.5 * 0.5 * 0.5) => 0.875
    Bottom: 1 - (500) / 500 = 0    to cubic=>  1 - (0 * 0 * 0) => 0
 
    Math: cubic
    Top of page at 0

*/