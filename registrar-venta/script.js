document.addEventListener("DOMContentLoaded", () => {
    const enlaces = document.querySelectorAll("nav a");

    // Cambia la clase activa al hacer clic en los enlaces
    enlaces.forEach(enlace => {
        enlace.addEventListener("click", (e) => {
            enlaces.forEach(link => link.classList.remove("activo"));
            e.target.classList.add("activo");
        });
    });

    // Cambia el fondo del input al enfocarlo
    const inputs = document.querySelectorAll("input");
    inputs.forEach(input => {
        input.addEventListener("focus", () => {
            input.style.backgroundColor = "#e8f0fe";
        });
        input.addEventListener("blur", () => {
            input.style.backgroundColor = "white";
        });
    });
});
