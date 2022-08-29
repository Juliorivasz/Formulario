export const valida = (input)=>{
    const tipoDeInput = input.dataset.tipo;
    if(validaciones[tipoDeInput]){
        validaciones[tipoDeInput](input);
    }
    const inputPadre = input.parentElement;
    if(input.validity.valid){
        inputPadre.classList.remove('input-container--invalid');
        inputPadre.querySelector('.input-message-error').innerHTML = '';
    }else{
        inputPadre.classList.add('input-container--invalid');
        inputPadre.querySelector('.input-message-error').innerHTML = mostrarMensajeDeError(tipoDeInput,input);
    }
}

const tipoDeErrores = [
    'valueMissing',
    'typeMismatch',
    'patternMismatch',
    'customError'
];

const mensajes = {
    nombre: {
        valueMissing: 'Este campo no puede estar vacio'
    },
    email: {
        valueMissing: 'Este campo no puede estar vacio',
        typeMismatch: 'El correo no es valido'
    },
    password: {
        valueMissing: 'Este campo no puede estar vacio',
        patternMismatch: '6 a 12 caracteres, almenos una letra mayuscula, minuscula, un numero y no puede contener caracteres especiales'
    },
    nacimiento: {
        valueMissing: 'Este campo no puede estar vacio',
        customError: 'tener al menos 18 años de edad'
    },
    telefono: {
        valueMissing: 'Este campo no puede estar vacio',
        patternMismatch: 'maximo 10 numeros'
    },
    direccion: {
        valueMissing: 'Este campo no puede estar vacio',
        patternMismatch: 'minimo 10 caracteres maximo 40'
    },
    ciudad: {
        valueMissing: 'Este campo no puede estar vacio',
        patternMismatch: 'minimo 4 caracteres maximo 30'
    },
    estado: {
        valueMissing: 'Este campo no puede estar vacio',
        patternMismatch: 'minimo 4 caracteres maximo 30'
    }
}

const validaciones = {
    nacimiento: (input) => validarNacimiento(input),
}

const mostrarMensajeDeError = (tipoDeInput,input) => {
    let mensaje = '';

    tipoDeErrores.forEach(error => {
        if(input.validity[error]){
            mensaje = mensajes[tipoDeInput][error];
        }
    })
    return mensaje;
}

const validarNacimiento = (input) => {
    const fechaCliente = new Date(input.value);
    let mensaje = '';
    if(!mayorDeEdad(fechaCliente)){
        mensaje = 'tener al menos 18 años de edad';
    }
    input.setCustomValidity(mensaje);
}

const mayorDeEdad = (fecha) => {
    const fechaActual = new Date();
    const diferenciaFechas = new Date(fecha.getUTCFullYear() + 18, fecha.getUTCMonth(), fecha.getUTCDate());
    return diferenciaFechas <= fechaActual;
}

