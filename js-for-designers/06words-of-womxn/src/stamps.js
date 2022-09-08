document.addEventListener('DOMContentLoaded', () => {
  let number = 0 
  const stamps = [
    "assets/stamps/circles.svg",
    "assets/stamps/shooting-star.svg",
    "assets/stamps/heart.svg",
    "assets/stamps/moon.svg",    
    "assets/stamps/rainbow.svg",
    "assets/stamps/waves.svg"  
  ]

  const stampsTag = document.querySelector('div.stamps')

  const addStamp = function(x,y) {
    const img = document.createElement('img')
    img.setAttribute('src', stamps[number])
    img.style.left = (x - window.innerWidth / 2) + 'px'
    img.style.top = y + 'px'
    stampsTag.appendChild(img)
    const audio = document.createElement('audio')
    audio.setAttribute('src', 'assets/audio/plop.mp3')
    audio.play()
    number+=1
    if (number > stamps.length -1) number = 0
  }

  document.addEventListener('click', (e) => {
    addStamp(e.pageX, e.pageY)
  })
})