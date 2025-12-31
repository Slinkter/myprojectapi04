# Glosario Técnico

Definiciones de términos clave, patrones y bibliotecas utilizadas en el contexto de este proyecto.

## Arquitectura y Patrones

### Feature-Based Architecture

Estrategia de organización de carpetas donde el código se agrupa por **funcionalidad de negocio** (ej. `features/users`) en lugar de por tipo de archivo. Esto promueve la cohesión y facilita la escalabilidad.

### Facade Pattern (Custom Hooks)

Patrón estructural donde se utiliza un Custom Hook (`useUsers`) para proveer una interfaz simplificada a la lógica compleja (Redux, Side Effects). Los componentes solo interactúan con la "fachada" (el hook), no con la complejidad subyacente.

### Service Layer

Capa de abstracción dedicada exclusivamente a la comunicación con fuentes de datos externas (APIs). Separa la lógica de "cómo obtener los datos" (HTTP fetch) de la lógica de "qué hacer con los datos" (Components/State).

---

## React & Redux Ecosystem

### Redux Slice

Una colección de lógica reducer y acciones para una sola funcionalidad de la aplicación. Definido usando `createSlice` de Redux Toolkit.

### Thunk (Redux Thunk)

Un patrón de middleware para escribir lógica asíncrona en Redux. Un "thunk" es una función que puede ser despachada y que a su vez puede despachar acciones regulares (ej. `pending`, `fulfilled`) basándose en resultados asíncronos (como una llamada a API).

### Props Drilling

(Anti-patrón evitado) Pasar datos a través de múltiples niveles de componentes que no los necesitan. Se evita en este proyecto mediante el uso de Redux para el estado global y Composición de Componentes.

---

## Estilos y CSS

### BEM (Block Element Modifier)

Metodología de nomenclatura de clases CSS.

- **Block:** Componente independiente (`.card`).
- **Element:** Parte del bloque (`.card__title`).
- **Modifier:** Estado o variante (`.card--hoverable`).

### Utility-First CSS (Tailwind)

Metodología donde se construyen diseños aplicando clases predefinidas de bajo nivel (utilidades) directamente en el HTML. En este proyecto se usa de forma híbrida dentro de bloques CSS con `@apply`.

---

## Herramientas

### Vite

Herramienta de compilación frontend moderna. Reemplaza a Webpack, ofreciendo un servidor de desarrollo extremadamente rápido gracias al uso de ES Modules nativos en el navegador.

### GitHub Pages

Servicio de hosting de sitios estáticos directo desde un repositorio de GitHub. Se utiliza para el despliegue de producción de este proyecto.
