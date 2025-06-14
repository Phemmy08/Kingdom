document.addEventListener('DOMContentLoaded', function() {
    // Timeline Animation
    const timelineItems = document.querySelectorAll('.timeline-item');
    
    const observerOptions = {
        threshold: 0.5
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    timelineItems.forEach(item => {
        observer.observe(item);
    });

    // Counter Animation
    const counters = document.querySelectorAll('.counter');
    
    counters.forEach(counter => {
        const target = parseInt(counter.getAttribute('data-target'));
        const duration = 2000; // 2 seconds
        const step = target / (duration / 16); // 60fps
        let current = 0;

        const updateCounter = () => {
            current += step;
            if (current < target) {
                counter.textContent = Math.floor(current);
                requestAnimationFrame(updateCounter);
            } else {
                counter.textContent = target;
            }
        };

        const counterObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    updateCounter();
                    counterObserver.unobserve(entry.target);
                }
            });
        }, observerOptions);

        counterObserver.observe(counter);
    });

    // Team Member Bio Modals
    const teamMembers = document.querySelectorAll('.team-member');
    
    teamMembers.forEach(member => {
        member.addEventListener('click', () => {
            const bio = member.getAttribute('data-bio');
            const name = member.querySelector('h3').textContent;
            
            const modal = document.createElement('div');
            modal.className = 'modal';
            modal.innerHTML = `
                <div class="modal-content">
                    <span class="close">&times;</span>
                    <h2>${name}</h2>
                    <p>${bio}</p>
                </div>
            `;
            
            document.body.appendChild(modal);
            
            const closeBtn = modal.querySelector('.close');
            closeBtn.onclick = () => {
                modal.remove();
            };
            
            modal.onclick = (e) => {
                if (e.target === modal) {
                    modal.remove();
                }
            };
        });
    });

    // Virtual Tour Navigation
    const tourButtons = document.querySelectorAll('.tour-btn');
    const tourView = document.querySelector('.tour-view');
    
    tourButtons.forEach(button => {
        button.addEventListener('click', () => {
            const location = button.getAttribute('data-location');
            // Here you would typically load the virtual tour content
            // For now, we'll just show a placeholder
            tourView.innerHTML = `<div class="tour-placeholder">Virtual tour of ${location} coming soon...</div>`;
            
            // Update active button
            tourButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
        });
    });

    // Back to Top Button
    const backToTopButton = document.getElementById('backToTop');
    
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            backToTopButton.style.display = 'flex';
        } else {
            backToTopButton.style.display = 'none';
        }
    });
    
    backToTopButton.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});