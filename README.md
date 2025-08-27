
# Gestor de Contadores

Aplicación web para crear, administrar y filtrar contadores numéricos de forma sencilla. Permite sumar, restar y eliminar contadores, así como aplicar filtros y ordenar la lista. Además, muestra un resumen de la suma total de valores y la cantidad de contadores.

## Características

- Crear, incrementar, decrementar y eliminar contadores.
- Filtrar contadores por valores mayores o menores a un número.
- Ordenar por nombre o valor (ascendente / descendente).
- Buscador de contadores por nombre.
- Transiciones suaves al agregar o eliminar contadores.
- Footer con la **suma total de todos los contadores** y el total de contadores.
- Persistencia del estado usando `localStorage` y `sessionStorage`.
- Interfaz responsive y moderna.

## Tecnologías

- [Vue 3](https://vuejs.org/)
- [Vuex](https://vuex.vuejs.org/)
- TypeScript
- CSS moderno con variables y gradientes
- Transiciones con `<transition-group>`

## Instalación

1. Clonar el repositorio:  
```bash
git clone https://github.com/nachozamorano/accountants.git
cd accountants
```

2. Instalar dependencias:  
```bash
npm install
# o
yarn install
```

3. Ejecutar el proyecto en modo desarrollo:  
```bash
npm run dev
# o
yarn dev
```

4. Abrir la aplicación en tu navegador:  
```
http://localhost:3000
```

## Estructura del proyecto

```
src/
├─ components/
│  ├─ Contador.vue           # Componente de cada contador individual
│  ├─ SumaDeContadores.vue   # Footer con suma total y cantidad de contadores
│  ├─...
├─ store/
│  ├─ index.ts               # Estado global con Vuex
├─ pages/
│  ├─ index.vue              # Página principal con listado y buscador
└─ App.vue                   # Componente raíz
```

## Uso

1. Crear un contador con el botón **"Crear contador"**.
2. Incrementar o decrementar el valor con los botones `+1` y `-1`.
3. Eliminar un contador con el botón de basurero.
4. Usar el buscador para filtrar contadores por nombre.
5. Aplicar filtros por valor y ordenar usando las opciones disponibles.
6. Consultar en el footer la **suma total de valores** y la cantidad de contadores.

## Personalización

- Cambiar colores y sombras editando las **variables CSS** (`--primary`, `--bg`, `--muted`, etc.).
- Modificar las animaciones en los contadores ajustando las clases de `<transition-group>`.

## Licencia

MIT License
