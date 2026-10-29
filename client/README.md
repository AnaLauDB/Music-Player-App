# Music Player App

Aplicación web de música construida con **React + Vite**, con una interfaz tipo dashboard y estética pixel art. Permite explorar canciones, artistas, álbumes y playlists, buscar en tiempo real y reproducir pistas con un reproductor persistente estilo tocadiscos.

## Vista general

El proyecto simula una plataforma de exploración musical con un diseño modular, responsivo y orientado a distintos tamaños de pantalla. La aplicación sigue una arquitectura cliente/servidor: el cliente React consume un API propio que, a su vez, integra la API de Deezer, normaliza sus respuestas y expone los datos a la interfaz. El estado global se gestiona con Redux Toolkit y la reproducción de audio se centraliza en un único gestor (`AudioManager`) compartido por todos los componentes.

## Características

- **Buscador global** — búsqueda de canciones y artistas bajo demanda, al enviar el formulario.
- **Arquitectura cliente/servidor** — el cliente React y el API Node.js viven en carpetas separadas y se comunican por HTTP.
- **Integración con Deezer** — chart, búsqueda y detalle de artistas, álbumes y playlists desde el servidor.
- **Capa de API con adaptadores** — el servidor normaliza los datos de Deezer a un formato interno estable para desacoplar la UI del proveedor externo.
- **Reproductor persistente** — arquitectura `NowPlaying` + `MiniPlayer` sobre un único `AudioManager`, con controles, progreso, aguja, vinilo y estado de reproducción.
- **Gestión de estado global** — slices de `music`, `search`, `player` y `app` (tema, carga y errores), con hooks tipados para `dispatch` y `selectors`.
- **Tema claro/oscuro** — conmutable desde el header mediante `ThemeToggle`.
- **Layout persistente** — header, sidebar, footer y reproductor fuera del flujo de la página.
- **Sidebar de navegación** — secciones construidas a partir de datos declarativos.
- **Secciones de contenido** — hero, playlists destacadas, artistas y canciones en tendencia.
- **Estados de carga y vacío** — skeletons, loaders y `EmptyState` reutilizables.
- **CSS Modules** — estilos encapsulados por componente, con tokens y estilos globales.
- **Responsive** — adaptado a móvil, tablet y escritorio.

## Tecnologías utilizadas

- **React 19**
- **Vite 8**
- **Node.js 18+** — servidor HTTP con módulos nativos
- **Redux Toolkit** + **React Redux** — estado global
- **React Router DOM 7** — navegación
- **React Hook Form** — formularios
- **Axios** — cliente HTTP
- **React Icons** — iconografía
- **clsx** — composición condicional de clases
- **CSS Modules**
- **JavaScript (ES6+)**
- **ESLint** — linting

## Estructura del proyecto

```bash
Music-Player-App/
├── client/                       # Aplicación React + Vite
│   ├── public/
│   ├── src/
│   │   ├── api/                  # Cliente HTTP del API propio
│   │   │   ├── client/           # Instancia de Axios
│   │   │   ├── endpoints/        # Rutas del API interno
│   │   │   └── musicApi.js       # Acceso a música
│   │   ├── assets/               # Imágenes, iconos y animaciones
│   │   ├── audio/                # AudioManager
│   │   ├── components/
│   │   │   ├── common/
│   │   │   ├── layout/           # Header, Sidebar, Footer
│   │   │   ├── player/           # MiniPlayer, NowPlaying
│   │   │   └── sections/         # Playlists, artistas, tendencias, búsqueda
│   │   ├── hooks/
│   │   ├── layouts/
│   │   ├── pages/
│   │   ├── providers/
│   │   ├── redux/
│   │   ├── routes/
│   │   ├── styles/
│   │   ├── utils/
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── eslint.config.js
│   ├── index.html
│   ├── package.json
│   └── vite.config.js
├── server/                       # API Node.js
│   ├── src/
│   │   ├── adapters/             # Normalización de Deezer
│   │   ├── config/               # Entorno y cliente Deezer
│   │   ├── constants/            # Endpoints de Deezer
│   │   ├── controllers/          # Controladores HTTP
│   │   ├── lib/                  # Router nativo
│   │   ├── middleware/           # Manejo de errores
│   │   ├── routes/               # Rutas /api
│   │   ├── services/             # Lógica de negocio
│   │   ├── utils/                # Helpers de búsqueda
│   │   ├── app.js
│   │   └── index.js
│   ├── .env.example
│   └── package.json
├── scripts/
│   └── dev.mjs                   # Arranca cliente y servidor juntos
└── package.json
```

## Arquitectura

### Estado global

El store se organiza por dominio, y cada módulo sigue la misma estructura: estado inicial, selectores, thunks y slice.

| Dominio  | Responsabilidad                             |
| -------- | ------------------------------------------- |
| `music`  | Chart, artistas y playlists destacados      |
| `search` | Consulta, resultados, carga y error         |
| `player` | Pista actual, cola y estado de reproducción |
| `app`    | Tema, indicador de carga y errores globales |

### Reproducción de audio

La reproducción no vive en los componentes, sino en `src/audio/AudioManager.js`, un gestor único al que se accede mediante `AudioProvider` y el hook `useAudio`. Esto permite que el `MiniPlayer` y `NowPlaying` compartan el mismo `<audio>` y el mismo estado, sin duplicar la lógica de reproducción.

### Integración con la API

El cliente nunca llama directamente a Deezer. `axiosClient` usa `baseURL: "/api"` y en desarrollo Vite redirige `/api` al servidor Node.js en `http://localhost:5000` (ver `vite.config.js`).

El servidor expone las rutas `/api/music/*`, consulta Deezer, normaliza la respuesta con sus adaptadores y devuelve un formato interno estable. Así, cambiar de proveedor externo solo afecta a `server/src`, no a los componentes de React.

Rutas principales:

| Método | Ruta                               | Descripción                            |
| ------ | ---------------------------------- | -------------------------------------- |
| GET    | `/api/health`                      | Estado del servidor                    |
| GET    | `/api/music/chart`                 | Chart de canciones, artistas y listas  |
| GET    | `/api/music/search?q=`             | Búsqueda completa con intención        |
| GET    | `/api/music/search/tracks?q=`      | Búsqueda de canciones                  |
| GET    | `/api/music/search/artists?q=`     | Búsqueda de artistas                   |
| GET    | `/api/music/search/albums?q=`      | Búsqueda de álbumes                    |
| GET    | `/api/music/search/playlists?q=`   | Búsqueda de playlists                  |
| GET    | `/api/music/artists/:id`           | Detalle de artista                     |
| GET    | `/api/music/artists/:id/overview`  | Artista, top tracks, álbumes y listas  |
| GET    | `/api/music/albums/:id`            | Detalle de álbum                       |
| GET    | `/api/music/playlists/:id`         | Detalle de playlist                    |

> **Alcance actual de la búsqueda:** la búsqueda cubre canciones, artistas, álbumes y playlists. Deezer solo admite `artist:` como filtro de campo en `/search`; por eso el servidor usa los endpoints dedicados `/search/track`, `/search/artist`, `/search/album` y `/search/playlist`.

## Instalación

### 1. Clonar el repositorio

```bash
git clone https://github.com/AnaLauDB/Music-Player-App.git
cd Music-Player-App
```

### 2. Instalar dependencias del cliente

```bash
npm --prefix client install
```

El servidor usa únicamente módulos nativos de Node.js, así que no necesita dependencias externas.

### 3. Ejecutar cliente y servidor juntos

```bash
npm run dev
```

La aplicación queda disponible en `http://localhost:5173` y el API en `http://localhost:5000/api`.

Si prefieres ejecutarlos por separado:

```bash
npm run dev:server
npm run dev:client
```

### Variables de entorno

- `client/.env.example`: define `VITE_API_URL=/api`.
- `server/.env.example`: define `PORT`, `DEEZER_API_URL` y `CLIENT_ORIGIN`.

El servidor funciona con valores por defecto aunque no exista `server/.env`.

## Scripts disponibles

| Script                | Descripción                                      |
| --------------------- | ------------------------------------------------ |
| `npm run dev`         | Inicia cliente y servidor en paralelo            |
| `npm run dev:client`  | Inicia solo el cliente Vite                      |
| `npm run dev:server`  | Inicia solo el API Node.js                       |
| `npm run build`       | Genera el build optimizado del cliente           |
| `npm start`           | Inicia el servidor API                           |
| `npm run lint`        | Ejecuta ESLint sobre el cliente                  |

## Diseño responsivo

La interfaz se adapta a diferentes resoluciones mediante:

- contenedores fluidos y rejillas flexibles
- media queries en puntos de ruptura clave
- reordenamiento de elementos en pantallas pequeñas
- escalado proporcional de espaciados y tipografías
- sidebar y navegación adapted a cada tamaño de pantalla

## Objetivo del proyecto

Crear una experiencia visual atractiva y funcional para explorar música, con una identidad pixel art consistente, una arquitectura limpia y escalable, y una experiencia de usuario fluida en cualquier dispositivo.

## Autor

**[AnaLauDB](https://github.com/AnaLauDB)**
