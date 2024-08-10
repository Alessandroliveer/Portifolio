// Função para ajustar o layout para dispositivos móveis
function adjustForMobile() {
    const screenWidth = window.innerWidth;

    // Verifica se a largura da tela é menor que 768px (um padrão comum para dispositivos móveis)
    if (screenWidth < 768) {

        // Ajusta o tamanho da navegação
        const navMenu = document.getElementById("myNavMenu");
        navMenu.style.fontSize = "14px"; // Reduz o tamanho da fonte para caber melhor em telas pequenas

        // Ajusta o tamanho do cabeçalho ao rolar a página
        const navHeader = document.getElementById("header");
        navHeader.style.height = "60px";
        navHeader.style.lineHeight = "60px";

        // Ajusta o tamanho dos botões de navegação
        const footerButtons = document.querySelectorAll('footer article button');
        footerButtons.forEach(button => {
            button.style.padding = '0 10px 0 14px'; // Menos padding para caber melhor em telas pequenas
            button.style.fontSize = '14px'; // Reduz o tamanho da fonte
        });

        // Ajusta o tamanho das seções reveladas ao rolar
        const revealElements = document.querySelectorAll('.featured-text-card, .featured-name, .featured-text-info, .featured-text-btn, .social_icons, .featured-image, .project-box, .top-header, .about-info, .contact-info, .skills-box, .form-control');
        revealElements.forEach(element => {
            element.style.padding = '10px'; // Reduz o padding para que os elementos fiquem mais compactos
        });

        // Ajusta o container principal
        const containers = document.querySelectorAll('.container');
        containers.forEach(container => {
            container.style.maxWidth = '100%'; // Usar a largura total da tela em dispositivos móveis
            container.style.padding = '0 10px'; // Reduz o padding lateral
        });

        // Ajusta os ícones sociais
        const socialIcons = document.querySelector('.socials');
        socialIcons.style.gap = '16px'; // Reduz o espaçamento entre os ícones sociais
        socialIcons.style.fontSize = '16px'; // Reduz o tamanho dos ícones sociais
    }
}

// Chama a função ao carregar a página e ao redimensionar a janela
document.addEventListener('DOMContentLoaded', adjustForMobile);
w


/* ----- NAVIGATION BAR FUNCTION ----- */
function myMenuFunction(){
  var menuBtn = document.getElementById("myNavMenu");

  if(menuBtn.className === "nav-menu"){
    menuBtn.className += " responsive";
  } else {
    menuBtn.className = "nav-menu";
  }
}

/* ----- ADD SHADOW ON NAVIGATION BAR WHILE SCROLLING ----- */
window.onscroll = function() {headerShadow()};

function headerShadow() {
  const navHeader = document.getElementById("header");

  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
      navHeader.style.boxShadow = "0 1px 6px rgba(0, 0, 0, 0.1)";
      navHeader.style.height = "70px";
      navHeader.style.lineHeight = "70px";
  } else {
      navHeader.style.boxShadow = "none";
      navHeader.style.height = "90px";
      navHeader.style.lineHeight = "90px";
  }
}

/* ----- TYPING EFFECT ----- */
var typingEffect = new Typed(".typedText", {
  strings: ["Gestor de Trafego", "Programador"],
  loop: true,
  typeSpeed: 100,
  backSpeed: 80,
  backDelay: 2000
});

/* ----- ## -- SCROLL REVEAL ANIMATION -- ## ----- */
const sr = ScrollReveal({
  origin: 'top',
  distance: '80px',
  duration: 2000,
  reset: true
});

/* -- HOME -- */
sr.reveal('.featured-text-card', {});
sr.reveal('.featured-name', { delay: 100 });
sr.reveal('.featured-text-info', { delay: 200 });
sr.reveal('.featured-text-btn', { delay: 200 });
sr.reveal('.social_icons', { delay: 200 });
sr.reveal('.featured-image', { delay: 300 });

/* -- PROJECT BOX -- */
sr.reveal('.project-box', { interval: 200 });

/* -- HEADINGS -- */
sr.reveal('.top-header', {});

/* ----- ## -- SCROLL REVEAL LEFT_RIGHT ANIMATION -- ## ----- */

/* -- ABOUT INFO & CONTACT INFO -- */
const srLeft = ScrollReveal({
  origin: 'left',
  distance: '80px',
  duration: 2000,
  reset: true
});

srLeft.reveal('.about-info', { delay: 100 });
srLeft.reveal('.contact-info', { delay: 100 });

/* -- ABOUT SKILLS & FORM BOX -- */
const srRight = ScrollReveal({
  origin: 'right',
  distance: '80px',
  duration: 2000,
  reset: true
});

srRight.reveal('.skills-box', { delay: 100 });
srRight.reveal('.form-control', { delay: 100 });

/* ----- CHANGE ACTIVE LINK ----- */
const sections = document.querySelectorAll('section[id]');

function scrollActive() {
  const scrollY = window.scrollY;

  sections.forEach(current => {
      const sectionHeight = current.offsetHeight,
          sectionTop = current.offsetTop - 50,
          sectionId = current.getAttribute('id');

      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.add('active-link');
      } else {
          document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.remove('active-link');
      }
  });
}

window.addEventListener('scroll', scrollActive);

/* ----- FORM SUBMISSION ----- */
document.getElementById('contactForm').addEventListener('submit', function(event) {
  event.preventDefault();

  // Capturando valores dos campos
  const nome = document.querySelector('.input-field[name="nome"]').value;
  const email = document.querySelector('.input-field[name="email"]').value;
  const mensagem = document.querySelector('textarea[name="mensagem"]').value;

  // Enviando dados via POST usando fetch
  fetch('/contact', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: `nome=${encodeURIComponent(nome)}&email=${encodeURIComponent(email)}&mensagem=${encodeURIComponent(mensagem)}`
  }).then(response => {
      if (response.redirected) {
          // Redirecionar se a resposta for um redirecionamento
          window.location.href = response.url;
      } else {
          // Tratar resposta de erro
          response.text().then(text => {
              alert('Erro ao enviar mensagem: ' + text);
          });
      }
  }).catch(error => {
      console.error('Erro:', error);
      alert('Erro ao enviar mensagem. Por favor, tente novamente.');
  });
});

document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('contactForm');
  if (form) {
      form.addEventListener('submit', function(event) {
          alert('Formulário enviado com sucesso!');
      });
  }
});

/* ----- FOOTER FUNCTIONS ----- */

// Função para alterar o estilo do cabeçalho do artigo no footer
function styleFooterArticleHeader() {
  const footerHeaders = document.querySelectorAll('footer article h2');
  footerHeaders.forEach(header => {
      header.style.fontSize = '22px';
      header.style.fontWeight = '400';
      header.style.textAlign = 'center';
      header.style.color = 'rgb(255 255 255 / 90%)';
  });
}

// Função para estilizar os botões no footer
function styleFooterButtons() {
  const footerButtons = document.querySelectorAll('footer article button');
  footerButtons.forEach(button => {
      button.style.display = 'flex';
      button.style.alignItems = 'center';
      button.style.justifyContent = 'space-between';
      button.style.gap = '10px';
      button.style.padding = '0 20px 0 24px';
      button.style.background = '#121212';
      button.style.border = '0';
      button.style.borderRadius = '30px';
      button.style.whiteSpace = 'nowrap';
      button.style.color = '#f9f9f9';
      button.style.fontFamily = 'inherit';
      button.style.fontSize = '16px';
  });
}

// Função para estilizar as listas de links no footer
function styleFooterLinks() {
  const footerLinks = document.querySelectorAll('footer section ul li a');
  footerLinks.forEach(link => {
      link.style.display = 'block';
      link.style.marginBottom = '10px';
      link.style.color = 'rgb(255 255 255 / 90%)';
  });
}

// Função para estilizar os ícones sociais no footer
function styleSocialIcons() {
  const socialIcons = document.querySelector('.socials');
  socialIcons.style.position = 'absolute';
  socialIcons.style.left = '50%';
  socialIcons.style.bottom = '60px';
  socialIcons.style.transform = 'translate(-50%, 0)';
  socialIcons.style.display = 'flex';
  socialIcons.style.gap = '24px';
  socialIcons.style.fontSize = '20px';
  socialIcons.style.color = 'rgb(255 255 255 / 40%)';
}

// Função para centralizar o conteúdo dentro do container
function styleContainer() {
  const containers = document.querySelectorAll('.container');
  containers.forEach(container => {
      container.style.maxWidth = '800px';
      container.style.margin = '0 auto';
  });
}

// Chamada das funções ao carregar a página
document.addEventListener('DOMContentLoaded', function() {
  styleFooterArticleHeader();
  styleFooterButtons();
  styleFooterLinks();
  styleSocialIcons();
  styleContainer();
});
