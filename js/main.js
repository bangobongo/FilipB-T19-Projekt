const scroller = document.getElementById('scroller');

scroller.addEventListener('click', () => {
  window.scrollTo({
    top: 1450,
    left: 0,
    behavior: 'smooth'
  });
});
