---
description: Configura Prettier y VS Code para formateo automático al guardar
---

1. Detecta el gestor de paquetes (npm, pnpm, yarn) revisando los archivos de bloqueo (package-lock.json, pnpm-lock.yaml, etc).
2. Instala `prettier` como dependencia de desarrollo usando el gestor detectado.
   - npm: `npm install -D prettier`
   - pnpm: `pnpm add -D prettier`
3. Crea el archivo `.prettierrc` en la raíz con la configuración estándar:
   ```json
   {
     "semi": true,
     "tabWidth": 2,
     "printWidth": 100,
     "singleQuote": true,
     "trailingComma": "es5",
     "jsxSingleQuote": true
   }
   ```
4. Crea el directorio `.vscode` si no existe.
5. Crea o actualiza `.vscode/settings.json` para activar el formateo al guardar:
   ```json
   {
     "editor.formatOnSave": true,
     "editor.defaultFormatter": "esbenp.prettier-vscode",
     "editor.codeActionsOnSave": {
       "source.fixAll.eslint": "explicit"
     }
   }
   ```
6. Verifica el archivo `.gitignore`. Si `.vscode` está ignorado, añade una excepción para `!.vscode/settings.json` para que la configuración se comparta con el equipo (opcional, pero recomendado).
