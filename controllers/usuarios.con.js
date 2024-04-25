
const { response } = require('express');



const usuariosGet = (req, res = response) => {

    res.json({
        msg: 'get API - controlador'
    });
}
const usuariosPost = (req, res = response) => {
 
    const body = req.body;

    res.json({
        msg: 'get POST - controlador',
        body
    });
}
const usuariosPut = (req, res = response) => {

    res.json({
        msg: 'get PUT - controlador'
    });
}
const usuariosPatch = (req, res = response) => {

    res.json({
        msg: 'get PATCH - controlador'
    }); 
}
const usuariosDelete = (req, res = response) => {

    res.json({
        msg: 'get DELETE - controlador'
    });
}



module.exports = {

    usuariosGet,
    usuariosPost,
    usuariosPut,
    usuariosPatch,
    usuariosDelete
}