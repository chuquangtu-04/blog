import Course from '../models/Course.js';
import mongoose from '../../util/mongoose.js';

class courseController {
    //GET Course detail
    async show(req, res, next) {
        try {
            const detail_course = await Course.findOne({
                slug: req.params.slug,
            }).exec();
            res.render('courses/detail_Course', {
                detail_course: mongoose.mongooseToObject(detail_course),
            });
        } catch (error) {
            next(error);
        }
    }
    create(req, res, next) {
        res.render('courses/create');
    }
    async store(req, res, next) {
        try {
            const course = new Course(req.body);
            await course.save();
            res.redirect('/');
        } catch (error) {
            next(error);
        }
    }
    async edit(req, res, next) {
        try {
            const courses = await Course.findById(req.params.id).exec();
            res.render('courses/edit', {
                courses: mongoose.mongooseToObject(courses),
            });
        } catch (error) {
            next(error);
        }
    }
    async update(req, res, next) {
        try {
            await Course.updateOne({ _id: req.params.id }, req.body);
            res.redirect('/me/stored/courses');
        } catch (error) {
            next(error);
        }
    }

    async delete(req, res, next) {
        try {
            await Course.deleteOne({ _id: req.params.id });
            res.redirect('back');
        } catch (error) {
            next(error);
        }
    }
}
export default new courseController();
