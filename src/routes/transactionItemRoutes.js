import { Router } from 'express';
import itemTransactionController from '../controllers/ItemTransactionController';

const router = new Router();

router.post('/', itemTransactionController.store);

export default router;
