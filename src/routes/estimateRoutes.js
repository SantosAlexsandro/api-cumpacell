import { Router } from 'express';
import estimateController from '../controllers/EstimateController';

const router = new Router();

router.get('/', estimateController.index);
router.post('/', estimateController.store);
router.put('/', estimateController.update);
router.get('/', estimateController.show);
router.delete('/', estimateController.delete);

export default router;
