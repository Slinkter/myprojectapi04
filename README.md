# 🚀 Buscador de Usuarios Profesional (React + Redux Toolkit)

![React](https://img.shields.io/badge/React-18-blue) ![Redux Toolkit](https://img.shields.io/badge/Redux_Toolkit-2.0-purple) ![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-cyan) ![Vite](https://img.shields.io/badge/Vite-5.0-yellow)

> Una aplicación de referencia arquitectónica que demuestra patrones de diseño modernos, Clean Architecture y metodologías profesionales de desarrollo frontend en 2025.

## 🌟 Introducción

Este proyecto no es solo un buscador de usuarios; es una **implementación de referencia** diseñada para mostrar cómo estructurar aplicaciones React escalables, mantenibles y de alto rendimiento.

El objetivo es resolver un problema común (consumir una API y mostrar datos) aplicando estándares de la industria:
- **Separación de responsabilidades** (UI, Lógica, Estado, Servicios).
- **Arquitectura basada en Features** (Feature-Sliced Design simplificado).
- **Estilos escalables** con Tailwind CSS + Metodología BEM (@apply).
- **Optimización de rendimiento** (Code Splitting, Memoization).

## 🛠️ Tecnologías Principales

- **Core**: React 18 (Hooks, Suspense, Lazy).
- **Estado Global**: Redux Toolkit (Slices, AsyncThunks).
- **Estilos**: Tailwind CSS con arquitectura BEM y variables CSS nativas.
- **Build Tool**: Vite.
- **Calidad de Código**: ESLint, Prettier.
- **Arquitectura**: Feature-Based + Clean Architecture principles.

## 🏗️ Arquitectura del Sistema

El proyecto sigue una estructura modular que agrupa el código por **dominio de negocio (features)** en lugar de por tipo de archivo técnico.

```text
src/
├── app/                 # Configuración global (store, providers)
├── components/          # Componentes UI compartidos (Atomic Design)
│   ├── ui/              # Átomos y Moléculas (Card, Skeleton)
│   └── layout/          # Layouts estructurales
├── features/            # Módulos de negocio (Dominios)
│   └── users/           # Feature: Gestión de Usuarios
│       ├── api/         # (Opcional) Servicios específicos
│       ├── components/  # Componentes exclusivos (UserList)
│       ├── hooks/       # Lógica de negocio (useUsers)
│       ├── model/       # Estado (Slice)
│       └── UsersPage.jsx # Página principal de la feature
├── services/            # Capa de Servicios (API Gateway)
├── lib/                 # Utilidades y helpers
└── styles/              # Arquitectura CSS (BEM + Tailwind)
```

### Decisiones de Diseño Clave

1.  **Capa de Servicios (`services/`)**: La lógica de red está desacoplada de Redux. `users.service.js` maneja la comunicación HTTP, permitiendo cambiar la fuente de datos sin tocar la UI o el estado.
2.  **Custom Hooks (`hooks/`)**: Los componentes de vista (`UsersPage`) no conocen Redux. Usan hooks como `useUsers` que exponen una API limpia (`users`, `status`, `actions`).
3.  **Estilos Híbridos (Tailwind + BEM)**: Se evita el "soup de clases" en el JSX. Usamos `@apply` en `index.css` para crear clases semánticas (`.card`, `.user-list`) que mantienen el HTML limpio y legible, aprovechando la potencia de Tailwind.

## 🚀 Instalación y Ejecución

### Prerrequisitos
- Node.js 18+
- pnpm (recomendado) o npm

### Pasos

1.  **Clonar el repositorio**
    ```bash
    git clone https://github.com/tu-usuario/myprojectapi04.git
    cd myprojectapi04
    ```

2.  **Instalar dependencias**
    ```bash
    pnpm install
    ```

3.  **Iniciar servidor de desarrollo**
    ```bash
    pnpm run dev
    ```

4.  **Construir para producción**
    ```bash
    pnpm run build
    ```

## 📚 Comparación: Antes vs. Después

| Aspecto | Antes (Legacy) | Después (Refactorizado) |
| :--- | :--- | :--- |
| **Estilos** | Clases hardcodeadas en JSX (`text-4xl font-bold...`) | Clases semánticas BEM (`.app__title`) definidas en CSS |
| **API** | `fetch` directo en Redux Slice | Capa de servicio dedicada (`users.service.js`) |
| **Estructura** | Componentes mezclados en `components/` | Separación clara en `features/users/` |
| **Mantenibilidad** | Baja (difícil de leer y escalar) | Alta (modular y desacoplada) |

## 🔮 Roadmap

- [ ] Implementar React Router para navegación detallada.
- [ ] Añadir Tests Unitarios (Vitest + Testing Library).
- [ ] Integrar TypeScript para tipado estático robusto.
- [ ] Añadir modo oscuro (Dark Mode) automático.

---

Desarrollado con ❤️ siguiendo las mejores prácticas de Ingeniería de Software.