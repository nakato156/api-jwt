# API-JWT
Este es una API que permite crear y validar Json Web Tokens de form rápida y fácil, puede ser integrada en cualquier aplicación.

## Uso
Para usar esta API se necesita estar registrado en el sitio de [Full-apis](https://full-apis.herokuapp.com/), al momento del registro se le proporciona un token válido por 8 horas.

Tanto para generar o verificar el JWT se hacer una peticion HTTP y se necessita especificar en el *Header* el `x-access-token`., donde irá su token proporcionado 

Al momento de verificar el token se necesita especificar en el cuerpo de la petición los siguientes campos:

- `token_` : El token a verificar.
- `secret_` : Clave *salt* con que fue creado el token.

Para generar el JWT se tiene que especificar los siguientes campos en el cuerpo de la petición:
- `Id` : Un ID para el token
- `exp` : Tiempo de expiración del token, tiene que estar especificado en un formato de fecha.
- `secret` : Clave para generar el token.

## Contribuir
Si deseas contribuir en esta pequeña API, eres bienvenido en hacerlo, solo clona el ropositorio y envia una solicitud y con mucho gusto la revisaré, si deseas un tiempo extra para porbar la API me puedes contactar y te lo daré.