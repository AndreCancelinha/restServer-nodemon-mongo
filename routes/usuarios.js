
const {Router }= require('express');
const { usuariosGet, usuariosDelete, usuariosPatch, usuariosPut, usuariosPost } = require('../controllers/usuarios.con');

const router = Router();

router.get('/', usuariosGet);
router.post('/', usuariosPost);
router.put('/', usuariosPut);
router.patch('/', usuariosPatch);
router.delete('/', usuariosDelete);







module.exports = router;




