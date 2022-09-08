document.addEventListener('DOMContentLoaded', () => {

  const pages = [
  { copy: "a Brooklyn-based graphic designer", 
    background: "#edc7a9",
    circle: "#3e78ed" 
  },
  { copy: "Kanye West's biggest fan",
    background: "#a1fffe",
    circle: "#e34a47" 
  },
  { copy: "looking for a job at the start of October", 
    background: "#d3c7f3",
    circle: "#f7fe00"
  },
  { copy: "letting you <a href='pdf.pdf'>download her PDF</a>",
    background: "#faffb8",
    circle: "#b472e6"
  }
  ]

  let pageNumber = 0
  const nextTag = document.querySelector('footer img.next')
  const prevTag = document.querySelector('footer img.prev')
  const randomTag = document.querySelector('footer img.random')

  const outputTag = document.querySelector('h2')
  const circleTag = document.querySelector('section div.circle')
  const bodyTag = document.querySelector('body')

  nextTag.addEventListener('click', () => next())
  prevTag.addEventListener('click', () => previous())
  randomTag.addEventListener('click', () => random())

  const next = function() {
    pageNumber += 1 
    if ( pageNumber > pages.length - 1) pageNumber = 0
    updateSection()
  }

  const previous = () => {
    pageNumber -= 1
    if (pageNumber < 0) pageNumber = pages.length - 1
    updateSection()
  }

  const random = () => {
    pageNumber = Math.floor(Math.random() * pages.length)
    updateSection()
  }

  function updateSection() {
    outputTag.innerHTML = pages[pageNumber].copy
    circleTag.style.backgroundColor = pages[pageNumber].circle
    bodyTag.style.backgroundColor = pages[pageNumber].background
  }

  document.addEventListener('keyup', (e) => {
    if (e.key === 'ArrowLeft') {
      previous()
    } else if (e.key === 'ArrowRight') {
      next()
    }
  })

})