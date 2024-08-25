import { Router } from 'express';
import entityController from '../controllers/EntityController';
import loginRequired from '../middlewares/loginRequired';

const router = new Router();

router.get('/', entityController.index); // Lista de usuários - Não deveria existir
// router.get('/:id', entityController.show); // Lista usuário - Não deveria existir
router.post('/', entityController.store);
router.put('/', loginRequired, entityController.update);
router.delete('/', loginRequired, entityController.delete);

export default router;
