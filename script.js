// Mobile Menu Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

if (hamburger) {
    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        hamburger.classList.toggle('active');
    });
}

// Close menu when nav link is clicked
const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        hamburger.classList.remove('active');
    });
});

// Active nav link on scroll
window.addEventListener('scroll', () => {
    let current = '';
    const sections = document.querySelectorAll('section');

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
});

// Intersection Observer for fade-in animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all cards and sections for animation
document.querySelectorAll('.card, .film-item, .blog-post').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
    observer.observe(el);
});

// Form Submission
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(contactForm);
        
        // Show confirmation (you can integrate with email service)
        const submitBtn = contactForm.querySelector('.submit-button');
        const originalText = submitBtn.textContent;
        
        submitBtn.textContent = 'Message Sent';
        submitBtn.style.opacity = '0.5';
        submitBtn.disabled = true;
        
        // Reset form
        contactForm.reset();
        
        // Reset button after 2 seconds
        setTimeout(() => {
            submitBtn.textContent = originalText;
            submitBtn.style.opacity = '1';
            submitBtn.disabled = false;
        }, 2000);
    });
}

// Parallax effect on hero
window.addEventListener('scroll', () => {
    const hero = document.querySelector('.hero');
    const scrolled = window.pageYOffset;
    
    if (hero) {
        hero.style.backgroundPosition = `0px ${scrolled * 0.5}px`;
    }
});

/* ===== SECURITY FEATURES ===== */

// Disable right-click context menu on images
document.querySelectorAll('img').forEach(img => {
    img.addEventListener('contextmenu', (e) => {
        e.preventDefault();
        return false;
    });
    
    // Disable drag and drop
    img.addEventListener('dragstart', (e) => {
        e.preventDefault();
        return false;
    });
    
    // Disable pointer events for dragging
    img.addEventListener('mousedown', (e) => {
        if (e.button === 1 || e.button === 2) {
            e.preventDefault();
            return false;
        }
    });
});

// Prevent image copying and selection
document.addEventListener('copy', (e) => {
    if (e.target.tagName === 'IMG') {
        e.preventDefault();
        return false;
    }
});

// Disable right-click globally and show warning
document.addEventListener('contextmenu', (e) => {
    if (e.target.tagName === 'IMG' || e.target.closest('img')) {
        e.preventDefault();
        console.warn('Image protection: copying is disabled');
        return false;
    }
});

// Sanitize form input to prevent XSS
function sanitizeInput(input) {
    const textarea = document.createElement('textarea');
    textarea.textContent = input;
    return textarea.innerHTML;
}

// Enhanced form submission with sanitization
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Get and sanitize form inputs
        const nameInput = contactForm.querySelector('input[placeholder="Your Name"]');
        const emailInput = contactForm.querySelector('input[placeholder="Your Email"]');
        const messageInput = contactForm.querySelector('textarea');
        
        // Sanitize values
        const sanitizedName = sanitizeInput(nameInput.value);
        const sanitizedEmail = emailInput.value; // Email is safer
        const sanitizedMessage = sanitizeInput(messageInput.value);
        
        // Validate email format
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(sanitizedEmail)) {
            alert('Please enter a valid email');
            return;
        }
        
        // Validate input lengths
        if (sanitizedName.length > 100 || sanitizedMessage.length > 5000) {
            alert('Input exceeds maximum length');
            return;
        }
        
        // Show confirmation
        const submitBtn = contactForm.querySelector('.submit-button');
        const originalText = submitBtn.textContent;
        
        submitBtn.textContent = 'Message Sent';
        submitBtn.style.opacity = '0.5';
        submitBtn.disabled = true;
        
        // Reset form
        contactForm.reset();
        
        // Reset button after 2 seconds
        setTimeout(() => {
            submitBtn.textContent = originalText;
            submitBtn.style.opacity = '1';
            submitBtn.disabled = false;
        }, 2000);
    });
}

// Disable text selection on protected content
document.querySelectorAll('img, .social-icon').forEach(el => {
    el.addEventListener('selectstart', (e) => {
        e.preventDefault();
        return false;
    });
});

// Prevent opening images in new tab via middle-click
document.addEventListener('auxclick', (e) => {
    if (e.target.tagName === 'IMG') {
        e.preventDefault();
        return false;
    }
});

// Monitor for injected content and remove suspicious elements
const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
        if (mutation.addedNodes.length) {
            mutation.addedNodes.forEach((node) => {
                if (node.nodeType === 1) { // Element node
                    // Remove script tags
                    const scripts = node.querySelectorAll('script');
                    scripts.forEach(script => script.remove());
                    
                    // Remove event handlers
                    if (node.hasAttributes()) {
                        Array.from(node.attributes).forEach(attr => {
                            if (attr.name.startsWith('on')) {
                                node.removeAttribute(attr.name);
                            }
                        });
                    }
                }
            });
        }
    });
});

// Start monitoring for XSS attempts
observer.observe(document.body, {
    childList: true,
    subtree: true,
    attributes: true,
    attributeFilter: ['onclick', 'onload', 'onerror', 'onmouseover']
});
    }
});

// Add smooth transitions to all interactive elements
document.addEventListener('DOMContentLoaded', () => {
    // Fade in page on load
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease-in';
    
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});

// Keyboard navigation for accessibility
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && navMenu.classList.contains('active')) {
        navMenu.classList.remove('active');
        hamburger.classList.remove('active');
    }
});

// Smooth scroll polyfill for older browsers
if (!('scrollBehavior' in document.documentElement.style)) {
    document.addEventListener('click', (e) => {
        if (e.target.matches('a[href^="#"]')) {
            const target = document.querySelector(e.target.getAttribute('href'));
            if (target) {
                e.preventDefault();
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        }
    });
}

// Performance optimization: Lazy load images if needed
const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const img = entry.target;
            if (img.dataset.src) {
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
            }
            observer.unobserve(img);
        }
    });
});

document.querySelectorAll('img[data-src]').forEach(img => {
    imageObserver.observe(img);
});
