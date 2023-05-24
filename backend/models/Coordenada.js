const {Schema, model} = require('mongoose');

const CoordenadaSchema = Schema ({
    x: {
        type: Number
    },
    y: {
        type: Number
    },
    pedido_id: {
        type: Number,
        unique: true
    }
});

module.exports = model('Coordenada', CoordenadaSchema);