# Music Player App

Aplicación web de música construida con **React + Vite**, enfocada en una experiencia visual tipo dashboard con estilo pixel art, navegación lateral, búsqueda, secciones destacadas y un mini reproductor.

## Vista general

Este proyecto simula una plataforma de exploración musical con una interfaz moderna, responsiva y orientada a distintos tamaños de pantalla.

## Características

- Interfaz principal tipo dashboard
- Header responsive con buscador y acciones de usuario
- Hero section con presentación visual
- Sidebar con navegación por secciones
- Secciones de contenido para:
  - playlists destacadas
  - artistas
  - canciones en tendencia
- Mini player con controles visuales
- Estilos modulares con CSS Modules
- Diseño adaptable para móvil, tablet y desktop

## Tecnologías utilizadas

- **React**
- **Vite**
- **CSS Modules**
- **JavaScript**
- **HTML5**
- **Responsive Design**

## Estructura general

```bash
client/
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── common/
│   │   ├── layout/
│   │   ├── player/
│   │   └── sections/
│   ├── layouts/
│   ├── styles/
│   └── main.jsx
├── public/
└── package.json
```

## Instalación

### 1. Clonar el repositorio

```bash
git clone https://github.com/AnaLauDB/Music-Player-App.git
cd Music-Player-App/client
```

### 2. Instalar dependencias

```bash
npm install
```

### 3. Ejecutar el proyecto en desarrollo

```bash
npm run dev
```

### 4. Generar build de producción

```bash
npm run build
```

### 5. Previsualizar el build

```bash
npm run preview
```

## Scripts disponibles

- `npm run dev` — inicia el entorno de desarrollo
- `npm run build` — genera la versión de producción
- `npm run preview` — previsualiza el build localmente

## Diseño responsivo

La interfaz fue ajustada para adaptarse a diferentes resoluciones mediante:

- contenedores fluidos
- layouts flexibles
- media queries
- reacomodo de elementos en pantallas pequeñas
- escalado de espacios y componentes sin alterar el estilo visual

## Objetivo del proyecto

El objetivo principal es crear una experiencia visual atractiva para explorar música, manteniendo una identidad estética pixel art y una estructura fácil de navegar en cualquier dispositivo.

## Autor

**AnaLauDB**
