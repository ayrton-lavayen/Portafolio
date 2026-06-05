# Portafolio Profesional 🚀

Este es el repositorio de mi portafolio web profesional, desarrollado con un enfoque moderno, minimalista, limpio y de alto impacto visual. El sitio está optimizado para una navegación fluida, diseño responsivo y animaciones interactivas premium.

---

## 🛠️ Tecnologías y Herramientas

El portafolio está construido utilizando las siguientes tecnologías de desarrollo frontend moderno:

1. **React 19:** Biblioteca principal para la construcción de la interfaz de usuario basada en componentes reutilizables y manejo del estado reactivo.
2. **Vite:** Herramienta de compilación ultra rápida que ofrece un entorno de desarrollo inmediato y builds optimizados para producción.
3. **Tailwind CSS v3:** Framework de estilos CSS basado en utilidades para maquetar de forma ágil, fluida y totalmente responsiva.
4. **Lucide React & Tabler Icons:** Sets de iconos vectoriales modernos que aportan consistencia visual a la interfaz.
5. **Spline 3D:** Integración interactiva de modelos 3D interactivos en tiempo real en la sección Hero.
6. **GitHub Actions:** Pipeline de CI/CD automatizado para construir y desplegar el sitio directamente en GitHub Pages con cada actualización en la rama principal.

---

## 📁 Estructura del Proyecto

El proyecto sigue una estructura limpia y fácil de escalar:

```text
Portafolio/
├── .github/workflows/    # Configuración de GitHub Actions para el despliegue automático
├── public/               # Recursos estáticos (Favicon, imágenes y assets locales)
│   ├── assets/           # Capturas y previsualizaciones de proyectos (.webp)
│   └── uploads/          # Logotipos y fotografías del sitio
├── src/
│   ├── assets/           # Gráficos importables directamente
│   ├── components/       # Componentes React de la interfaz de usuario:
│   │   ├── Header.jsx    # Barra de navegación responsive con drawer móvil
│   │   ├── Hero.jsx      # Introducción con tipografía animada e integración 3D
│   │   ├── Marquee.jsx   # Banner deslizante de texto infinito a baja velocidad
│   │   ├── Projects.jsx  # Galería de proyectos con paginación local
│   │   ├── ProjectModal.jsx # Sidebar lateral animado con detalles de cada proyecto
│   │   ├── Contact.jsx   # Enlaces directos a canales (WhatsApp, LinkedIn, Calendly)
│   │   └── Footer.jsx    # Pie de página centrado
│   ├── data/
│   │   └── projects.json # Base de datos local (JSON) para gestionar los proyectos expuestos
│   ├── utils/
│   │   └── imageMapper.js # Utilidad para asociar las rutas del JSON a los assets de Vite
│   ├── App.jsx           # Componente principal que orquesta el sitio completo
│   ├── index.css         # Estilos globales y personalización de fuentes (Space Grotesk)
│   └── main.jsx          # Punto de entrada de la aplicación React
├── tailwind.config.js    # Configuración del sistema de diseño y keyframes de animaciones
└── vite.config.js        # Configuración de Vite y subrutas de despliegue
```

---

## ⚙️ Cómo Ejecutar el Proyecto Localmente

Para descargar, instalar y correr el proyecto en tu máquina local, sigue estos pasos:

1. **Clona el repositorio:**
   ```bash
   git clone https://github.com/ayrton-lavayen/Portafolio.git
   cd Portafolio
   ```

2. **Instala las dependencias:**
   ```bash
   npm install
   ```

3. **Inicia el servidor de desarrollo:**
   ```bash
   npm run dev
   ```
   *El sitio estará disponible localmente en `http://localhost:5173/`.*

4. **Compilar para producción:**
   ```bash
   npm run build
   ```
   *Esto generará los archivos estáticos listos para hosting en la carpeta `dist/`.*

---

## 📝 Gestión de Proyectos

Para agregar, editar o eliminar proyectos en el futuro, no es necesario tocar el código de los componentes. Simplemente actualiza el archivo JSON local en:
👉 [src/data/projects.json](file:///src/data/projects.json)

Cada proyecto cuenta con la siguiente estructura editable:
```json
{
  "id": "identificador-unico",
  "title": "Nombre del Proyecto",
  "category": "Categoría (ej: Desarrollo Web)",
  "date": "Fecha del proyecto",
  "image_url": "/assets/nombre-de-imagen.png",
  "description": "Descripción detallada del proyecto.",
  "project_url": "https://enlace-al-sitio.com",
  "bg_color": "#colorHexadecimalDeFondo"
}
```
