# Manual de Usuario Final - Sistema de Pedidos

Bienvenido al sistema de gestión de pedidos. Esta guía te explicará paso a paso cómo registrar un nuevo pedido en nuestra plataforma.

## 📝 Guía Paso a Paso: Registrar un Nuevo Pedido

Para registrar un pedido, necesitas enviar la información a nuestro sistema. Sigue estos pasos:

1. **Prepara los datos:** Asegúrate de tener a mano tu número de identificación de usuario (ID), el nombre exacto del producto que deseas y la cantidad.
2. **Realiza la solicitud:** Utiliza una herramienta como Postman o tu navegador para enviar una petición a la dirección `http://localhost:3000/api/pedidos` usando el método `POST`.
3. **Ingresa la información:** En el cuerpo de la petición (Body), selecciona el formato JSON y escribe tus datos así:
   ```json
   {
     "usuarioId": 1,
     "producto": "Teclado Mecánico",
     "cantidad": 2
   }