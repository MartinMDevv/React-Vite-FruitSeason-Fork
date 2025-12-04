# 🍓 FruitSeason - React Web Application

Aplicación web moderna de suscripción de frutas y verduras frescas desarrollada con React + Vite. Versión 2.0 del proyecto, migrada completamente a React con integración al backend Spring Boot y funcionalidades avanzadas de e-commerce.

## 📋 Descripción del Proyecto

FruitSeason React es la evolución completa del proyecto web original, ahora construida como una Single Page Application (SPA) profesional. Ofrece un sistema completo de suscripciones con autenticación de usuarios, carrito de compras persistente, selección personalizada de frutas por temporada y procesamiento de pagos. Se conecta a un backend RESTful en Spring Boot y está preparada para despliegue en AWS EC2 con RDS MySQL.

## 🛠️ Tecnologías Utilizadas

### Frontend Core
- **React 19.1.1**: Librería de UI con hooks modernos
- **Vite 7.x** (Rolldown): Build tool ultrarrápido para desarrollo y producción
- **React Router DOM 7.9.4**: Navegación SPA con rutas dinámicas
- **React Hook Form 7.65.0**: Gestión eficiente de formularios con validación

### UI & Styling
- **Bootstrap 5.3.8**: Framework CSS responsivo
- **React Bootstrap 2.10.10**: Componentes de Bootstrap para React
- **React Toastify 11.0.5**: Notificaciones toast elegantes
- **CSS Modules**: Estilos personalizados con Google Fonts (Poppins)

### State Management & API
- **Context API**: Manejo de estado global (Auth + Cart)
- **Fetch API**: Comunicación HTTP con el backend
- **LocalStorage**: Persistencia de sesión y tokens

### Testing
- **Vitest 3.2.4**: Framework de testing ultrarrápido
- **@testing-library/react 16.3.0**: Testing de componentes React
- **@testing-library/user-event**: Simulación de interacciones
- **jsdom 27.0.1**: Entorno DOM para tests
- **@vitest/coverage-v8**: Cobertura de código

### Code Quality
- **ESLint 9.36**: Linter con reglas para React
- **eslint-plugin-react-hooks**: Reglas específicas para hooks
- **eslint-plugin-react-refresh**: Soporte para Fast Refresh

## 📦 Requisitos Previos

Para ejecutar este proyecto necesitas:

### Software Requerido
- **Node.js 20.x o superior**
- **npm 9.x o yarn 1.22+**
- **Git**
- **Backend FoodHub** ejecutándose en `http://localhost:8080` (ver repositorio backend)

### Opcional para Desarrollo
- **VS Code** con extensiones:
  - ES7+ React/Redux/React-Native snippets
  - ESLint
  - Prettier

## 🚀 Instalación y Configuración

### 1. Clonar el Repositorio

```bash
git clone https://github.com/tu-usuario/fruitseason-react.git
cd fruitseason-react
```

### 2. Instalar Dependencias

```bash
npm install
# o
yarn install
```

### 3. Configurar Variables de Entorno

Crea un archivo `.env` en la raíz del proyecto:

```env
# Backend API URL
VITE_API_BASE_URL=http://localhost:8080/api
```

Para producción (AWS EC2):
```env
VITE_API_BASE_URL=https://tu-dominio-ec2.compute.amazonaws.com/api
```

### 4. Verificar Backend

Asegúrate de que el backend esté corriendo:
```bash
# En el proyecto backend
./gradlew bootRun
```

El backend debe estar disponible en `http://localhost:8080`

### 5. Ejecutar en Desarrollo

```bash
npm run dev
# o
yarn dev
```

La aplicación estará disponible en `http://localhost:5173`

### 6. Compilar para Producción

```bash
npm run build
# o
yarn build
```

Los archivos optimizados se generarán en la carpeta `dist/`

### 7. Vista Previa de Producción

```bash
npm run preview
# o
yarn preview
```

## 📁 Estructura del Proyecto

```
fruitseason-react/
│
├── public/                      # Archivos estáticos
│   ├── img/                    # Imágenes del sitio
│   │   ├── carousel1.jpeg
│   │   ├── productos/          # Imágenes por temporada
│   │   └── equipoSeasonFruit.png
│   └── vite.svg
│
├── src/
│   ├── components/             # Componentes reutilizables
│   │   ├── Alert.jsx
│   │   ├── Carousel.jsx
│   │   ├── CartOffcanvas.jsx  # Carrito lateral
│   │   ├── Footer.jsx
│   │   ├── FruitCard.jsx
│   │   ├── FruitList.jsx
│   │   ├── FruitSelector.jsx  # Selector de frutas por plan
│   │   ├── Header.jsx
│   │   ├── MapSection.jsx
│   │   ├── Proposal.jsx
│   │   ├── QuienesSomos.jsx
│   │   ├── SubscriptionCard.jsx
│   │   └── Subscriptions.jsx
│   │
│   ├── context/                # Context API para estado global
│   │   ├── AuthContext.jsx    # Autenticación y usuario
│   │   └── CartContext.jsx    # Carrito de compras
│   │
│   ├── data/
│   │   └── products.js        # Datos de frutas por temporada
│   │
│   ├── pages/                 # Páginas/Rutas principales
│   │   ├── Home.jsx
│   │   ├── Login.jsx
│   │   ├── Register.jsx
│   │   ├── Productos.jsx
│   │   ├── PagarPlanes.jsx
│   │   └── SubscriptionsPage.jsx
│   │
│   ├── services/
│   │   └── api.js             # Cliente HTTP para backend
│   │
│   ├── utils/
│   │   └── mappings.js        # Mapeo frontend ↔ backend
│   │
│   ├── App.jsx                # Componente raíz con rutas
│   ├── App.css                # Estilos globales
│   └── main.jsx               # Punto de entrada
│
├── tests/                     # Pruebas unitarias
│   ├── Alert.test.jsx
│   ├── FruitCard.test.jsx
│   ├── FruitList.test.jsx
│   ├── Login.test.jsx
│   ├── PagarPlanes.test.jsx
│   ├── SubscriptionCard.test.jsx
│   └── setup.js
│
├── .env                       # Variables de entorno (no commitear)
├── .env.example               # Ejemplo de configuración
├── .gitignore
├── eslint.config.js           # Configuración de ESLint
├── index.html                 # HTML base
├── package.json               # Dependencias y scripts
├── vite.config.js             # Configuración de Vite
└── README.md
```

## 🎯 Funcionalidades Implementadas

### 🔐 Sistema de Autenticación
- ✅ **Registro de usuarios** con validación de formulario
- ✅ **Login seguro** con JWT tokens
- ✅ **Persistencia de sesión** en LocalStorage
- ✅ **Context API** para estado global del usuario
- ✅ **Rutas protegidas** que requieren autenticación
- ✅ **Logout** con limpieza de datos

### 🛒 Carrito de Compras
- ✅ **Carrito persistente** sincronizado con backend
- ✅ **Offcanvas lateral** para visualización rápida
- ✅ **Badge de contador** en el header
- ✅ **Añadir/eliminar planes** del carrito
- ✅ **Sincronización automática** con la API

### 🍎 Selección de Frutas
- ✅ **Selector visual de frutas** por plan
- ✅ **Límites dinámicos** según el plan elegido
  - Básico: 4 frutas
  - Familiar: 8 frutas
  - Premium: 12 frutas
- ✅ **Imágenes de frutas** de temporada
- ✅ **Validación de selección completa**
- ✅ **Persistencia en backend**

### 💳 Sistema de Pagos
- ✅ **Formulario de pago** con validación
- ✅ **Resumen del pedido** con frutas seleccionadas
- ✅ **Validación de campos**:
  - Nombre (solo letras)
  - Número de tarjeta (13-19 dígitos)
- ✅ **Procesamiento de órdenes** en backend
- ✅ **Confirmación visual** del pago
- ✅ **Limpieza automática** del carrito tras compra

### 📦 Catálogo de Productos
- ✅ **Productos organizados por temporada**:
  - 🌸 Primavera (5 productos)
  - ☀️ Verano (5 productos)
  - 🍂 Otoño (5 productos)
  - ❄️ Invierno (5 productos)
- ✅ **Imágenes reales** de cada producto
- ✅ **Diseño responsive** tipo grid
- ✅ **Cards con información** de cada fruta

### 📱 Interfaz de Usuario
- ✅ **Diseño 100% responsivo** (mobile-first)
- ✅ **Navegación suave** con scroll automático
- ✅ **Carrusel de ofertas** con Bootstrap
- ✅ **Notificaciones toast** elegantes
- ✅ **Loading states** durante operaciones
- ✅ **Feedback visual** en formularios
- ✅ **Navbar fijo** con dropdown de usuario

### 💬 Contacto y Comentarios
- ✅ **Formulario de comentarios** en footer
- ✅ **Validación de email y texto**
- ✅ **Envío al backend** para almacenamiento
- ✅ **Confirmación visual** de envío

### 🗺️ Información Corporativa
- ✅ **Sección "Quiénes Somos"** con historia
- ✅ **Misión, Visión, Valores**
- ✅ **Google Maps integrado** con ubicación
- ✅ **Información de contacto**

## 🧪 Testing

### Ejecutar Tests

```bash
# Ejecutar todos los tests
npm run test
# o
yarn test

# Ejecutar en modo watch
npm run test:watch

# Generar reporte de cobertura
npm run test:coverage
```

### Tests Implementados

#### Componentes
- **Alert**: Renderizado condicional y tipos de alertas
- **FruitCard**: Visualización de información de frutas
- **FruitList**: Listado múltiple de frutas
- **SubscriptionCard**: Datos del plan y botón de suscripción

#### Páginas
- **Login**: Validación de campos y errores
- **PagarPlanes**: Formulario de pago y confirmación

### Cobertura de Tests
```
Test Files  6 passed (6)
Tests       10 passed (10)
Start at    [timestamp]
Duration    [duration]
```

## 🔌 Integración con Backend

### Endpoints Consumidos

#### Auth
```javascript
POST   /api/auth/register    - Registro de usuario
POST   /api/auth/login       - Inicio de sesión
```

#### Cart
```javascript
GET    /api/cart             - Obtener carrito
POST   /api/cart/select-plan - Seleccionar plan
POST   /api/cart/add-fruit   - Añadir fruta
DELETE /api/cart/remove-fruit - Eliminar fruta
DELETE /api/cart/clear       - Vaciar carrito
GET    /api/cart/available-fruits - Frutas disponibles
```

#### Orders
```javascript
POST   /api/orders/checkout  - Procesar pago
GET    /api/orders           - Historial de órdenes
```

#### Comments
```javascript
POST   /api/comments         - Crear comentario
GET    /api/comments         - Listar comentarios
```

### Mapeo de Datos

El proyecto incluye un sistema de mapeo entre frontend y backend:

```javascript
// Frontend → Backend
'basico' → 'BASIC'
'Manzana' → 'MANZANA'

// Backend → Frontend
'BASIC' → 'basico'
'MANZANA' → 'Manzana'
```

Ver `src/utils/mappings.js` para detalles completos.

## 🎨 Características de Diseño

### Paleta de Colores
- **Verde Principal**: `#2e8b57` → `#3cb371` (gradiente)
- **Verde Bootstrap**: `#198754`
- **Blanco**: Contraste y legibilidad
- **Sombras**: `shadow-sm` para profundidad

### Tipografía
- **Familia**: Poppins (Google Fonts)
- **Pesos**: 400 (Regular), 500 (Medium), 700 (Bold)

### Efectos Visuales
- Gradientes en navbar y footer
- Overlay oscuro (40%) en hero section
- Transiciones suaves en hover
- Toasts con animaciones
- Loading spinners durante operaciones

## 📱 Responsive Design

### Breakpoints
- **Mobile** (< 768px): 2 columnas de productos, menú hamburguesa
- **Tablet** (768px - 991px): 3-4 columnas, navegación adaptada
- **Desktop** (992px+): 5 columnas, layout completo

### Optimizaciones Mobile
- Carrusel de 250px en móviles
- Botones full-width en formularios
- Offcanvas para carrito
- Imágenes optimizadas

## 🌐 Despliegue en AWS

### Preparación para AWS EC2

1. **Compilar el proyecto**:
```bash
npm run build
```

2. **Configurar variables de entorno** en EC2:
```env
VITE_API_BASE_URL=https://tu-backend-ec2.amazonaws.com/api
```

3. **Servir archivos estáticos** con Nginx o Apache:
```nginx
server {
    listen 80;
    server_name tu-dominio.com;
    root /var/www/fruitseason/dist;
    
    location / {
        try_files $uri $uri/ /index.html;
    }
}
```

4. **Configurar CORS** en el backend para permitir origen del frontend

### Conectar con Backend en RDS

El backend debe configurar su `application.properties`:
```properties
spring.datasource.url=jdbc:mysql://tu-rds-endpoint.amazonaws.com:3306/foodhub_db
spring.datasource.username=admin
spring.datasource.password=${RDS_PASSWORD}
```

## 👥 Desarrollo

Proyecto desarrollado como parte del curso de Desarrollo Fullstack 2.

**Repositorio Backend**: [FoodHub Backend](enlace-al-backend)

## 📚 Aprendizajes del Proyecto

### React Moderno
- **Hooks avanzados**: useState, useEffect, useContext, useNavigate
- **Context API**: Gestión de estado global sin Redux
- **Custom Hooks**: Creación de hooks reutilizables (useAuth, useCart)
- **React Router v7**: Navegación SPA con rutas dinámicas y parámetros

### Gestión de Estado
- **Context Providers**: AuthProvider y CartProvider
- **Sincronización con API**: Actualización automática del estado
- **LocalStorage**: Persistencia de tokens y sesión
- **Estado optimista**: Actualización UI antes de confirmar con servidor

### Formularios y Validación
- **React Hook Form**: Validación declarativa eficiente
- **Validación personalizada**: Regex para campos específicos
- **Manejo de errores**: Mensajes descriptivos por campo
- **UX mejorada**: Loading states y feedback inmediato

### Comunicación HTTP
- **Fetch API**: Peticiones asíncronas al backend
- **Manejo de errores**: Try-catch y respuestas de error
- **Interceptores**: Headers de autenticación automáticos
- **Transformación de datos**: Mapeo frontend ↔ backend

### Testing en React
- **Vitest**: Testing ultrarrápido para React
- **Testing Library**: Testing centrado en el usuario
- **Mocks**: Simulación de contextos y APIs
- **Cobertura**: Medición de calidad del código

### Arquitectura de Componentes
- **Componentes reutilizables**: Alert, Card, Selector
- **Composición**: Combinación de componentes pequeños
- **Props drilling vs Context**: Cuándo usar cada uno
- **Separación de responsabilidades**: UI vs Lógica

### Performance y Optimización
- **Vite + Rolldown**: Build ultrarrápido
- **Code splitting**: Carga bajo demanda
- **Lazy loading**: Imágenes y rutas
- **Memoización**: Prevención de re-renders innecesarios

### UX/UI Avanzada
- **Offcanvas**: Paneles laterales para carrito
- **Toasts**: Notificaciones no intrusivas
- **Loading states**: Spinners y estados de carga
- **Validación en tiempo real**: Feedback instantáneo

### Integración Backend
- **API RESTful**: Consumo de endpoints REST
- **JWT**: Autenticación basada en tokens
- **CORS**: Configuración de orígenes permitidos
- **Estado compartido**: Sincronización carrito frontend-backend

### DevOps y Deployment
- **Variables de entorno**: Configuración por ambiente
- **Build process**: Optimización para producción
- **AWS EC2**: Despliegue en infraestructura cloud
- **Nginx**: Servidor web para SPA

## 🔄 Posibles Mejoras Futuras

### Funcionalidades
- [ ] Historial completo de pedidos por usuario
- [ ] Sistema de favoritos para frutas
- [ ] Recomendaciones personalizadas según historial
- [ ] Cupones y descuentos
- [ ] Programa de referidos
- [ ] Notificaciones push
- [ ] Chat en vivo con soporte
- [ ] Calendario de entregas

### UX/UI
- [ ] Animaciones con Framer Motion
- [ ] Modo oscuro
- [ ] PWA (Progressive Web App)
- [ ] Drag & drop para ordenar frutas
- [ ] Vista previa 3D de cajas
- [ ] Filtros avanzados de productos
- [ ] Comparador de planes

### Testing
- [ ] Tests de integración E2E con Playwright
- [ ] Tests de componentes visuales con Storybook
- [ ] Aumentar cobertura a 90%+
- [ ] Tests de performance con Lighthouse
- [ ] Tests de accesibilidad

### Performance
- [ ] Implementar React Query para caching
- [ ] Service Workers para offline
- [ ] Optimización de imágenes con CDN
- [ ] Lazy loading de rutas
- [ ] Reducción de bundle size

### Seguridad
- [ ] Implementar refresh tokens
- [ ] Rate limiting en peticiones
- [ ] Validación de contenido contra XSS
- [ ] HTTPS obligatorio
- [ ] CSP (Content Security Policy)

## 🐛 Solución de Problemas

### Error: "Cannot connect to backend"
- Verifica que el backend esté corriendo en `http://localhost:8080`
- Revisa la configuración de `.env`
- Comprueba CORS en el backend

### Error: "Token expired"
- Cierra sesión y vuelve a iniciar
- Limpia LocalStorage: `localStorage.clear()`

### Error: "Cannot read property of undefined"
- Verifica que el contexto esté envolviendo los componentes
- Revisa que los datos del backend tengan el formato esperado

### Tests fallan
- Ejecuta `npm install` de nuevo
- Verifica que jsdom esté instalado
- Revisa la configuración de Vitest

## 📄 Scripts Disponibles

```json
{
  "dev": "vite",                    // Desarrollo con HMR
  "build": "vite build",            // Build de producción
  "preview": "vite preview",        // Vista previa del build
  "lint": "eslint .",               // Ejecutar linter
  "test": "vitest",                 // Tests en modo watch
  "test:ui": "vitest --ui",         // UI interactiva de tests
  "test:coverage": "vitest --coverage"  // Cobertura de código
}
```

## 📞 Contacto

Para consultas o sugerencias:
- **Email**: martindevalvarez@gmail.com
- **GitHub**: [Repositorio del proyecto](tu-repo-url)

## 📄 Licencia

Este proyecto es de código abierto y está disponible bajo la licencia MIT.

---

⭐ **Proyecto Semestral - Desarrollo Fullstack 2** | Versión React 2.0 con integración completa al backend | Si te gustó, no olvides darle una estrella en GitHub

## 🏆 Logros del Proyecto

- ✅ Migración exitosa de vanilla JS a React moderno
- ✅ Integración completa con backend Spring Boot
- ✅ Sistema de autenticación funcional con JWT
- ✅ Carrito persistente sincronizado
- ✅ 10+ pruebas unitarias implementadas
- ✅ Diseño 100% responsive
- ✅ Preparado para despliegue en AWS EC2
