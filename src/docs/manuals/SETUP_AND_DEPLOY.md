# Manual de Configuración y Despliegue

## 1. Requisitos Previos

- **Node.js**: Versión 18+ recomendada.
- **Gestor de Paquetes**: `npm`, `yarn`, o `pnpm` (recomendado).
- **Git**: Para control de versiones.

## 2. Instalación y Ejecución Local

1.  **Clonar el repositorio:**

    ```bash
    git clone https://github.com/Slinkter/myprojectapi04.git
    cd myprojectapi04
    ```

2.  **Instalar dependencias:**

    ```bash
    pnpm install
    # o
    npm install
    ```

3.  **Iniciar servidor de desarrollo:**
    ```bash
    pnpm dev
    ```
    La aplicación estará disponible en `http://localhost:5173`.

## 3. Scripts Disponibles

En el `package.json` encontrarás los siguientes comandos clave:

- `dev`: Inicia el servidor de desarrollo Vite.
- `build`: Compila la aplicación para producción en la carpeta `dist`.
- `lint`: Ejecuta el linter (ESLint) para verificar calidad de código.
- `preview`: Inicia un servidor local para previsualizar la build de producción.
- `predeploy`: Se ejecuta automáticamente antes del deploy (corre el build).
- `deploy`: Publica la carpeta `dist` en GitHub Pages.

---

## 4. Despliegue en GitHub Pages

Este proyecto está configurado para desplegarse automáticamente en GitHub Pages.

### Configuración Crítica (`vite.config.js`)

Para que el despliegue funcione en una sub-ruta (como `/myprojectapi04/`), es **imprescindible** la configuración `base`:

```javascript
// vite.config.js
export default defineConfig({
  plugins: [react()],
  base: '/myprojectapi04/', // <--- CRUCIAL: Debe coincidir con el nombre del repo
});
```

Si esta línea falta o es incorrecta, la página cargará en blanco porque no encontrará los archivos JS/CSS.

### Proceso de Despliegue Manual

1.  Asegúrate de estar en la rama `main` y tener el código limpio.
2.  Ejecuta el comando de deploy:
    ```bash
    pnpm run deploy
    ```
3.  Este comando realizará internamente:
    - `npm run build`: Genera los archivos estáticos en `dist/`.
    - `gh-pages -d dist`: Sube el contenido de `dist/` a la rama `gh-pages` del repositorio remoto.

4.  Visita tu aplicación en: `https://Slinkter.github.io/myprojectapi04/`

---

## 5. Solución de Problemas Comunes

**P: La página se ve blanca después del deploy.**
R: Verifica que `base` en `vite.config.js` comience y termine con `/` y coincida con el nombre del repositorio.

**P: Los cambios en CSS no se reflejan.**
R: Asegúrate de guardar `index.css` y que `tailwind` esté corriendo. Intenta reiniciar el servidor de desarrollo.

**P: Error 404 al recargar la página.**
R: Este proyecto NO usa Router (`react-router-dom`). Si lo implementas en el futuro, necesitarás configurar un archivo `404.html` o un truco de redirección SPA en GitHub Pages.
