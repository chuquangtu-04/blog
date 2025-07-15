import Course from '../models/Course.js';
import mongoose from '../../util/mongoose.js';

class courseController {
    //GET Course detail
    async show(req, res) {
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
    create(req, res) {
        res.render('courses/create');
    }
    async store(req, res) {
        // res.json(req.body);
        const course = new Course(req.body);
        try {
            await course.save();
            res.redirect('/');
        } catch (err) {
            err.message; // '#sadpanda'
        }
    }
    async edit(req, res) {
        try {
            const courses = await Course.findById(req.params.id).exec();
            res.render('courses/edit', {
                courses: mongoose.mongooseToObject(courses),
            });
        } catch (error) {
            next(error);
        }
        res.render('courses/edit');
    }
    async update(req, res, next) {
        try {
            await Course.updateOne({ _id: req.params.id }, req.body);
            res.redirect('/me/stored/courses');
        } catch (error) {
            next(error);
        }
    }
}
export default new courseController();
