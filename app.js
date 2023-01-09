const els = document.querySelectorAll('.fade-left');

const options = {
  root: null,
  rootMargin: '0px',
  threshold: 0.3
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