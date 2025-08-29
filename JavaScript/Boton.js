document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".soat-button").forEach((btn) => {
        btn.type = "button";
        btn.addEventListener("click", () => {
            window.location.href = "SacarSoat.html";
        });
    });
});

document.getElementById('btnSacarSoat').addEventListener('click', () => {
        window.location.href = 'Soat.html';
});