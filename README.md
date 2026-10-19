# 📋 User Directory — Clean Architecture User Catalog

[![React](https://img.shields.io/badge/React-18.3-61DAFB?style=flat&logo=react)](https://react.dev)
[![Vite](https://img.shields.io/badge/Vite-5.4-646CFF?style=flat&logo=vite)](https://vitejs.dev)
[![Redux Toolkit](https://img.shields.io/badge/Redux_Toolkit-2.2-764ABC?style=flat&logo=redux)](https://redux-toolkit.js.org)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-06B6D4?style=flat&logo=tailwindcss)](https://tailwindcss.com)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

Single Page Application (SPA) para la búsqueda y visualización de directorios corporativos de usuarios. Construida aplicando principios **SOLID**, **Clean Architecture** y una estricta separación de responsabilidades.

---

## 🎯 Características Principales

- **Búsqueda en Tiempo Real**: Filtrado dinámico por nombre y correo electrónico con respuesta inmediata al teclear.
- **Skeleton Loaders**: Estados visuales de carga elegantes que eliminan los saltos de layout (CLS).
- **Manejo Resiliente de Errores**: Presentación clara de fallos de red con opción de reintento.
- **Estado Predecible con Redux Toolkit**: Manejo centralizado de peticiones asíncronas con reducers desacoplados.
- **Diseño Responsivo**: Experiencia de usuario optimizada tanto para escritorio como dispositivos móviles.

---

## 🛠️ Stack Tecnológico

| Capa | Herramienta | Rol |
| :--- | :--- | :--- |
| **Framework** | React 18.3 | Librería de interfaz basada en componentes funcionales |
| **Bundler** | Vite 5.4 | Entorno de desarrollo de alta velocidad |
| **Estado** | Redux Toolkit | Gestión de estado global y ciclo de vida de peticiones |
| **Estilos** | Tailwind CSS 3.4 | Sistema de diseño basado en utilidades |

---

## 🚀 Inicio Rápido

### Requisitos Previos
- **Node.js**: v18.0 o superior
- **pnpm**: v9.0 o superior

### Instalación y Ejecución

1. **Instalar dependencias:**
   ```bash
   pnpm install
   ```

2. **Configurar variables de entorno:**
   ```bash
   cp .env.example .env
   ```

3. **Iniciar en modo desarrollo:**
   ```bash
   pnpm run dev
   ```

4. **Compilar proyecto:**
   ```bash
   pnpm run build
   ```

---

## 📄 Licencia

Distribuido bajo la Licencia **MIT**. Consulta el archivo `LICENSE` para más información.
