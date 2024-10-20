document.addEventListener("DOMContentLoaded", function () {
    const modal = document.getElementById("infoModal");
    const whatIsThisLink = document.getElementById("whatIsThis");
    const closeModal = document.getElementById("closeModal");

    // Show modal when "What is this?" is clicked
    whatIsThisLink.addEventListener("click", function (event) {
        event.preventDefault(); // Prevent the default link behavior
        modal.style.display = "block"; // Show the modal
    });

    // Close modal when close button is clicked
    closeModal.addEventListener("click", function () {
        modal.style.display = "none"; // Hide the modal
    });

    // Close modal when clicking outside of modal content
    window.addEventListener("click", function (event) {
        if (event.target === modal) {
            modal.style.display = "none"; // Hide the modal
        }
    });
});
document.addEventListener("DOMContentLoaded", () => {
    const modal = document.getElementById("infoModal");
    const closeModal = document.getElementById("closeModal");
    const whatIsThisLink = document.getElementById("whatIsThis");

    whatIsThisLink.addEventListener("click", (event) => {
        event.preventDefault();
        modal.style.display = "block";
        document.body.classList.add("modal-open"); // Prevent body scroll
    });

    closeModal.addEventListener("click", () => {
        modal.style.display = "none";
        document.body.classList.remove("modal-open"); // Re-enable body scroll
    });

    window.addEventListener("click", (event) => {
        if (event.target == modal) {
            modal.style.display = "none";
            document.body.classList.remove("modal-open"); // Re-enable body scroll
        }
    });
});app.post('/your-endpoint', (req, res) => {
    // Handle form submission here
});
