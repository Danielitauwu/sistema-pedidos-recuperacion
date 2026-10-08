# Especificación de Requisitos de Software (SRS)

## 1. Requisitos Funcionales (RF)
1. **RF-01:** El sistema debe permitir a un usuario registrar un nuevo pedido proporcionando su ID de usuario, el nombre del producto y la cantidad.
2. **RF-02:** El sistema debe permitir consultar todos los pedidos asociados a un usuario específico mediante su ID.
3. **RF-03:** El sistema debe asignar automáticamente un estado inicial de "Pendiente" a todo pedido nuevo.

## 2. Requisitos No Funcionales (RNF)
1. **RNF-01 (Rendimiento):** La API debe responder a las peticiones HTTP en un tiempo menor a 500ms bajo condiciones normales de carga.
2. **RNF-02 (Seguridad):** Las variables de configuración sensibles (como el puerto) deben gestionarse a través de variables de entorno, no hardcodeadas en el código fuente.

## 3. Historias de Usuario y Criterios de Aceptación (Gherkin)

### Historia de Usuario 1: Registro de Pedido
**Como** cliente de la tienda,
**Quiero** registrar un nuevo pedido en el sistema,
**Para** poder adquirir los productos que necesito.

**Criterios de Aceptación:**
```gherkin
Escenario: Registro exitoso de un pedido
  Dado que el usuario proporciona un ID de usuario válido, un producto y una cantidad mayor a 0
  Cuando envía una petición POST a /api/pedidos con los datos correctos
  Entonces el sistema debe responder con un código HTTP 200
  Y debe retornar un mensaje de "Pedido creado" junto con los datos del pedido generado

Escenario: Registro fallido por datos incompletos
  Dado que el usuario omite el campo "producto" o "cantidad"
  Cuando envía una petición POST a /api/pedidos
  Entonces el sistema debe responder con un código HTTP 400
  Y debe retornar un mensaje de error indicando "Faltan datos obligatorios"