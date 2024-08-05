import { Router } from 'express';
import transactionController from '../controllers/TransactionController';

// import loginRequired from '../middlewares/loginRequired';

const router = new Router();

router.get('/', transactionController.index);
/*router.post('/', loginRequired, transactionController.store);
router.put('/:id', loginRequired, transactionController.update);
router.get('/:id', transactionController.show);
router.delete('/:id', loginRequired, transactionController.delete);*/

router.post('/', transactionController.store);
router.put('/:id', transactionController.update);
router.get('/:id', transactionController.show);
router.delete('/:id', transactionController.delete);

export default router;
