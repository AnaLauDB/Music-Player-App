# 🎵 Reproductor de Música Web

Este proyecto es un reproductor de música simple hecho con **HTML**, **CSS** y **JavaScript**. Permite reproducir, pausar, avanzar, retroceder, eliminar y mezclar canciones de una playlist visualmente atractiva.

## 🚀 Características

- Reproducir, pausar, avanzar y retroceder canciones
- Mezclar (shuffle) la playlist
- Eliminar canciones de la lista
- Visualización de carátula, título y artista
- Interfaz responsiva y amigable

## 📂 Estructura del Proyecto

```
/Reproductor Musica
│
├── index.html         # Estructura principal de la app
├── style.css          # Estilos personalizados
├── script.js          # Lógica de la aplicación
└── README.md          # Documentación del proyecto
```

## 🛠️ Instalación y Uso

1. **Clona el repositorio:**
   ```bash
   git clone https://github.com/AnaLauDB/Music-Player-App
   ```
2. **Abre la carpeta en tu editor favorito (VS Code recomendado).**
3. **Abre `index.html` en tu navegador.**

## 📄 Documentación del Código

### HTML (`index.html`)

- Estructura principal del reproductor y la playlist.
- Uso de SVG para los íconos de control.
- Imagen de carátula de álbum.

### CSS (`style.css`)

- Variables CSS para colores y fuentes.
- Diseño responsivo.
- Uso de Flexbox para centrar y distribuir elementos.

### JavaScript (`script.js`)

- Manejo de la playlist y controles de reproducción.
- Funciones para reproducir, pausar, avanzar, retroceder, mezclar y eliminar canciones.
- Actualización dinámica de la interfaz.

## 📝 Comentarios de Documentación en el Código

### Ejemplo en JavaScript

````javascript
/// Clase principal para el manejo del reproductor de música.
/// 
/// - [allSongs]: Lista de canciones disponibles.
/// - [userData]: Estado actual del usuario y la canción.
/// - [playSong(id)]: Reproduce la canción con el id dado.
/// - [pauseSong()]: Pausa la canción actual.
/// - [playNextSong()]: Reproduce la siguiente canción.
/// - [playPreviousSong()]: Reproduce la canción anterior.
/// - [shuffle()]: Mezcla el orden de la playlist.
/// - [deleteSong(id)]: Elimina una canción de la playlist.
````

/* 
 * Estilos principales para el reproductor de música.
 * 
 * Variables:
 * --primary-color: Color principal para textos.
 * --app-background-color: Fondo general de la app.
 * 
 * Clases:
 * .player-content: Contenedor principal del reproductor.
 * .player-buttons: Controles de reproducción.
 */

/*
  Reproductor de Música Web
  =========================
  Estructura principal de la aplicación.
  - player-album-art: Muestra la carátula del álbum.
  - player-buttons: Controles de reproducción.
  - playlist: Lista de canciones.
*/

### Referencias
* freeCodeCamp Music Player Assets
* MDN Web Docs - Flexbox
* Dartdoc Style Guide