jQuery(function($) {
  $.i18n().load( {
    'en': 'src/translations/en.json',
    'es': 'src/translations/es.json'
  }).done(function() {
    
    const lang = localStorage.getItem('lang');

    if(lang !== null){
      document.body.classList.add(`${lang}`);
      $.i18n().locale = lang;
      document.documentElement.setAttribute("lang", lang);

      $('body').i18n();

    } else {
      const lang = 'en';
      document.body.classList.add(`${lang}`);
      $.i18n().locale = lang;

      document.documentElement.setAttribute("lang", lang);

      $('body').i18n();
    }

  });
});


/* Language toggle - Switch between EN and ES */ 
const langToggles = document.querySelectorAll('.language-toggle');

langToggles.forEach(toggle => {

  toggle.addEventListener('click', (e) => {
  
    // Check if the clicked language is equal to the existing HTML lang
    if(e.target.hasAttribute('data-locale') 
    && e.target.dataset.locale !== document.documentElement.getAttribute("lang") ){
      const langCode = e.target.getAttribute("lang");
      document.documentElement.setAttribute("lang", langCode);
      
      document.body.classList = '';
      document.body.classList.add(`${langCode}`);

      localStorage.setItem('lang', langCode)

      $.i18n().locale = langCode;

      $('body').i18n();
    }

    e.preventDefault();

  });
})

/* Smooth Scroll */
document.querySelector('.scroll-down').addEventListener('click', function(e){
  const heroHeight = window.innerHeight + 150;
  window.scrollBy(0, heroHeight);

  e.preventDefault();
});


/* Add & Remove header classes depending on scroll */
let observer = new IntersectionObserver(entries => {
  console.log(entries);
  if (entries[0].boundingClientRect.y < 0) {
    document.querySelector('.header').classList.add('scrolled');
    document.querySelector('.back-to-top').classList.add('visible');
  } else {
    document.querySelector('.header').classList.remove('scrolled');
    document.querySelector('.back-to-top').classList.remove('visible');
  }
  });
  observer.observe(document.querySelector("#pixel-to-watch"));


