const els = document.querySelectorAll('.fade-right, .fade-left, .img-scale');

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


const menuButton = document.querySelector('.menu');
const menuWrapper = document.getElementById('menu_wrapper')

menuButton.addEventListener("click", function(){
  
  menuButton.classList.toggle('clicked')

  if(menuButton.classList.contains('clicked')){
  
    menuButton.innerText = 'Close'
  } else {
   
    menuButton.innerText = 'Menu'
  }
  menuWrapper.classList.toggle('show')
})

