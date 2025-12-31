# Roadmap y Deuda Técnica

Este documento detalla las mejoras planificadas y la deuda técnica identificada en el proyecto.

## 1. Deuda Técnica Actual

### 1.1 Gestión de Errores en Servicios

- **Problema:** `users.service.js` lanza un error genérico "Error al obtener los usuarios" sin detalles.
- **Impacto:** Dificulta el debugging en producción si la API falla por razones específicas (404, 500, Rate Limit).
- **Solución Propuesta:** Estandarizar una clase/objeto de error que incluya el status code y mensaje original.

### 1.2 Tipado Estático (Lack of TypeScript)

- **Problema:** El proyecto usa JavaScript estándar.
- **Impacto:** Ausencia de intellisense robusto y mayor probabilidad de errores en tiempo de ejecución (propiedades undefined, tipos incorrectos de API).
- **Solución Propuesta:** Migración gradual a TypeScript, empezando por las interfaces de dominio (User, State).

### 1.3 Routing Inexistente

- **Problema:** No hay React Router.
- **Impacto:** No se puede compartir una URL específica de un usuario (ej. `/users/123`).
- **Solución Propuesta:** Instalar `react-router-dom` y configurar rutas anidadas.

---

## 2. Futuras Funcionalidades (Roadmap)

### Corto Plazo

- [ ] **Detalle de Usuario:** Crear una vista de detalle (Modal o Página nueva) al hacer clic en una tarjeta.
- [ ] **Filtros Avanzados:** Filtrar no solo por nombre, sino por email o ciudad.
- [ ] **Paginación:** La API soporta muchos usuarios; implementar paginación en `UsersPage`.

### Largo Plazo

- [ ] **Autenticación (Firebase/Auth0):** Permitir login para funcionalidades de administrador.
- [ ] **Persistencia Local:** Guardar búsquedas recientes en `localStorage`.
- [ ] **Tests:** Implementar Unit Testing (Vitest + Testing Library) para `usersSlice.js` y componentes críticos.

---

## 3. Historial de Mejoras Recientes

- **[Despliegue]** Corrección de configuración `base` en Vite para soporte de GitHub Pages.
- **[Docs]** Reestructuración completa de la documentación técnica en `src/docs`.
