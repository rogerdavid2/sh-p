document.addEventListener('DOMContentLoaded', () => {
  const headerTag = document.querySelector('header')

  document.addEventListener('scroll', () => {
    const pixels = window.pageYOffset
    pixels > 100 ? headerTag.classList.add('scrolled') : headerTag.classList.remove('scrolled')
  })
})