const {mongoose, Schema, model} = require('mongoose');

const PedidoSchema = Schema({
    ped_id: {
        type: Number,
        //require: true,
        unique: true
    },
    fecha: {
        type: String,
        //require: true
    }
});

module.exports = model('Pedidos', PedidoSchema);