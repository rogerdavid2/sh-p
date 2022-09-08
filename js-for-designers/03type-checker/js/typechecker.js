document.addEventListener('DOMContentLoaded', () => {

    const sentenceTag = document.querySelector(`input[type="text"]`)
    const outputTag = document.querySelector('textarea.output')
    const ogText = outputTag.value

    const typesizeTag = document.querySelector(`input[name="typesize"]`)
    const typesizeOutput = document.querySelector('span.typesize-output')

    const lineheightTag = document.querySelector(`input[name="lineheight"]`)
    const lineheightOutput = document.querySelector('span.lineheight-output')

    const fontweightTag = document.querySelector(`input[name="fontweight"]`)
    const fontweightOutput = document.querySelector('span.fontweight-output')

    const italicTag = document.querySelector(`input[name="italic"]`)

    const typefaceTag = document.querySelector(`select[name="typeface"]`)

    const colorTags = document.querySelectorAll('div.colors div')

    //change the display sentence 
    sentenceTag.addEventListener('keyup', function () {
        if (this.value) {
            outputTag.value = this.value;
        } else {
            outputTag.value = ogText;
        }
    })

    outputTag.addEventListener('keyup', function () {
        sentenceTag.value = this.value
    })

    // change the type size 
    typesizeTag.addEventListener('input', (e) => {
        outputTag.style.fontSize = e.target.value + 'px'
        typesizeOutput.innerHTML = e.target.value + 'px'
    })

    //change the leading
    lineheightTag.addEventListener('input', (e) => {
        outputTag.style.lineHeight = e.target.value
        lineheightOutput.innerHTML = e.target.value
    })

    //change font weight
    fontweightTag.addEventListener('input', (e) => {
        outputTag.style.fontWeight = e.target.value
        fontweightOutput.innerHTML = e.target.value
    })

    // make it italic
    italicTag.addEventListener('change', (e) => {
        (e.target.checked ? outputTag.style.fontStyle = 'italic' : outputTag.style.fontStyle = 'normal')
    })

    //change the typeface
    typefaceTag.addEventListener('input', (e) => {
        outputTag.style.fontFamily = e.target.value
    })

    //change output colors
    colorTags.forEach(tag => {
        tag.addEventListener('click', (e) => {
            outputTag.style.backgroundColor = e.target.style.backgroundColor
            outputTag.style.color = e.target.style.color
            colorTags.forEach(t => t.classList.remove("selected"))
            e.target.classList.add("selected")
        })
    })

})
