# Ghibli Movies

Éste proyecto está generado con [Angular CLI](https://github.com/angular/angular-cli) version 13.1.2.

Para construir el proyecto, primero instala las dependencias de Node con el comando `npm install`.

## Development server

Ejecuta `ng serve` para correr el servidor de desarrollo y navega a `http://localhost:4200/`.

## Build

Ejecuta `ng build` para construir el proyecto. Éste se construirá en el direcrtorio `dist/`.

## Unit tests

Escribe `ng test` para ejecutar las pruebas unitarias.

## Sobre el proyecto

El proyecto es sobre las películas que han hecho el Estudio Ghibli por lo que utilicé un diseño muy visual, tanto al sitio como al resultado de las búsquedas.

Mi principal reto fué la implementación de la sugerencia de búsqueda como autocompletado, mi solución fué crear un observable al input para poder suscribirme, utilicé un debounceTime de 0.3s para retrasar un poco la búsqueda en cada tecla apretada para evitar la saturación del proceso de búsqueda.

La parte que creo que necesita mejorar es en cuanto la ubicación del componente de búsqueda, preferiría que estuviera más integrado al sitio para mejorar el acceso a ésta utilidad y mejoraría el filtrado de las películas por palabras.

Traté de mantener la arquitectura agrupada en módulos (páginas, Componentes compartidos). Toda la funcionalidad con la Data recibida de la API está centralizada en el servicio para que pueda ser mantenida y consumida fácilmente.







