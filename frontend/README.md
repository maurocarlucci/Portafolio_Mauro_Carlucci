# Portafolio Personal

Portafolio profesional desarrollado con React, TypeScript y Vite.

## 🚀 Características

- ✨ Diseño moderno y responsive
- 🎨 Interfaz atractiva con animaciones suaves
- 📱 Completamente adaptable a dispositivos móviles
- ⚡ Optimizado para rendimiento
- 🔍 SEO friendly

## 🛠️ Tecnologías

- **React 19** - Biblioteca de UI
- **TypeScript** - Tipado estático
- **Vite** - Build tool y dev server
- **CSS3** - Estilos personalizados

## 📦 Instalación

1. Instala las dependencias:
```bash
npm install
```

2. Inicia el servidor de desarrollo:
```bash
npm run dev
```

3. Abre [http://localhost:5173](http://localhost:5173) en tu navegador

## 🏗️ Build para Producción

Para crear una versión optimizada para producción:

```bash
npm run build
```

Los archivos se generarán en la carpeta `dist/`.

Para previsualizar el build de producción:

```bash
npm run preview
```

## 📝 Personalización

### Actualizar Información Personal

1. **Hero Section** (`src/components/Hero.tsx`):
   - Cambia "Tu Nombre" por tu nombre real
   - Actualiza el subtítulo y descripción

2. **About Section** (`src/components/About.tsx`):
   - Modifica el texto sobre ti
   - Actualiza las estadísticas (años de experiencia, proyectos, etc.)

3. **Skills Section** (`src/components/Skills.tsx`):
   - Actualiza las habilidades y niveles según tu experiencia

4. **Projects Section** (`src/components/Projects.tsx`):
   - Reemplaza los proyectos de ejemplo con tus proyectos reales
   - Actualiza las imágenes, descripciones y enlaces

5. **Contact Section** (`src/components/Contact.tsx`):
   - Actualiza los enlaces de redes sociales
   - Cambia el email en el enlace de contacto

6. **Header** (`src/components/Header.tsx`):
   - Cambia "Mi Portafolio" por tu nombre o marca personal

### Agregar Imágenes de Proyectos

Reemplaza las URLs de placeholder en `Projects.tsx` con imágenes reales de tus proyectos. Puedes:
- Agregar imágenes en `public/` y referenciarlas como `/nombre-imagen.jpg`
- Usar servicios como Cloudinary o Imgur
- Usar imágenes desde tu repositorio de GitHub

## 🌐 Publicación

### Opción 1: Vercel (Recomendado)

1. Instala Vercel CLI:
```bash
npm i -g vercel
```

2. Desde la carpeta `frontend`, ejecuta:
```bash
vercel
```

3. Sigue las instrucciones en pantalla

### Opción 2: Netlify

1. Instala Netlify CLI:
```bash
npm i -g netlify-cli
```

2. Desde la carpeta `frontend`, ejecuta:
```bash
netlify deploy --prod
```

### Opción 3: GitHub Pages

1. Actualiza `vite.config.ts` con el base path de tu repositorio:
```typescript
export default defineConfig({
  plugins: [react()],
  base: '/nombre-repositorio/'
})
```

2. Instala `gh-pages`:
```bash
npm install --save-dev gh-pages
```

3. Agrega estos scripts a `package.json`:
```json
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
}
```

4. Ejecuta:
```bash
npm run deploy
```

### Opción 4: Otras plataformas

El proyecto genera archivos estáticos en `dist/` que puedes subir a cualquier hosting estático:
- AWS S3 + CloudFront
- Firebase Hosting
- Surge.sh
- Tu propio servidor

## 📄 Estructura del Proyecto

```
frontend/
├── public/          # Archivos estáticos
├── src/
│   ├── components/  # Componentes React
│   │   ├── Header.tsx
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Skills.tsx
│   │   ├── Projects.tsx
│   │   ├── Contact.tsx
│   │   └── Footer.tsx
│   ├── App.tsx     # Componente principal
│   ├── main.tsx    # Punto de entrada
│   └── index.css   # Estilos globales
├── index.html
└── package.json
```

## 🎨 Personalización de Colores

Los colores principales están definidos en los archivos CSS de cada componente. Los colores principales son:
- Primario: `#667eea` (azul/púrpura)
- Secundario: `#764ba2` (púrpura)
- Acento: `#fbbf24` (amarillo)

Puedes cambiar estos colores en los archivos CSS correspondientes.

## 📱 Responsive Design

El portafolio está completamente optimizado para:
- 📱 Móviles (320px+)
- 📱 Tablets (768px+)
- 💻 Laptops (1024px+)
- 🖥️ Desktop (1200px+)

## 🤝 Contribuciones

Este es un proyecto personal, pero siéntete libre de usarlo como base para tu propio portafolio.

## 📝 Licencia

Este proyecto es de código abierto y está disponible bajo la licencia MIT.

---

¡Buena suerte con tu portafolio! 🚀
