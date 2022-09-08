document.addEventListener('DOMContentLoaded', () => {
  const irisLeft = document.querySelector('div.iris-left')
  const irisRight = document.querySelector('div.iris-right')
  let interval = null

  const startInterval = function() {
    clearInterval(interval)
    interval = setInterval(() => {
      const x = Math.random() * window.innerWidth
      const y = Math.random() * window.innerHeight
      moveEye(irisLeft, x, y)
      moveEye(irisRight, x, y)
    }, 3000)
  }

  const moveEye = function(tag, mouseX, mouseY) {
    // center of eye 
    const eyeMidX = tag.getBoundingClientRect().left
    const eyeMidY = tag.getBoundingClientRect().top

    // eye & mouse diff
    const diffX = mouseX - eyeMidX
    const diffY = mouseY - eyeMidY - window.pageYOffset

    // Pythagorean theorem
    const diff = Math.sqrt(Math.pow(diffX, 2) + Math.pow(diffY, 2))

    //capped radius
    const radius = Math.min(3, diff)

    // tan
    const angle = Math.atan2(diffY, diffX)

    // capped version 
    const cappedX = radius * Math.cos(angle)
    const cappedY = radius * Math.sin(angle)

    const eyeTag = tag.querySelector('div')
    eyeTag.style.left = cappedX + 'px'
    eyeTag.style.top = cappedY + 'px'
  }

  startInterval()

  document.addEventListener('mousemove', (e) => {
    moveEye(irisLeft, e.pageX, e.pageY)
    moveEye(irisRight, e.pageX, e.pageY)
  })

})