const {Schema, model} = require('mongoose');

const PedidoSchema = Schema({
    id: {
        type: Number,
        unique: true
    },
    fecha: {
        type: Date
    }
});

module.exports = model('Pedidos', PedidoSchema);