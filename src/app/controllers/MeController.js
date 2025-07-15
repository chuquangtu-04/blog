import Course from '../models/Course.js';
import mongoose from '../../util/mongoose.js';

class MeController {
    async storedController(req, res) {
        try {
            const courses = await Course.find({});
            res.render('me/stored-courses', {
                courses: mongoose.multipleMongooseToObject(courses),
            });
        } catch (error) {
            next(error);
        }
    }
}
export default new MeController();
