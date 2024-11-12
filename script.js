// script.js

document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("signupForm");
    const emailInput = document.getElementById("email");
    const successMessage = document.getElementById("successMessage");

    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent page refresh on form submit
        
        const email = emailInput.value.trim();

        if (validateEmail(email)) {
            saveEmailToLocalStorage(email);
            emailInput.value = ""; // Clear the input
            successMessage.classList.remove("hidden"); // Show success message

            setTimeout(() => {
                successMessage.classList.add("hidden"); // Hide success message after 3 seconds
            }, 3000);
        } else {
            alert("Please enter a valid email address.");
        }
    });

    function validateEmail(email) {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailPattern.test(email);
    }

    function saveEmailToLocalStorage(email) {
        let emails = JSON.parse(localStorage.getItem("waitingListEmails")) || [];
        if (!emails.includes(email)) {
            emails.push(email);
            localStorage.setItem("waitingListEmails", JSON.stringify(emails));
            console.log("Email saved to waiting list:", email);
        } else {
            alert("This email is already on the waiting list.");
        }
    }
});
