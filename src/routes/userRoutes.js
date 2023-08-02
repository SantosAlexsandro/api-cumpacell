import { Router } from 'express';
import userController from '../controllers/UserController';
import loginRequired from '../middlewares/loginRequired';

const router = new Router();

// router.get('/', userController.index); // Lista de usuários - Não deveria existir
// router.get('/:id', userController.show); // Lista usuário - Não deveria existir

router.post('/', userController.store);
router.put('/', loginRequired, userController.update);
router.delete('/', loginRequired, userController.delete);

export default router;
