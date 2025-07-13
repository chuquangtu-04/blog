import express from 'express';
import courseController from '../app/controllers/CoursesController.js';
const router = express.Router();

router.post('/store', courseController.store);
router.get('/create', courseController.create);
router.get('/:slug', courseController.show);
export default router;
