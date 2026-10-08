const express = require('express');
require('dotenv').config();

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 3000;

// Base de datos simulada (en memoria)
let usuarios = [{ id: 1, nombre: "Ana", email: "ana@test.com" }];
let pedidos = [
    { id: 1, usuarioId: 1, producto: "Laptop", cantidad: 1, estado: "Pendiente" },
    { id: 2, usuarioId: 1, producto: "Mouse", cantidad: 3, estado: "Pendiente" }
];

// ==========================================
// CRUD de Pedidos - Ruta base: /api/pedidos
// ==========================================

// 1. GET: Obtener TODOS los pedidos
app.get('/api/pedidos', (req, res) => {
    res.status(200).json(pedidos);
});

// 2. GET por ID: Obtener UN pedido específico
app.get('/api/pedidos/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const pedido = pedidos.find(p => p.id === id);
    
    if (!pedido) {
        return res.status(404).json({ error: "Pedido no encontrado" });
    }
    res.status(200).json(pedido);
});

// 3. POST: Crear un nuevo pedido
app.post('/api/pedidos', (req, res) => {
    const { usuarioId, producto, cantidad } = req.body;
    
    if (!usuarioId || !producto || !cantidad) {
        return res.status(400).json({ error: "Faltan datos obligatorios" });
    }
    
    const nuevoPedido = {
        id: pedidos.length + 1,
        usuarioId,
        producto,
        cantidad,
        estado: "Pendiente"
    };
    pedidos.push(nuevoPedido);
    res.status(200).json({ mensaje: "Pedido creado", pedido: nuevoPedido });
});

// 4. PUT: Editar un pedido existente
app.put('/api/pedidos/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const { producto, cantidad, estado } = req.body;
    
    const pedido = pedidos.find(p => p.id === id);
    
    if (!pedido) {
        return res.status(404).json({ error: "Pedido no encontrado" });
    }
    
    // Actualizar solo los campos que vengan en el body
    if (producto) pedido.producto = producto;
    if (cantidad) pedido.cantidad = cantidad;
    if (estado) pedido.estado = estado;
    
    res.status(200).json({ mensaje: "Pedido actualizado", pedido });
});

// 5. DELETE: Eliminar un pedido
app.delete('/api/pedidos/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const index = pedidos.findIndex(p => p.id === id);
    
    if (index === -1) {
        return res.status(404).json({ error: "Pedido no encontrado" });
    }
    
    const pedidoEliminado = pedidos.splice(index, 1)[0];
    res.status(200).json({ mensaje: "Pedido eliminado", pedido: pedidoEliminado });
});

// ==========================================
// Endpoint extra: Pedidos por Usuario
// ==========================================
app.get('/api/usuarios/:id/pedidos', (req, res) => {
    const usuarioId = parseInt(req.params.id);
    const pedidosUsuario = pedidos.filter(p => p.usuarioId === usuarioId);
    res.status(200).json(pedidosUsuario);
});

app.listen(PORT, () => {
    console.log(`Servidor corriendo en puerto ${PORT}`);
});