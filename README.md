# 🍕 Pancho Restaurant - Sitio Web

Un sitio web moderno y responsivo para el restaurante Pancho, especializado en prepizzas y pizzas artesanales.

## 🚀 Características

- **Diseño Moderno**: Interfaz limpia y atractiva con gradientes y animaciones
- **Totalmente Responsivo**: Optimizado para dispositivos móviles, tablets y desktop
- **Integración WhatsApp**: Botones flotantes y de pedido que abren WhatsApp directamente
- **Animaciones Suaves**: Efectos de scroll, hover y transiciones fluidas
- **SEO Optimizado**: Estructura semántica y meta tags apropiados

## 📁 Estructura del Proyecto

```
pancho-restaurant/
├── app.py                 # Aplicación principal de Flask
├── requirements.txt       # Dependencias de Python
├── README.md             # Este archivo
├── templates/            # Plantillas HTML
│   ├── base.html         # Plantilla base
│   └── menu.html         # Página principal del menú
└── static/               # Archivos estáticos
    ├── css/
    │   └── styles.css    # Estilos CSS
    └── js/
        └── script.js     # JavaScript interactivo
```

## 🛠️ Instalación y Uso

### Prerrequisitos
- Python 3.7 o superior
- pip (gestor de paquetes de Python)

### Pasos de Instalación

1. **Clonar o descargar el proyecto**
   ```bash
   cd pancho-restaurant
   ```

2. **Crear un entorno virtual (recomendado)**
   ```bash
   python -m venv venv
   
   # En Windows:
   venv\Scripts\activate
   
   # En macOS/Linux:
   source venv/bin/activate
   ```

3. **Instalar dependencias**
   ```bash
   pip install -r requirements.txt
   ```

4. **Ejecutar la aplicación**
   ```bash
   flask run
   ```

5. **Abrir en el navegador**
   ```
   http://localhost:5000
   ```

## 🎨 Características del Diseño

### Colores Principales
- **Naranja Principal**: #ff6b35
- **Naranja Secundario**: #f7931e
- **Verde WhatsApp**: #25d366
- **Gris Oscuro**: #2c3e50

### Tipografía
- **Fuente Principal**: Inter (Google Fonts)
- **Pesos**: 300, 400, 500, 600, 700

### Componentes
- **Header**: Logo con las iniciales "PP" y navegación sticky
- **Hero**: Imagen principal con texto de bienvenida
- **Productos**: Cards con imágenes, precios y botones de pedido
- **Footer**: Información de contacto, horarios y enlaces sociales

## 📱 Funcionalidades

### Botones de WhatsApp
- **Botón Flotante**: Esquina inferior derecha, siempre visible
- **Botones de Pedido**: En cada producto, con mensaje prellenado
- **Enlace del Desarrollador**: En el footer para contacto profesional

### Animaciones
- **Scroll Suave**: Navegación fluida entre secciones
- **Efectos Hover**: Interacciones visuales en botones y cards
- **Parallax**: Efecto de profundidad en el hero
- **Partículas**: Elementos flotantes decorativos
- **Typing Effect**: Animación de escritura en el título

### Responsive Design
- **Mobile First**: Optimizado para dispositivos móviles
- **Breakpoints**: 768px y 480px para tablets y móviles
- **Grid Adaptativo**: Layout que se ajusta automáticamente

## 🔧 Personalización

### Cambiar Productos
Editar el archivo `templates/menu.html` en la sección de productos:

```html
<div class="product-card">
    <div class="product-image">
        <img src="URL_DE_IMAGEN" alt="Nombre del Producto">
    </div>
    <div class="product-info">
        <h3>Nombre del Producto</h3>
        <p class="price">$PRECIO</p>
        <button class="order-btn" onclick="openWhatsApp('Producto - $PRECIO')">
            <i class="fas fa-shopping-cart"></i>
            Pedir Ahora
        </button>
    </div>
</div>
```

### Cambiar Números de WhatsApp
Editar en `static/js/script.js`:

```javascript
function openWhatsApp(product) {
    const message = `Hola me llamo ________, me gustaria hacerte un pedido de ${product}`;
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/NUMERO_DE_TELEFONO?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
}
```

### Cambiar Colores
Editar en `static/css/styles.css` las variables CSS:

```css
:root {
    --primary-color: #ff6b35;
    --secondary-color: #f7931e;
    --whatsapp-color: #25d366;
}
```

## 📞 Contacto

- **Restaurante**: [WhatsApp](https://wa.me/5491159231455)
- **Instagram**: [@fp.prepizzas](https://www.instagram.com/fp.prepizzas/)
- **Desarrollador**: [@nasc_dev](https://wa.me/5491146737100)
- **Portfolio**: [Mi Página Web](https://mipropiapaginaweb.onrender.com/)

## 📄 Licencia

© 2025 Pancho Restaurant. Todos los derechos reservados.

---

**Desarrollado con ❤️ por @nasc_dev**
