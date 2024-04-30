const { response } = require("express");
const bcryptjs = require('bcryptjs')


const Usuario = require("../models/usuario");


const { generarJWT } = require("../helpers/generar.jwt");

const login = async (req, res = response) => {

    const { correo, password } = req.body;
    try {

        //Verificar si el email existe
        const usuario = await Usuario.findOne({ correo });
        if (!usuario) {
            return res.status(400).json({
                msg: 'Usuario / password no son correctos - correo'
            });
        }


        //Si el usuario esta activo en mi base de datos
        if (!usuario.estado) {
            return res.status(400).json({
                msg: 'Usuario / password no son correctos - estado: false'
            });
        }


        //Verificar la contraseña
        const validarPassword = bcryptjs.compareSync(password, usuario.password);
        if (!validarPassword){
            return res.status(400).json({
                msg: 'Usuario / password no son correctos - password'
            });
        }

        //Generar el JWT
        const token = await generarJWT(usuario.id);

        res.json({
            usuario,
            token

        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            msg: 'Algo salio mal hable con el administrador'
        });
    }




}


module.exports = {
    login
}