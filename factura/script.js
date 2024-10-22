document.addEventListener("DOMContentLoaded", () => {
    const calcularBtn = document.getElementById("calcularTotal");
    const inputCantidad = document.getElementById("cantidad");
    const inputPrecio = document.getElementById("precio");
    const inputTotal = document.getElementById("total");

    calcularBtn.addEventListener("click", () => {
        const cantidad = parseFloat(inputCantidad.value);
        const precio = parseFloat(inputPrecio.value);

        if (!isNaN(cantidad) && !isNaN(precio)) {
            const total = (cantidad * precio).toFixed(2);
            inputTotal.value = `$${total}`;
        } else {
            alert("Por favor, ingrese valores válidos.");
        }   
    });
});
