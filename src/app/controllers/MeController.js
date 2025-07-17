import Course from '../models/Course.js';
import mongoose from '../../util/mongoose.js';

class MeController {
    async storedController(req, res, next) {
        try {
            const CoursesDeletedPromise = Course.countDocumentsWithDeleted({
                deleted: true,
            });
            const coursesPromise = Course.find({});

            const [countCoursesDeleted, courses] = await Promise.all([
                CoursesDeletedPromise,
                coursesPromise,
            ]);

            res.render('me/stored-courses', {
                countCoursesDeleted,
                courses: mongoose.multipleMongooseToObject(courses),
            });
        } catch (error) {
            next(error);
        }
    }
    async trashController(req, res, next) {
        try {
            const courses = await Course.findWithDeleted({ deleted: true });

            res.render('me/trash-courses', {
                courses: mongoose.multipleMongooseToObject(courses),
            });
        } catch (error) {
            next(error);
        }
    }
}
export default new MeController();
