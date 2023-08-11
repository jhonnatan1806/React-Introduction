# Introducción a React

React es una biblioteca de JavaScript popular y poderosa para construir interfaces de usuario interactivas y dinámicas. En este curso, aprenderás los conceptos fundamentales de React y cómo utilizarlo para crear aplicaciones web modernas y eficientes.

Requisitos:

- Conocimientos básicos de HTML, CSS y JavaScript.
- Conocimientos básicos de Git y GitHub.

## Sesión 1 - Configuración del entorno de desarrollo y Primeros pasos con React

En esta sesión, aprenderás a configurar el entorno de desarrollo para trabajar con React y crearás una aplicación web simple con React.

**Actividad práctica:** Crea una aplicación React que muestre una página de inicio simple con un titulo, un párrafo y un boton, utiliza html5 para crear la estructura de la página y utiliza css para darle estilo a la página.

## Sesión 2 - Introducción a NodeJS: Creación de Proyectos, instalación de paquetes y Gestión de Dependencias

En esta sesión, aprenderás a crear un proyecto de React utilizando npm ademas de instalar y gestionar dependencias de terceros en tu proyecto, entendaras las diferencias entre dependencias de desarrollo y dependencias de producción, scripts de npm y el archivo package.json.

**Actividad práctica:** Crea un nuevo proyecto en React utilizando `create vite@latest` e instala las herramientas `eslint` y `prettier` para formatear el código de tu proyecto e instala la biblioteca `styled-components` para crear componentes estilizados en React.

## Sesión 3 - Creacion de componentes en React: props, children y composición

Los componentes son la unidad básica de React, en esta sesión aprenderás a crear componentes en React utilizando funciones, a utilizar las propiedades de los componentes para pasar datos y funciones entre componentes y a utilizar la composición de componentes para crear componentes más complejos.

**Actividad práctica:** Crea un componente de React llamado `PostCard` que reciba como propiedades un `title`, un `content` y una botonera de acciones (`like`, `share` y `comment`). Utiliza el componente `PostCard` para mostrar una lista de publicaciones en la página de inicio de tu aplicación.

## Sesión 4 - Enrutamiento y manipulación de datos JSON

En esta sesión, aprenderás a utilizar React Router para crear rutas en tu aplicación y a utilizar el componente `Link` para crear enlaces entre rutas. Además, aprenderás a utilizar el componente `Switch` para crear rutas privadas y a utilizar el componente `Route` para crear rutas públicas. Por último, aprenderás a utilizar el componente `Redirect` para redirigir a los usuarios a una ruta específica.

**Actividad práctica:** Crea una ruta llamada blog que muestre una lista de publicaciones desde un archivo JSON. Utiliza el componente `PostCard` para mostrar las publicaciones en la lista y utiliza el componente `Link` para crear un enlace a la ruta de detalle de cada publicación.

## Sesión 5 -  Introducción a los Hooks de React: useState, useRef y useContext

Los Hooks son una característica poderosa introducida en React para trabajar con el estado y otras características de React en componentes funcionales. En esta sesión, aprenderás a utilizar el Hook useState para manejar el estado de un componente funcional y el Hook useRef para crear referencias a elementos del DOM. Además, exploraremos el Hook useContext para crear contextos y compartir información entre componentes de manera eficiente.

**Actividad práctica:** Utiliza el Hook useState para crear un contador que muestre el número de veces que un usuario ha hecho clic en el boton `like` de una publicación. Utiliza el Hook useRef para crear una referencia a un elemento del DOM y cambiar su estilo cuando el usuario haga clic en el boton `like`.

## Sesión 6 - Hooks avanzados: useEffect para realizar llamadas a APIs externas con fetch y axios

En esta última sesión, profundizaremos en el Hook useEffect, su funcionamiento y cómo utilizarlo para realizar llamadas a APIs externas. Aprenderás a realizar peticiones a APIs externas utilizando las herramientas fetch y axios, lo que te permitirá obtener y mostrar datos dinámicos en tu aplicación de React.

**Actividad práctica:** Utiliza el Hook useEffect para realizar una llamada a la API de [JSONPlaceholder](https://jsonplaceholder.typicode.com/) y mostrar una lista de publicaciones en la página de inicio de tu aplicación. Utiliza el componente `PostCard` para mostrar las publicaciones en la lista y utiliza el componente `Link` para crear un enlace a la ruta de detalle de cada publicación utilizando el id de la publicación de la forma `/blog/:id`.

## Sesión 7 - Presentación de proyecto y despliegue de aplicaciones React en Netlify

En esta sesión, aprenderás a desplegar tu aplicación React en Netlify, un servicio de alojamiento de sitios web que te permite desplegar aplicaciones web de forma gratuita y sencilla.

**Actividad práctica:** Despliega tu aplicación React en Netlify.

## Recursos adicionales

- [The Road to Learn React - Robin Wieruch](https://www.amazon.com/-/es/Robin-Wieruch/dp/1986338827)
- [React Documentation](https://reactjs.org/docs/getting-started.html)
- [Reactjs Wiki](https://www.reactjs.wiki/)
- [React Patterns](https://www.patterns.dev/posts/reactjs)
