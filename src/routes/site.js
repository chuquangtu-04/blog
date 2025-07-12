import express from 'express';
import siteController from '../app/controllers/SiteController.js';
const router = express.Router();

router.get('/search', siteController.search);
router.get('/', siteController.index);

export default router;
