import express from 'express';
import courseController from '../app/controllers/CoursesController.js';
const router = express.Router();

router.post('/store', courseController.store);
//Lưu Khóa Học DB

router.get('/:id/edit', courseController.edit);
//Sửa Khóa Học

router.delete('/:id', courseController.delete);
//delete Khóa Học trên DB

router.put('/:id', courseController.update);
//Sửa Khóa Học trên DB

router.get('/create', courseController.create);
//Đăng ký Khóa Học

router.get('/:slug', courseController.show);
//Chi Tiết Khóa Học
export default router;
