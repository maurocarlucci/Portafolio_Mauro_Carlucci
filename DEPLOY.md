# Guía de Despliegue - GitHub y Render

Esta guía te ayudará a subir tu portafolio a GitHub y desplegarlo en Render.

## 📋 Paso 1: Inicializar Git y hacer commit

Ejecuta estos comandos en la raíz del proyecto:

```bash
# Inicializar repositorio Git
git init

# Agregar todos los archivos
git add .

# Hacer el primer commit
git commit -m "Initial commit: Portafolio digital"
```

## 📋 Paso 2: Crear repositorio en GitHub

1. Ve a [GitHub](https://github.com) e inicia sesión
2. Haz clic en el botón **"+"** en la esquina superior derecha
3. Selecciona **"New repository"**
4. Completa el formulario:
   - **Repository name**: `portafolio` (o el nombre que prefieras)
   - **Description**: "Portafolio digital personal"
   - **Visibility**: Elige Público o Privado
   - **NO marques** "Initialize this repository with a README" (ya tenemos uno)
5. Haz clic en **"Create repository"**

## 📋 Paso 3: Conectar y subir a GitHub

GitHub te mostrará comandos. Ejecuta estos (reemplaza `TU_USUARIO` con tu usuario de GitHub):

```bash
# Agregar el repositorio remoto
git remote add origin https://github.com/TU_USUARIO/portafolio.git

# Cambiar a la rama main (si es necesario)
git branch -M main

# Subir el código
git push -u origin main
```

Si te pide autenticación, puedes usar:
- **Personal Access Token** (recomendado): Ve a GitHub Settings > Developer settings > Personal access tokens > Generate new token
- O usa **GitHub CLI** para autenticarte

## 📋 Paso 4: Desplegar en Render

### 4.1 Crear cuenta en Render

1. Ve a [Render](https://render.com)
2. Regístrate con tu cuenta de GitHub (recomendado)
3. Conecta tu cuenta de GitHub si es necesario

### 4.2 Crear nuevo servicio

1. En el dashboard de Render, haz clic en **"New +"**
2. Selecciona **"Static Site"**
3. Conecta tu repositorio de GitHub:
   - Selecciona el repositorio `portafolio`
   - Render detectará automáticamente la configuración

### 4.3 Configurar el servicio

Completa los siguientes campos:

- **Name**: `portafolio` (o el nombre que prefieras)
- **Branch**: `main`
- **Root Directory**: `frontend` (importante!)
- **Build Command**: `npm install && npm run build`
- **Publish Directory**: `dist`

### 4.4 Configuración avanzada (opcional)

Si quieres usar el archivo `render.yaml` que ya creamos:

1. En la configuración del servicio, Render debería detectar automáticamente el archivo `render.yaml`
2. O puedes configurar manualmente:
   - **Build Command**: `cd frontend && npm install && npm run build`
   - **Publish Directory**: `frontend/dist`

### 4.5 Desplegar

1. Haz clic en **"Create Static Site"**
2. Render comenzará a construir y desplegar tu sitio
3. Espera a que termine el proceso (puede tomar 2-5 minutos)
4. Una vez completado, tendrás una URL como: `https://portafolio.onrender.com`

## 🔄 Actualizar el sitio

Cada vez que hagas cambios:

```bash
# Hacer commit de los cambios
git add .
git commit -m "Descripción de los cambios"
git push
```

Render detectará automáticamente los cambios y desplegará una nueva versión.

## ⚙️ Variables de entorno (si las necesitas)

Si en el futuro necesitas variables de entorno (como claves de API):

1. Ve a tu servicio en Render
2. Ve a la sección **"Environment"**
3. Agrega las variables necesarias

## 🐛 Solución de problemas

### Error: "Build failed"
- Verifica que el comando de build funcione localmente: `cd frontend && npm run build`
- Revisa los logs en Render para ver el error específico

### Error: "Publish directory not found"
- Asegúrate de que el **Publish Directory** sea `dist` o `frontend/dist`
- Verifica que el build se complete correctamente

### El sitio no se actualiza
- Verifica que hayas hecho `git push` correctamente
- Revisa que Render esté conectado a la rama correcta (`main`)

## 📝 Notas importantes

- Render ofrece un plan gratuito con algunas limitaciones
- El sitio puede tardar unos segundos en cargar en el plan gratuito (cold start)
- Para producción, considera actualizar a un plan de pago para mejor rendimiento

## 🎉 ¡Listo!

Una vez completados estos pasos, tu portafolio estará disponible en línea y se actualizará automáticamente cada vez que hagas push a GitHub.
