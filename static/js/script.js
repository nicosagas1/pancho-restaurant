// Función para abrir WhatsApp con mensaje prellenado
function openWhatsApp(product) {
    const message = `Hola me llamo ________, me gustaria hacerte un pedido de ${product}`;
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/5491159231455?text=${encodedMessage}`;
    
    // Abrir WhatsApp en nueva ventana
    window.open(whatsappUrl, '_blank');
}

// Función para scroll suave
function smoothScrollTo(target) {
    const element = document.querySelector(target);
    if (element) {
        element.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}

// Función para agregar efectos de scroll
function addScrollEffects() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observar elementos para animaciones
    const animatedElements = document.querySelectorAll('.product-card, .footer-section');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
}

// Función para agregar efecto de parallax al hero
function addParallaxEffect() {
    const hero = document.querySelector('.hero');
    if (hero) {
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            const rate = scrolled * -0.5;
            hero.style.transform = `translateY(${rate}px)`;
        });
    }
}

// Función para agregar efecto de entrada rápida al título del hero
function addQuickEntranceEffect() {
    const titleElement = document.querySelector('.hero-text h2');
    const subtitleElement = document.querySelector('.hero-text p');
    
    if (titleElement) {
        // El efecto CSS ya maneja la animación, solo agregamos un pequeño delay
        titleElement.style.animationDelay = '0.1s';
    }
    
    if (subtitleElement) {
        subtitleElement.style.animationDelay = '0.4s';
    }
}

// Función para agregar contador de productos
function addProductCounter() {
    const productCards = document.querySelectorAll('.product-card');
    productCards.forEach((card, index) => {
        card.style.animationDelay = `${index * 0.2}s`;
        card.classList.add('fade-in-up');
    });
}

// Función para agregar efecto de hover mejorado a los botones
function enhanceButtonEffects() {
    const buttons = document.querySelectorAll('.order-btn');
    buttons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-3px) scale(1.05)';
        });
        
        button.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
}

// Función para precargar imagen del hero
function preloadHeroImage() {
    const heroImage = document.querySelector('.hero-image img');
    if (heroImage && !heroImage.complete) {
        const img = new Image();
        img.onload = function() {
            heroImage.style.opacity = '1';
            const placeholder = document.querySelector('.hero-image .image-placeholder');
            if (placeholder) {
                placeholder.style.display = 'none';
            }
        };
        img.onerror = function() {
            const placeholder = document.querySelector('.hero-image .image-placeholder');
            if (placeholder) {
                placeholder.style.display = 'none';
            }
            heroImage.style.display = 'none';
        };
        img.src = heroImage.src;
    } else if (heroImage && heroImage.complete) {
        // Si ya está cargada, asegurar que sea visible
        heroImage.style.opacity = '1';
    }
}

// Función para precargar imágenes de productos
function preloadProductImages() {
    const productImages = document.querySelectorAll('.product-image img');
    productImages.forEach((img, index) => {
        if (!img.complete) {
            const preloadImg = new Image();
            preloadImg.onload = function() {
                img.style.opacity = '1';
                const placeholder = img.previousElementSibling;
                if (placeholder && placeholder.classList.contains('image-placeholder')) {
                    placeholder.style.display = 'none';
                }
            };
            preloadImg.onerror = function() {
                const placeholder = img.previousElementSibling;
                if (placeholder && placeholder.classList.contains('image-placeholder')) {
                    placeholder.style.display = 'none';
                }
                img.style.display = 'none';
            };
            preloadImg.src = img.src;
        } else {
            // Si ya está cargada, asegurar que sea visible
            img.style.opacity = '1';
        }
    });
}

// Función para precargar imagen del footer
function preloadFooterImage() {
    const footerImage = document.querySelector('.footer-image img');
    if (footerImage && !footerImage.complete) {
        const img = new Image();
        img.onload = function() {
            footerImage.style.opacity = '0.9';
            const placeholder = document.querySelector('.footer-image .image-placeholder');
            if (placeholder) {
                placeholder.style.display = 'none';
            }
        };
        img.onerror = function() {
            const placeholder = document.querySelector('.footer-image .image-placeholder');
            if (placeholder) {
                placeholder.style.display = 'none';
            }
            footerImage.style.display = 'none';
        };
        img.src = footerImage.src;
    } else if (footerImage && footerImage.complete) {
        // Si ya está cargada, asegurar que sea visible
        footerImage.style.opacity = '0.9';
    }
}

// Función para agregar efecto de loading a las imágenes
function addImageLoadingEffect() {
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        // Solo aplicar efecto si la imagen no está ya cargada
        if (img.complete && img.naturalHeight !== 0) {
            img.style.opacity = '1';
            img.style.transform = 'scale(1)';
        } else {
            img.addEventListener('load', function() {
                this.style.opacity = '1';
                this.style.transform = 'scale(1)';
            });
            
            // Establecer estado inicial solo si no está cargada
            img.style.opacity = '0';
            img.style.transform = 'scale(0.9)';
            img.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        }
    });
}

// Función para agregar efecto de partículas al hero
function addParticleEffect() {
    const hero = document.querySelector('.hero');
    if (hero) {
        // Crear partículas flotantes
        for (let i = 0; i < 20; i++) {
            const particle = document.createElement('div');
            particle.className = 'particle';
            particle.style.cssText = `
                position: absolute;
                width: 4px;
                height: 4px;
                background: rgba(255, 255, 255, 0.3);
                border-radius: 50%;
                left: ${Math.random() * 100}%;
                top: ${Math.random() * 100}%;
                animation: float ${3 + Math.random() * 4}s infinite ease-in-out;
                animation-delay: ${Math.random() * 2}s;
            `;
            hero.appendChild(particle);
        }
        
        // Agregar CSS para la animación de partículas
        const style = document.createElement('style');
        style.textContent = `
            @keyframes float {
                0%, 100% { transform: translateY(0px) rotate(0deg); }
                50% { transform: translateY(-20px) rotate(180deg); }
            }
        `;
        document.head.appendChild(style);
    }
}


// Función para agregar notificaciones toast
function showToast(message, type = 'success') {
    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;
    toast.textContent = message;
    toast.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${type === 'success' ? '#25d366' : '#ff6b35'};
        color: white;
        padding: 1rem 2rem;
        border-radius: 10px;
        box-shadow: 0 5px 15px rgba(0,0,0,0.2);
        z-index: 10000;
        transform: translateX(100%);
        transition: transform 0.3s ease;
    `;
    
    document.body.appendChild(toast);
    
    // Animar entrada
    setTimeout(() => {
        toast.style.transform = 'translateX(0)';
    }, 100);
    
    // Remover después de 3 segundos
    setTimeout(() => {
        toast.style.transform = 'translateX(100%)';
        setTimeout(() => {
            document.body.removeChild(toast);
        }, 300);
    }, 3000);
}

// Función para agregar efecto de loading al hacer clic en botones
function addLoadingEffect() {
    const buttons = document.querySelectorAll('.order-btn');
    buttons.forEach(button => {
        button.addEventListener('click', function() {
            const originalText = this.innerHTML;
            this.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Procesando...';
            this.disabled = true;
            
            setTimeout(() => {
                this.innerHTML = originalText;
                this.disabled = false;
                showToast('¡Redirigiendo a WhatsApp!', 'success');
            }, 1500);
        });
    });
}

// Función principal de inicialización
function init() {
    // Esperar a que el DOM esté completamente cargado
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
        return;
    }
    
    // Inicializar todas las funcionalidades
    addScrollEffects();
    addParallaxEffect();
    addQuickEntranceEffect();
    addProductCounter();
    enhanceButtonEffects();
    addImageLoadingEffect();
    preloadHeroImage();
    preloadProductImages();
    preloadFooterImage();
    addParticleEffect();
    addLoadingEffect();
    
    // Agregar evento de scroll para el header
    window.addEventListener('scroll', () => {
        const header = document.querySelector('.header');
        if (window.scrollY > 100) {
            header.style.background = 'rgba(255, 107, 53, 0.95)';
            header.style.backdropFilter = 'blur(10px)';
        } else {
            header.style.background = 'linear-gradient(135deg, #ff6b35, #f7931e)';
            header.style.backdropFilter = 'none';
        }
    });
    
    console.log('🚀 Pancho Restaurant - Sitio web cargado correctamente');
    console.log('📱 Optimizado para dispositivos móviles y desktop');
    console.log('⚡ Todas las imágenes y efectos cargados');
}

// Inicializar la aplicación
init();
