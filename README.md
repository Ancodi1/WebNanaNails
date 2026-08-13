<div align="center">

# Nana Nails

Sitio web oficial de Nana Nails, un estudio de manicura y nail art en Carballo, A Coruña.

[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white)](https://developer.mozilla.org/es/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white)](https://developer.mozilla.org/es/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=111)](https://developer.mozilla.org/es/docs/Web/JavaScript)
[![Responsive](https://img.shields.io/badge/Dise%C3%B1o-responsive-5B161D?style=flat-square)](#características)

[Ver sitio web](https://ancodi1.github.io/WebNanaNails/) | [Reservar en Booksy](https://booksy.com/es-es/128568_nana-nails_salon-de-unas_60022_poligono-industrial-bertoa) | [Instagram](https://www.instagram.com/nananails_carballo/)

<img src="fotos/IMG_4346.jpeg" alt="Trabajo de manicura de Nana Nails" width="720">

</div>

## Sobre el proyecto

Nana Nails es una web estática de una sola página creada para presentar el salón, mostrar trabajos reales y facilitar la reserva de citas. La experiencia está pensada para funcionar de forma clara tanto en dispositivos móviles como en escritorio, sin frameworks ni proceso de compilación.

El sitio reúne la galería, las opiniones de clientes, la carta de servicios y precios, la ubicación del salón y accesos directos a Booksy e Instagram.

## Características

- Diseño editorial adaptable a móvil, tableta y escritorio.
- Hero audiovisual con imagen de respaldo y soporte para movimiento reducido.
- Galería de trabajos con fotografías reales del salón.
- Carta de servicios organizada en secciones desplegables.
- Reseñas verificadas y acceso directo al perfil de Booksy.
- Mapa integrado de Google Maps e información de contacto.
- Menú de navegación específico para dispositivos móviles.
- Metadatos para SEO, Open Graph y tarjetas de X/Twitter.
- Datos estructurados de Schema.org para el negocio, servicios y preguntas frecuentes.
- HTML semántico, carga diferida de imágenes y controles con atributos de accesibilidad.

## Tecnologías

| Tecnología | Uso |
| --- | --- |
| HTML5 | Estructura, contenido semántico y datos estructurados |
| CSS3 | Diseño, animaciones y adaptación responsive |
| JavaScript | Acordeones, menú móvil y año dinámico del footer |
| Google Fonts | Tipografías DM Sans e Instrument Serif |
| Google Maps | Ubicación integrada del salón |
| Booksy | Consulta de servicios y reserva de citas |

## Ejecución local

No es necesario instalar dependencias. Clona el repositorio y sirve sus archivos con cualquier servidor HTTP local:

```bash
git clone https://github.com/Ancodi1/WebNanaNails.git
cd WebNanaNails
python3 -m http.server 8000
```

Después abre `http://localhost:8000` en el navegador.

También puedes abrir `index.html` directamente, aunque un servidor local reproduce mejor el comportamiento que tendrá la web una vez publicada.

## Estructura

```text
WebNanaNails/
├── assets/       # Recursos gráficos adicionales
├── fotos/        # Fotografías utilizadas en la web
├── index.html    # Contenido, SEO y estructura principal
├── script.js     # Interacciones de la interfaz
├── styles.css    # Estilos y reglas responsive
└── robots.txt    # Instrucciones para buscadores
```

## Personalización

- El contenido, los servicios, los precios y los enlaces externos se encuentran en `index.html`.
- La paleta principal se puede modificar desde las variables declaradas al inicio de `styles.css`.
- Las imágenes de la galería están en `fotos/`; al sustituirlas, conserva las referencias y actualiza sus textos alternativos.
- Antes de publicar con un dominio propio, completa la URL del sitemap indicada en `robots.txt` y usa URL absolutas en las etiquetas sociales.
- Las cifras de reseñas y los precios son contenido manual; deben mantenerse sincronizados con Booksy.

## Despliegue

Al ser un proyecto completamente estático, puede publicarse en GitHub Pages, Netlify, Vercel o cualquier alojamiento web convencional.

Para desplegarlo con GitHub Pages:

1. Abre `Settings` en el repositorio de GitHub.
2. Entra en `Pages` dentro de la sección `Code and automation`.
3. Selecciona `Deploy from a branch`.
4. Elige la rama principal, la carpeta `/ (root)` y guarda los cambios.

## Créditos

- Fotografías del portfolio: Nana Nails.
- Video de portada servido desde [Pexels](https://www.pexels.com/).
- Tipografías distribuidas mediante [Google Fonts](https://fonts.google.com/).

## Licencia

Este repositorio no incluye actualmente una licencia de código abierto. El código y el material gráfico conservan todos sus derechos salvo que se indique lo contrario.
