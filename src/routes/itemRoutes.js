import { Router } from 'express';
import itemController from '../controllers/ItemController';

import loginRequired from '../middlewares/loginRequired';

const router = new Router();

router.get('/', itemController.index);
router.post('/:id', loginRequired, itemController.store);
router.put('/:id', loginRequired, itemController.update);
router.get('/:id', itemController.show);
router.delete('/:id', loginRequired, itemController.delete);

export default router;
