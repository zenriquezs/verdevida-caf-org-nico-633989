
      document.addEventListener('DOMContentLoaded', function() {
        // Lazy loading para imágenes
        const images = document.querySelectorAll('img[data-src]');
        const imageObserver = new IntersectionObserver((entries, observer) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              const img = entry.target;
              img.src = img.dataset.src;
              img.removeAttribute('data-src');
              observer.unobserve(img);
            }
          });
        });
        images.forEach(img => imageObserver.observe(img));
        
        // Analytics básico
        if (typeof gtag !== 'undefined') {
          gtag('config', 'GA_MEASUREMENT_ID');
        }
      });
    