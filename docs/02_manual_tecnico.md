# Manual Técnico y Modelado de Datos

## 1. Diccionario de Datos

### Tabla: Usuarios
| Campo | Tipo de Dato | Descripción | Restricciones |
| :--- | :--- | :--- | :--- |
| `id` | Integer | Identificador único del usuario | PK, Auto-incremental |
| `nombre` | String | Nombre completo del usuario | NOT NULL |
| `email` | String | Correo electrónico de contacto | NOT NULL, UNIQUE |

### Tabla: Pedidos
| Campo | Tipo de Dato | Descripción | Restricciones |
| :--- | :--- | :--- | :--- |
| `id` | Integer | Identificador único del pedido | PK, Auto-incremental |
| `usuarioId` | Integer | ID del usuario que realiza el pedido | FK -> Usuarios.id, NOT NULL |
| `producto` | String | Nombre del producto solicitado | NOT NULL |
| `cantidad` | Integer | Cantidad de unidades del producto | NOT NULL, > 0 |
| `estado` | String | Estado actual del pedido | Default: 'Pendiente' |

## 2. Documentación de Endpoints (API REST)

### Endpoint 1: Crear Pedido
- **Método:** `POST`
- **Ruta:** `/api/pedidos`
- **Payload JSON de Entrada:**
  ```json
  {
    "usuarioId": 1,
    "producto": "Laptop",
    "cantidad": 1
  }