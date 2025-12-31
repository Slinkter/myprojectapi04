# Sistema de Diseño y Estilos (Design System)

## 1. Filosofía Híbrida: Tailwind + BEM

Este proyecto utiliza una aproximación híbrida única para el estilado, combinando la potencia de **Tailwind CSS** con la estructura organizativa de **BEM (Block Element Modifier)**.

### ¿Por qué esta estrategia?

- **Tailwind** nos da velocidad y un sistema de diseño consistente (tokens de espaciado, colores, tipografía).
- **BEM** nos da semántica y mantenibilidad, evitando la "sopa de clases" (class soup) en el JSX.

---

## 2. Convención de Nombres (BEM)

Las clases se definen en `src/index.css` utilizando la directiva `@apply` de Tailwind.

### Estructura

`bloque__elemento--modificador`

- **Bloque:** El componente principal de alto nivel (ej. `.card`, `.search-bar`).
- **Elemento:** Una parte dependiente del bloque (ej. `.card__title`, `.search-bar__input`).
- **Modificador:** Una variación del estado o estilo (ej. `.card--hoverable`).

### Ejemplo Real

**En CSS (`src/index.css`):**

```css
/* Bloque */
.card {
  @apply rounded-lg border bg-card text-card-foreground shadow-sm;
}

/* Modificador */
.card--hoverable {
  @apply transition-all hover:scale-[1.02] hover:shadow-lg;
}

/* Elemento */
.card__title {
  @apply text-2xl font-semibold leading-none;
}
```

**En React (`Component.jsx`):**

```jsx
<div className='card card--hoverable'>
  <h3 className='card__title'>Título</h3>
</div>
```

---

## 3. Paleta de Colores y Tokens

El proyecto utiliza variables CSS nativas (`:root`) definidas dentro de capas de Tailwind para soportar temas (Light/Dark mode future-proof).

| Variable CSS         | Uso                                                      |
| :------------------- | :------------------------------------------------------- |
| `--background`       | Fondo principal de la página.                            |
| `--foreground`       | Color principal de texto.                                |
| `--primary`          | Color de acción principal (botones, enlaces destacados). |
| `--muted-foreground` | Texto secundario o deshabilitado.                        |
| `--border`           | Bordes de inputs, tarjetas y separadores.                |

---

## 4. Componentes UI Base

### 4.1 Layout

- `.main-layout`: Contenedor principal que centra el contenido y maneja el espaciado responsivo.
- `.main-layout__container`: Limita el ancho máximo (`max-w-4xl`) para legibilidad.

### 4.2 Cards

Las tarjetas son el elemento visual principal para mostrar usuarios.

- Diseño limpio con sombra suave (`shadow-sm`).
- Animación sutil al hacer hover (`hover:scale-[1.02]`).

### 4.3 Skeletons

Para la carga de datos (`loading state`), se utilizan clases de utilidad para animar "esqueletos":

- `.skeleton-loader`: Aplica `animate-pulse` y un fondo gris base.

---

## 5. Reglas de Uso

1.  **NO usar Tailwind en línea:** Evitar `className="p-4 flex text-red-500"`. Extraer a una clase BEM en `index.css` si el patrón se repite.
2.  **Abstracción:** Si un conjunto de estilos se usa en más de 2 lugares, crear una clase `.component` en `src/index.css`.
3.  **Orden:** Mantener `src/index.css` organizado por bloques de componentes comentados (`/* Card Block */`, `/* UserList Block */`).
