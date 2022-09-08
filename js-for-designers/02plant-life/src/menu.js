document.addEventListener('DOMContentLoaded', () => {

  const toggleTag = document.querySelector('a.toggle')
  const mainTag = document.querySelector('main')

  toggleTag.addEventListener('click', () => {
    mainTag.classList.toggle("open")
    mainTag.classList.contains('open') ? toggleTag.innerHTML = `<img src="assets/images/close.svg"> CLOSE` : toggleTag.innerHTML = `<img src="assets/images/menu.svg"> MENU`
  })

})