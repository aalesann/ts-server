import { Router } from 'express';
import { deleteUsuario, getUsuarios, getUsuariosById, postUsuario, putUsuario } from '../controllers/usuario.controllers';

const router = Router();

router.get('/',       getUsuarios);
router.get('/:id',    getUsuariosById);
router.post('/',      postUsuario);
router.put('/:id',    putUsuario);
router.delete('/:id', deleteUsuario);

export default router;