document.addEventListener("DOMContentLoaded", () => {
    const actionBtn = document.getElementById("action-btn");

    actionBtn.addEventListener("click", () => {
        document.getElementById("message").textContent =
            "Button clicked! This is part of my Git practice.";
    });
});