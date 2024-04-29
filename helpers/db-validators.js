const Role = require('../models/rolee');
const Usuario = require('../models/usuario');



const esRolValido = async (rol = '') => {


    const existeRol = await Role.findOne({ rol });
    if (!existeRol) {
        throw new Error(` El rol ${rol} no está registrado en la BD`);
    }
}
const emailExiste = async (correo = '') => {

//Verifica si el correo existe
    const existeEmail = await Usuario.findOne({ correo });
    if (existeEmail) {
      throw new Error(`El correo ${correo} ya esta registrado`);
    }
}
const existeUsuarioPoriD = async (id) => {

//Verifica si el correo existe
    const existeUsuario = await Usuario.findById(id);
    if (!existeUsuario) {
      throw new Error(`El id no existe ${id}`);
    }
}


module.exports = {
    esRolValido,
    emailExiste,
    existeUsuarioPoriD
}