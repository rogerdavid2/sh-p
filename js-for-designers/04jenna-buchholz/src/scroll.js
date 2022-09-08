document.addEventListener('DOMContentLoaded', () =>{

  const pixelTag = document.querySelector('div.pixel')
  const bodyTag = document.querySelector('body')
  const progressTag = document.querySelector('div.progress')
  const sections = document.querySelectorAll('section')
  const clientTag = document.querySelector('div.client')
  const pageTag = document.querySelector('div.page')
  const headerTag = document.querySelector('header')

  document.addEventListener('scroll', () => {
    const pixels = window.pageYOffset
    pixelTag.innerHTML = pixels
    progressBar(pixels)
    clientAndPageUpdate(pixels)
    parallaxEffect(pixels)
  })

  function progressBar(pixels) {
    const pageHeight = bodyTag.getBoundingClientRect().height
    const totalScrollDistance = pageHeight - window.innerHeight
    const percentage = pixels/totalScrollDistance * 100
    progressTag.style.width = `${percentage}%`
  }

  function clientAndPageUpdate(pixels) {
    sections.forEach( s => {
      if (s.offsetTop - 100 <= pixels) {
        clientTag.innerHTML = s.getAttribute('data-client')
        pageTag.innerHTML = s.getAttribute('data-page')
        if (s.hasAttribute("data-dark")) {
          headerTag.classList.add("white")
          progressTag.classList.add("white")
        } else {
          headerTag.classList.remove("white")
          progressTag.classList.remove("white")
        }
      }
    })
  }

  function parallaxEffect(pixels) {
    const midViewport = pixels + (window.innerHeight / 2)
    sections.forEach(s => {
      const topSection = s.offsetTop
      const midSection = topSection + (s.offsetHeight / 2)
      const distanceToSection = midViewport - midSection
      const parallaxTags = s.querySelectorAll('[data-parallax]')
      parallaxTags.forEach(tag => {
        const speed = parseFloat(tag.getAttribute('data-parallax'))
        tag.style.transform = `translate(0, ${distanceToSection * speed}px)`
      })
    })
  }

})