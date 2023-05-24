const {mongoose, Schema, model} = require('mongoose');

const PedidoSchema = Schema({
    id: {
        type: Number,
        //require: true,
        unique: true
    },
    fecha: {
        type: String,
        //require: true
    }
},{
    toJSON: {
        virtuals: true
    },
    toObject: {
        virtuals: true
    }
});

module.exports = model('Pedidos', PedidoSchema);