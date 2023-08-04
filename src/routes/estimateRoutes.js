import { Router } from 'express';
import estimateController from '../controllers/EstimateController';

const router = new Router();

router.get('/', estimateController.index);
router.post('/', estimateController.store);

export default router;
