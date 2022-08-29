Hemos visto que para enseñar mensajes de error podemos utilizar el atributo title. En JavaScript también es posible tratar los errores de validación utilizando la propiedad validity del input, como utilizamos en la validación customizada del campo “fecha de nacimiento”

¿Cómo adicionar un mensaje customizado de error para validaciones que no estén en los padrones de HTML?

input.setCustomValidity('Mensaje customizado de error')
Vamos a usar una función del input setCustomValidity() para definir un mensaje de error customizado
