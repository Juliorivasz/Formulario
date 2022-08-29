import { valida } from "./validaciones.js";

// blur cuando quite el foco del input
const inputs = document.querySelectorAll("input");
inputs.forEach(input => {
    input.addEventListener('blur', (input) => {
        valida(input.target);
    })
})
