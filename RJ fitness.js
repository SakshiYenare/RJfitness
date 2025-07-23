function showSection(sectionId) {
    // Hide all sections
    document.querySelectorAll(".container").forEach((section) => {
        section.classList.add("hidden");
    });

    // Show the target section
    document.getElementById(sectionId).classList.remove("hidden");
}

// Show home on first load
document.addEventListener("DOMContentLoaded", () => {
    showSection("home");
});