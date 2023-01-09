const els = document.querySelectorAll('.fade-right, .fade-left, .img-scale');
console.log(els)
const options = {
  root: null,
  rootMargin: '0px',
  threshold: 0.2
}

const cb = (entries) => {
  entries.forEach(entry => {
    if(entry.isIntersecting) {
     entry.target.classList.add('active');
    } else {
      entry.target.classList.remove('active');
    }
  });
}

let observer = new IntersectionObserver(cb, options);

els.forEach(el => {
  observer.observe(el);
});