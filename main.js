/*  abre e fecha o menu quando clicar no ícone: hambúrguer e x */
const nav = document.querySelector('#header nav') // seleciona o nav
const toggle = document.querySelectorAll('nav .toggle') // seleciona o ícone hambúrguer

for (const element of toggle) { // para cada ícone hambúrguer
  element.addEventListener('click', function () { // adiciona um evento de click
    nav.classList.toggle('show') // toggle do menu
  }) // fim do evento click
} // fim do for

/* quando clicar em um item do menu, esconder o menu */
const links = document.querySelectorAll('nav ul li a') // seleciona todos os links

for (const link of links) { // para cada link
  link.addEventListener('click', function () { // adiciona um evento de click
    nav.classList.remove('show') // remove o menu
  }) // fim do evento click
} // fim do for

/* mudar o header da página quando der scroll */
const header = document.querySelector('#header') // seleciona o header
const navHeight = header.offsetHeight // altura do header
function changeHeaderWhenScroll() { // quando der scroll
  if (window.scrollY >= navHeight) { // se o scroll for maior que a altura do header
    // scroll é maior que a altura do header
    header.classList.add('scroll') // adiciona a classe scroll ao header
  } else { // se o scroll for menor que a altura do header
    // menor que a altura do header
    header.classList.remove('scroll') // remove a classe scroll ao header
  } // fim do if
} // fim do changeHeaderWhenScroll

/* Testimonials carousel slider swiper */
const swiper = new Swiper('.swiper-container', { // seleciona o container do carousel
  slidesPerView: 1, // quantidade de slides por viewport
  pagination: { // paginação
    el: '.swiper-pagination' // seleciona o elemento de paginação
  }, // fim da paginação
  mousewheel: true, // roda o carousel com o scroll do mouse
  keyboard: true, // roda o carousel com o teclado
  breakpoints: { // breakpoints
    767: { // quando a largura for menor que 767px
      slidesPerView: 2, // quantidade de slides por viewport
      setWrapperSize: true, // define o tamanho do wrapper
    } // fim do breakpoint
  } // fim do breakpoints
}) // fim do swiper

/* ScrollReveal: Mostrar elementos quando der scroll na página */
const scrollReveal = ScrollReveal({ // cria um novo objeto do ScrollReveal
  origin: 'top', // origem do scroll
  distance: '30px', // distância do scroll
  duration: 700, // duração do scroll
  reset: true // reseta o scroll
}) // fim do ScrollReveal

scrollReveal.reveal( // mostra o elemento com a classe .reveal-left
  `#home .image, #home .text,
    #about .image, #about .text,
    #services header, #services .card,
    #testimonials header, #testimonials .testimonials
    #contact .text, #contact .links,
    footer .brand, footer .social
    `,
  { interval: 100 } // intervalo de 100ms
) // fim do reveal

/* Botão voltar para o topo */
const backToTopButton = document.querySelector('.back-to-top') // seleciona o botão
function backToTop() { // quando clicar no botão
  if (window.scrollY >= 560) { // se o scroll for maior que 560px
    // scroll é maior que 500px
    backToTopButton.classList.add('show') // adiciona a classe show ao botão
  } else { // se o scroll for menor que 560px
    // menor que 500px
    backToTopButton.classList.remove('show') // remove a classe show ao botão
  } // fim do if
} // fim do backToTop

/* Menu ativo conforme a seção visível na página */
const sections = document.querySelectorAll('main section[id]') // seleciona todas as seções
function activeMenuAtCurrentSection() { // quando clicar no botão
  const checkpoint = window.pageYOffset + (window.innerHeight / 8) * 4 // checkpoint
  for (const section of sections) { // para cada seção
    const sectionTop = section.offsetTop // topo da seção
    const sectionHeight = section.offsetHeight // altura da seção
    const sectionId = section.getAttribute('id') // id da seção

    const checkpointStart = checkpoint >= sectionTop // checkpoint inicial
    const checkpointEnd = checkpoint <= sectionTop + sectionHeight // checkpoint final

    if (checkpointStart && checkpointEnd) { // se o checkpoint estiver entre o topo e o topo + a altura da seção
      document // document
        .querySelector('nav ul li a[href*=' + sectionId + ']') // seleciona o link com o id da seção
        .classList.add('active') // adiciona a classe active ao link
    } else { // se o checkpoint não estiver entre o topo e o topo + a altura da seção
      document // document
        .querySelector('nav ul li a[href*=' + sectionId + ']') // seleciona o link com o id da seção
        .classList.remove('active') // remove a classe active ao link
    } // fim do if
  } // fim do for
} // fim do activeMenuAtCurrentSection

/* When Scroll */
window.addEventListener('scroll', function () { // quando der scroll
  changeHeaderWhenScroll() // chama a função changeHeaderWhenScroll
  backToTop() // chama a função backToTop
  activeMenuAtCurrentSection() // chama a função activeMenuAtCurrentSection
}) // fim do scroll