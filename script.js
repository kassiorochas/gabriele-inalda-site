// ARQUIVO: script.js

document.addEventListener('DOMContentLoaded', () => {
    // 1. Scroll suave para links do menu
    document.querySelectorAll('nav a[href^="#"]').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault(); // Previne o comportamento padrão do link

            const targetId = this.getAttribute('href'); // Obtém o ID do destino (ex: "#sobre")
            const destino = document.querySelector(targetId); // Seleciona o elemento de destino

            if (destino) {
                // Rola suavemente até o elemento de destino
                destino.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // 2. Animação ao aparecer as seções (usando Intersection Observer)
    const sections = document.querySelectorAll('section'); // Seleciona todas as seções

    const observerOptions = {
        root: null, // O viewport é o elemento raiz
        rootMargin: '0px', // Nenhuma margem extra
        threshold: 0.1 // A seção será observada quando 10% dela estiver visível
    };

    const observer = new IntersectionObserver((entries, observerInstance) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Se a seção está visível, adiciona a classe 'mostrar'
                entry.target.classList.add('mostrar');
                // Remove a observação da seção para que a animação não se repita
                observerInstance.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Começa a observar cada seção
    sections.forEach(section => {
        observer.observe(section);
    });

    // Opcional: Log para o botão do WhatsApp (apenas para depuração/tracking, o link já funciona)
    const whatsappButton = document.querySelector('.btn-whatsapp');
    if (whatsappButton) {
        whatsappButton.addEventListener('click', () => {
            console.log("Usuário clicou no botão do WhatsApp.");
        });
    }
});