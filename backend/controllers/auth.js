const express = require('express')
const {validationResult} = require('express-validator');
const Pedido = require('../models/Pedido')
const Coordenada = require('../models/Coordenada')

const solicitarPedido = async (req, res = express.request) => {
    const {id, fecha} = req.body

    try {
        const pedido = new Pedido(req.body);
        await pedido.save();

        res.status(200).json({
            ok: true,
            pedido,
        })

    } catch(error) {
        console.log(error)
        res.status(500).json({
            ok: false,
            error,
        })
    }
}

const solicitarCoordenadas = async (req, res = express.request) => {
    const {x, y, pedido_id} = req.body

    try {
        const coordenada = new Coordenada(req.body);
        await coordenada.save();

        res.status(200).json({
            ok: true,
            coordenada
        })

    } catch(error) {
        console.log(error)
        res.status(500).json({
            ok: false,
            error
        })
    }
}

module.exports = {
    solicitarPedido,
    solicitarCoordenadas
}