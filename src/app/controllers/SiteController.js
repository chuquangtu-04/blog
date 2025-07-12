import Course from '../models/Course.js';
import mongoose from '../../util/mongoose.js';

class SiteController {
    //GET /
    async index(req, res) {
        try {
            const courses = await Course.find({});
            res.render('home', {
                courses: mongoose.multipleMongooseToObject(courses),
            });
        } catch (error) {
            next(error);
        }
    }
    //GET search
    search(req, res) {
        res.render('search');
    }
}
export default new SiteController();
