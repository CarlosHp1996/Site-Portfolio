// Script para controlar o menu móvel
document.addEventListener('DOMContentLoaded', function() {
    const header = document.getElementById('header');
    const menuToggle = document.getElementById('menu-toggle');
    const mainNav = document.getElementById('main-nav');
    const backToTop = document.getElementById('backToTop');
    const menuLinks = document.querySelectorAll('.menu-list a');
    
    // Adicionar classe ao header quando rolar a página
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
            backToTop.classList.add('visible');
        } else {
            header.classList.remove('scrolled');
            backToTop.classList.remove('visible');
        }
    });
    
    // Abrir/fechar menu mobile
    menuToggle.addEventListener('click', function() {
        mainNav.classList.toggle('active');
        
        // Muda o ícone do botão de menu
        const icon = menuToggle.querySelector('i');
        if (mainNav.classList.contains('active')) {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-times');
        } else {
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
    });
    
    // Fechar menu ao clicar em um link (no mobile)
    menuLinks.forEach(link => {
        link.addEventListener('click', function() {
            mainNav.classList.remove('active');
            const icon = menuToggle.querySelector('i');
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        });
    });
    
    // Adicionar animação de fade-in nos elementos quando aparecem na tela
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1
    });
    
    // Selecionar elementos para animar
    const animElements = document.querySelectorAll('.section-title, .about-grid, .project-card, .timeline-item, .gallery-item, .contact-container');
    
    animElements.forEach(element => {
        observer.observe(element);
    });
    
    // Validação simples do formulário de contato
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;
            
            if (name.trim() === '' || email.trim() === '' || message.trim() === '') {
                alert('Por favor, preencha todos os campos obrigatórios.');
                return false;
            }
            
            // Aqui você adicionaria o código para enviar o formulário para seu backend
            // Por enquanto, apenas exibe uma mensagem de sucesso
            alert('Mensagem enviada com sucesso! Em breve entraremos em contato.');
            contactForm.reset();
        });
    }
});