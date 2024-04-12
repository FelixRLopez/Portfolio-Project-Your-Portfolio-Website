function updateScrollTop() {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    document.body.classList.remove("scroll-top");
  }
  else {
    document.body.classList.add("scroll-top");
  }
}

window.addEventListener('load', function() {
  updateScrollTop()
}, false);

window.addEventListener('scroll', function() {
  updateScrollTop()
}, false);