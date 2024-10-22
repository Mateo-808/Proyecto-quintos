document.addEventListener("DOMContentLoaded", () => {
    document.body.style.background = "linear-gradient(135deg, #dfe6e9, #ecf0f1)";

    const enlaces = document.querySelectorAll("nav a");

    enlaces.forEach(enlace => {
        enlace.addEventListener("click", (e) => {
            enlaces.forEach(link => link.classList.remove("activo"));
            e.target.classList.add("activo");
        });
    });
});
