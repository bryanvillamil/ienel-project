# Arquetipo Frontend para proyectos desarrollados en NextJS

> **Version:** 0.1.0

Código relacionado con la capa front-end del portal Kliiker, activo para Grupo Uribe y desarrollado con [Next.js](https://nextjs.org/).

## Getting Started

Ejecución de un servidor de desarrollo para validaciones locales (El servidor se ejecuta en) [http://localhost:3000](http://localhost:3000)

```bash
npm run dev
# or
yarn dev
```

## Directorios principales

| ruta          | descripcion                                                                                                                                                                |
| ------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `/__mocks__`  | Alojamiento de mocks para pruebas unitarias                                                                                                                                |
| `/__tests__`  | Alojamiento de pruebas unitarias de las páginas (pages) pues no se deben crear archivos adicionales allí                                                                   |
| `/.husky`     | Scripts para rutinas de pre-commit                                                                                                                                         |
| `/@types`     | Definición de tipos especificos para TypeScript                                                                                                                            |
| `/components` | Ubicación de componentes reutilizables de la aplicación, de acuerdo al estandar de _Atomic Design_ (`/components/atoms`, `/components/molecules`, `/components/organisms`) |
| `/pages`      | Ubicación de las páginas de sitio, conforme al sistema de enrutamiento para NextJS y de acuerdo al _Atomic Design_                                                         |
| `/public`     | Alojamiento de assets públicos, no mutables que se usarán en la aplicación (p.e. favicon)                                                                                  |
| `/src`        | Otros archivos fuente de la aplicacion (assets, middlewares, etc)                                                                                                          |
| `/styles`     | Archivos globales y utilitarios para la implementación de estilos                                                                                                          |
| `/templates`  | Ubicación de componentes de agrupación de acuerdo al modelo de _Atomic Design_                                                                                             |
