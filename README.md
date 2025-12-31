# MyProjectAPI04 - Buscador de Usuarios

> Aplicación SPA moderna para la búsqueda y visualización de usuarios, construida con React, Redux Toolkit y una arquitectura orientada a funcionalidades.

## 🚀 Visión General

Este proyecto es una demostración técnica de una Single Page Application (SPA) que consume la API pública de **JSONPlaceholder**.

**Características Principales:**

- 🔍 Búsqueda en tiempo real de usuarios.
- ⚡ Gestión de estado global asíncrono robusto (Loading, Error, Success states).
- 🎨 Diseño responsivo y limpio (Híbrido Tailwind + BEM).
- 🧩 Arquitectura escalable desacoplada (Feature-Based).

🔗 **Demo en Vivo:** [https://Slinkter.github.io/myprojectapi04/](https://Slinkter.github.io/myprojectapi04/)

---

## 📚 Documentación Técnica

La documentación completa para desarrolladores se encuentra en el directorio `src/docs/`:

| Documento                                                             | Descripción                                                |
| :-------------------------------------------------------------------- | :--------------------------------------------------------- |
| **[🏠 Arquitectura](src/docs/architecture/ARCHITECTURE.md)**          | Explica el patrón Feature-Based, Redux Thunks y Data Flow. |
| **[🎨 Sistema de Diseño](src/docs/design-system/STYLING_GUIDE.md)**   | Guía de estilos híbrida (Tailwind + BEM) y componentes UI. |
| **[⚙️ Configuración y Deploy](src/docs/manuals/SETUP_AND_DEPLOY.md)** | Cómo instalar, ejecutar y desplegar en GitHub Pages.       |
| **[📖 Glosario](src/docs/GLOSSARY.md)**                               | Definiciones técnicas de los patrones usados.              |
| **[🗺️ Roadmap](src/docs/ROADMAP.md)**                                 | Deuda técnica conocida y futuros pasos.                    |

---

## 🛠️ Stack Tecnológico

- **Core:** React 18, Vite.
- **Estado:** Redux Toolkit (Slices, Thunks).
- **Estilos:** Tailwind CSS (vía `@apply`), BEM methodology.
- **Servicios:** Fetch API nativa, JSONPlaceholder.
- **Calidad:** ESLint, Prettier.

## 🏁 Quick Start

1.  **Instalar dependencias:**
    ```bash
    pnpm install
    ```
2.  **Correr localmente:**
    ```bash
    pnpm dev
    ```
3.  **Construir para producción:**
    ```bash
    pnpm build
    ```

---

## 🤝 Contribución

Si deseas contribuir, por favor revisa primero el documento de **Arquitectura** para entender dónde debe ir tu código. Este proyecto sigue normas estrictas de separación de lógica (Hooks) y UI.

**Autor:** [Slinkter](https://github.com/Slinkter)
