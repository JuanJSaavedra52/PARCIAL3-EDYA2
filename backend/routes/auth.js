const express = require('express')
const router = express.Router();
const { check } = require('express-validator');
const { solicitarPedido, solicitarCoordenadas } = require('../controllers/auth');
const { validarCampos } = require('../middlewares/validar-campos');

router.post(
    '/pedido',
    [
        check('id', 'El id es obligatorio').not().isEmpty(),
        check('fecha', 'La fecha es obligatoria').not().isEmpty(),
        validarCampos
    ],
    solicitarPedido)

router.post('/coord',
    [
        check('x', 'El x es obligatorio').not().isEmpty(),
        check('y', 'El y es obligatorio').not().isEmpty(),
        check('pedido_id', 'El pedido_id es obligatorio').not().isEmpty(),
        validarCampos
    ],
    solicitarCoordenadas)

module.exports = router;