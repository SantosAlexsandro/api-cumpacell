import { Router } from 'express';
import itemTransactionController from '../controllers/ItemTransactionController';

const router = new Router();

router.get('/', itemTransactionController.index);
router.post('/:id', itemTransactionController.store);

export default router;
