document.addEventListener('DOMContentLoaded', () => {
  const sections = document.querySelectorAll('section')
  const bodyTag = document.querySelector('body')

  const addMovement = function () {
    const topViewpoint = window.pageYOffset
    const midViewpoint = topViewpoint + (window.innerHeight / 2)
    
    sections.forEach((s, i) => {
      const topSect = s.offsetTop
      const midSect = topSect + (s.offsetHeight / 2)
      const distanceToSection = midViewpoint - midSect

      const image = s.querySelector('img')
      const content = s.querySelector('div')

      let rotation = distanceToSection / 100
      let contentDist = -1 * distanceToSection / 2

      if (i % 2 == 1) { rotation = rotation * -1 }

      image.style.transform = `rotate(${rotation}deg)`
      content.style.top = `${contentDist}px`
      content.style.transform = `rotate(${-1 * rotation}deg)`

      if (distanceToSection > -100) { 
        bodyTag.style.backgroundColor = s.getAttribute('data-background')
      }
    })

  }

  addMovement()

  document.addEventListener('scroll', () => addMovement())
  window.addEventListener('resize', () => addMovement())
})