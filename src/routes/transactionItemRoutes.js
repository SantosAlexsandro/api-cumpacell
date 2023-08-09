import { Router } from 'express';
import itemTransactionController from '../controllers/ItemTransactionController';

const router = new Router();

router.post('/', itemTransactionController.store);
router.get('/', itemTransactionController.index);


export default router;
