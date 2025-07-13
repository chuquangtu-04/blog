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
}
export default new courseController();
