
    // Tuition Calculator
    const calcBtn = document.getElementById("calc-btn");
    const result = document.getElementById("calc-result");

    calcBtn?.addEventListener("click", () => {
        const num = document.getElementById("tuition-calc").value;
        if (!num || num <= 0) {
            result.textContent = "Please enter a valid number of children.";
            return;
        }
        const averageFee = 9000;
        result.textContent = `Estimated Total Tuition: $${num * averageFee}`;
    });

    // Admission Form Submission (demo)
    document.getElementById("admission-form")?.addEventListener("submit", e => {
        e.preventDefault();
        document.getElementById("form-feedback").textContent = "Application submitted successfully!";
    });

    // Virtual Tour Booking (demo)
    document.getElementById("book-tour")?.addEventListener("click", () => {
        const date = document.getElementById("tour-date").value;
        document.getElementById("tour-feedback").textContent = date 
            ? `Tour booked for ${date}.` 
            : "Please select a date.";
    });

    // FAQ Accordion
    document.querySelectorAll(".faq-header").forEach(header => {
        header.addEventListener("click", () => {
            const content = header.nextElementSibling;
            content.style.display = content.style.display === "block" ? "none" : "block";
        });
    });


    
    const backToTop = document.getElementById('backToTop');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            backToTop.style.display = 'flex';
        } else {
            backToTop.style.display = 'none';
        }
    });

    backToTop.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

