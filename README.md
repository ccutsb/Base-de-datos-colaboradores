# Gestión de Colaboradores

Aplicación web desarrollada como proyecto del módulo "React I" para Desafío Latam, enfocada en la gestión básica de colaboradores de una empresa.

![Badge React](https://img.shields.io/badge/React-61DAFB?style=flat&logo=react&logoColor=black)
![Badge Bootstrap](https://img.shields.io/badge/Bootstrap-7952B3?style=flat&logo=bootstrap&logoColor=white)
![Badge JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)
![Badge CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)

## 📋 Descripción

Este proyecto implementa una aplicación de gestión de colaboradores que permite:

- Visualizar una lista de colaboradores con sus datos principales
- Agregar nuevos colaboradores mediante un formulario
- Buscar colaboradores por cualquier campo
- Ordenar la lista por diferentes campos
- Eliminar colaboradores
- Enviar correos directamente a los colaboradores
- Cambiar entre modo claro y oscuro

## 🚀 Características

- **Interfaz intuitiva:** Diseño moderno y responsivo adaptado a diferentes dispositivos
- **Validación de datos:** Control en el formulario para garantizar la integridad de la información
- **Renderización dinámica:** Actualización eficiente de componentes según cambios de estado
- **Modo oscuro:** Alternativa visual para mejorar la experiencia de usuario
- **Ordenamiento de datos:** Capacidad de reordenar la lista según diferentes criterios
- **Diseño responsivo:** Adaptación a diferentes tamaños de pantalla (móvil, tablet y escritorio)

## 🛠️ Tecnologías utilizadas

- **React:** Biblioteca principal para la construcción de la interfaz
- **Bootstrap:** Framework CSS para el diseño responsivo
- **JavaScript ES6+:** Lenguaje principal con características modernas
- **CSS personalizado:** Estilos adicionales para mejorar la apariencia

## 📦 Estructura del proyecto

```
src/
├── assets/
│   └── BaseColaboradores.js    # Datos iniciales de colaboradores
├── componentes/
│   ├── Buscador.jsx            # Componente para buscar colaboradores
│   ├── Formulario.jsx          # Formulario para agregar colaboradores
│   ├── Listado.jsx             # Tabla para mostrar colaboradores
│   └── Navbar.jsx              # Barra de navegación superior
├── App.css                     # Estilos principales de la aplicación
├── App.jsx                     # Componente principal
└── main.jsx                    # Punto de entrada de la aplicación
```

## 🧠 Conceptos aplicados

- Componentes funcionales de React
- Manejo de estado con useState
- Efectos secundarios con useEffect
- Renderizado condicional
- Manejo de eventos
- Levantamiento de estado (state lifting)
- Comunicación entre componentes mediante props
- Estilizado con CSS-in-JS y Bootstrap

## 🔍 Enfoque del proyecto

Este proyecto se enfoca en la implementación de los conceptos básicos de React en un caso práctico de gestión de datos, aplicando buenas prácticas de programación y diseño. La aplicación permite entender cómo funciona el flujo de datos en React y cómo se pueden construir interfaces interactivas con esta biblioteca.

## 🎓 Contexto educativo

Este proyecto forma parte del módulo "React I" del bootcamp de Desarrollo Full Stack JavaScript en Desafío Latam.

## 🏁 Objetivos de aprendizaje

- Crear componentes funcionales de React
- Implementar y gestionar estado local
- Aplicar renderización condicional
- Comunicar componentes mediante props
- Manejar formularios y eventos en React
- Implementar funcionalidades de filtrado y ordenamiento
- Aplicar estilos y diseño responsivo

---