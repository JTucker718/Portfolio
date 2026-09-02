document.addEventListener("DOMContentLoaded", () => {
    
    // --- 1. DOM INTERACTION (Show / Hide Details) ---
    const toggleButtons = document.querySelectorAll(".btn-toggle");

    toggleButtons.forEach(button => {
        button.addEventListener("click", () => {
            const targetId = button.getAttribute("data-target");
            const detailsElement = document.getElementById(targetId);

            if (detailsElement) {
                const isHidden = detailsElement.classList.toggle("hidden");

                if (isHidden) {
                    button.textContent = "Read More";
                    button.setAttribute("aria-expanded", "false");
                } else {
                    button.textContent = "Show Less";
                    button.setAttribute("aria-expanded", "true");
                }
            }
        });
    });


    // --- 2. FORM VALIDATION (Contact Form) ---
    const form = document.getElementById("contact-form");
    if (!form) return;

    const nameInput = document.getElementById("full-name");
    const emailInput = document.getElementById("email-address");
    const messageInput = document.getElementById("message-text");
    
    const errorSummary = document.getElementById("error-summary");
    const errorList = document.getElementById("error-list");

    if (nameInput) {
        nameInput.addEventListener("input", () => clearFieldError(nameInput, "name-error"));
    }
    if (emailInput) {
        emailInput.addEventListener("input", () => clearFieldError(emailInput, "email-error"));
    }
    if (messageInput) {
        messageInput.addEventListener("input", () => clearFieldError(messageInput, "message-error"));
    }

    form.addEventListener("submit", (e) => {
        e.preventDefault();
        
        errorList.innerHTML = "";
        errorSummary.style.display = "none";
        clearFieldError(nameInput, "name-error");
        clearFieldError(emailInput, "email-error");
        clearFieldError(messageInput, "message-error");

        const errors = [];

        if (!nameInput.value.trim()) {
            showFieldError(nameInput, "name-error", "Please enter your full name.");
            errors.push({ id: "full-name", msg: "Full Name is required." });
        }

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailInput.value.trim()) {
            showFieldError(emailInput, "email-error", "Please enter your email address.");
            errors.push({ id: "email-address", msg: "Email Address is required." });
        } else if (!emailPattern.test(emailInput.value.trim())) {
            showFieldError(emailInput, "email-error", "Please enter a valid email address.");
            errors.push({ id: "email-address", msg: "A valid email address is required." });
        }

        if (!messageInput.value.trim()) {
            showFieldError(messageInput, "message-error", "Please enter a message.");
            errors.push({ id: "message-text", msg: "Message field cannot be left blank." });
        }

        if (errors.length > 0) {
            errors.forEach(err => {
                const li = document.createElement("li");
                const a = document.createElement("a");
                a.href = `#${err.id}`;
                a.textContent = err.msg;
                a.addEventListener("click", (e) => {
                    e.preventDefault();
                    document.getElementById(err.id).focus();
                });
                li.appendChild(a);
                errorList.appendChild(li);
            });

            errorSummary.style.display = "block";
            errorSummary.focus();
        } else {
            alert("Thank you! Your message has been sent successfully.");
            form.reset();
        }
    });

    function showFieldError(input, errorId, message) {
        input.classList.add("input-error");
        const errorEl = document.getElementById(errorId);
        if (errorEl) errorEl.textContent = message;
    }

    function clearFieldError(input, errorId) {
        if (!input) return;
        input.classList.remove("input-error");
        const errorEl = document.getElementById(errorId);
        if (errorEl) errorEl.textContent = "";
        
        if (errorList && errorList.children.length === 0) {
            errorSummary.style.display = "none";
        }
    }
});