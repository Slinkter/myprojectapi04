# 📘 Documentación Técnica del Software

**Proyecto**: Buscador de Usuarios (User Search Engine)  
**Versión**: 1.0.0  
**Fecha**: 2025-12-04  

---

## 1. Visión General
Este documento describe la arquitectura técnica, los flujos de datos y las decisiones de implementación del sistema "Buscador de Usuarios". El sistema permite a los usuarios visualizar y filtrar una lista de usuarios obtenida de una API externa, garantizando una experiencia de usuario fluida y performante.

## 2. Requerimientos

### 2.1 Funcionales
- **RF-01**: El sistema debe obtener una lista de usuarios de una API remota al iniciar.
- **RF-02**: El usuario debe poder filtrar la lista por nombre en tiempo real.
- **RF-03**: El sistema debe mostrar un estado de carga (Skeleton) mientras se obtienen los datos.
- **RF-04**: El sistema debe manejar y mostrar errores de red si la API falla.

### 2.2 No Funcionales
- **RNF-01 (Rendimiento)**: El filtrado debe ser instantáneo (optimizado con Memoization).
- **RNF-02 (Mantenibilidad)**: El código debe seguir Clean Architecture y principios SOLID.
- **RNF-03 (UX)**: La interfaz debe ser responsiva y accesible.

## 3. Arquitectura del Sistema

### 3.1 Diagrama de Componentes (Mermaid)

```mermaid
graph TD
    User[Usuario] -->|Interactúa| UI[Interfaz de Usuario]
    UI -->|Dispara Eventos| Hook[Custom Hook (useUsers)]
    Hook -->|Despacha Acciones| Store[Redux Store]
    Store -->|Invoca Thunk| Thunk[Async Thunk]
    Thunk -->|Llama| Service[User Service]
    Service -->|HTTP Request| API[External API]
    API -->|JSON Response| Service
    Service -->|Datos| Thunk
    Thunk -->|Actualiza| Store
    Store -->|Selecciona Datos| Hook
    Hook -->|Renderiza| UI
```

### 3.2 Arquitectura Lógica
El sistema utiliza una arquitectura en capas unidireccional:

1.  **Capa de Presentación (View)**: Componentes React (`UsersPage`, `UserList`). Solo se encargan de renderizar datos y capturar eventos. No contienen lógica de negocio.
2.  **Capa de Lógica de Vista (ViewModel/Hook)**: `useUsers`. Actúa como intermediario. Gestiona el estado local del input y conecta con el estado global.
3.  **Capa de Estado (Store)**: Redux Toolkit. Mantiene la "Fuente de la Verdad" de los datos de usuarios y su estado de carga.
4.  **Capa de Infraestructura (Services)**: `users.service.js`. Abstrae la comunicación con el mundo exterior (API).

## 4. Flujo de Datos y Estado

### Representación del Estado Global
```typescript
interface UserState {
  users: User[];          // Lista completa de usuarios
  status: 'idle' | 'loading' | 'succeeded' | 'failed'; // Máquina de estados finita
  error: string | null;   // Mensaje de error si existe
}
```

### Estrategia de Filtrado
El filtrado se realiza en el cliente (Client-side filtering) por razones de rendimiento y UX, dado que el dataset es pequeño (< 1000 registros).
- **Optimización**: Se utiliza `useMemo` en `useUsers` para evitar recálculos innecesarios del filtro en re-renderizados que no involucren cambios en el texto o la lista de usuarios.

## 5. Riesgos y Mitigaciones

| Riesgo | Impacto | Mitigación |
| :--- | :--- | :--- |
| **Fallo de API** | Alto (No se muestran datos) | Manejo de estado `failed` en Redux y UI de error amigable. |
| **Lentitud en Filtrado** | Medio (UX pobre) | Uso de `useMemo` y debounce (pendiente de implementar para datasets grandes). |
| **Cambios en API** | Medio (Refactor necesario) | Uso de capa de Servicios (Adapter Pattern) para aislar cambios. |

## 6. Métricas de Calidad
- **Lighthouse Score**: > 90 en Performance, Accessibility, Best Practices.
- **Bundle Size**: Minimizado mediante Code Splitting (`React.lazy` para `UsersPage`).

## 7. APIs Utilizadas
- **Endpoint**: `https://jsonplaceholder.typicode.com/users`
- **Método**: GET
- **Formato**: JSON
