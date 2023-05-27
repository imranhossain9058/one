let sections = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('header nav a');


window.onscroll = () =>{
  sections.forEach(sec =>{
    let top =window.scrollY;
    let offset = sec.offsetTop -150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');
    if(top >= offset && top <offset + height){
      navlinks.forEach(links => {
        links.classList.remove('active');
        document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
      });

    };

  });
};


ScrollReveal({ 
  reset: true,
  distance:'80px',
  duratio: 1000,
  dalay:300
 });
 ScrollReveal().reveal('.homedata, .heading', { origin: 'top' });
 ScrollReveal().reveal('.homeimg, .servicedata, .protfoliobox, .contrac form', { origin: 'bottom' });
 ScrollReveal().reveal('.homedata h1, .aboutimg ', { origin: 'left' });
 ScrollReveal().reveal('.homedata p, .aboutdata ', { origin: 'right' });



 var typed = new Typed('#love', {
  strings: ['Web  Developer', 'Accountiant'],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop: true
});