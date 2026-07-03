# Pokédex Angular

Aplicación desarrollada en Angular 19 que consume la PokéAPI y muestra un listado de Pokémon con su información de detalle.

## Tecnologías utilizadas

- Angular 19
- TypeScript
- RxJS (switchMap, forkJoin, map, catchError)
- HttpClient
- PokéAPI

## Estructura del proyecto

src/app/
├── features/
│   └── pokemon/
│       ├── components/
│       │   └── pokemon-card/
│       │       ├── pokemon-card.component.ts
│       │       ├── pokemon-card.component.html
│       │       └── pokemon-card.component.scss
│       ├── models/
│       │   └── pokemon.model.ts
│       ├── pages/
│       │   └── pokemon-list/
│       │       ├── pokemon-list.component.ts
│       │       ├── pokemon-list.component.html
│       │       └── pokemon-list.component.scss
│       ├── services/
│       │   └── pokemon.service.ts
│       └── pokemon.module.ts
├── app.component.ts
├── app.component.html
├── app.component.scss
└── app.module.ts
## Cómo ejecutar el proyecto

### Requisitos previos

- Node.js
- Angular CLI

### Instalación

Clona el repositorio:

```bash
git clone https://github.com/jefzt/NOMBRE-DEL-REPOSITORIO.git
```

Instala las dependencias:

```bash
npm install
```

Inicia el servidor de desarrollo:

```bash
ng serve
```

Abre el navegador en `http://localhost:4200`

## Funcionalidades

- Listado de 20 Pokémon consumidos desde la PokéAPI
- Tarjetas con imagen, nombre, tipos, altura, peso, experiencia base y habilidad
- Barras de estadísticas por Pokémon
- Estado de carga mientras se obtienen los datos
- Estado de error con opción de reintentar
- Diseño estilo Pokédex
