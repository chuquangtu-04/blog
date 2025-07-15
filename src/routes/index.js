import newsRouter from './news.js';
import siteRouter from './site.js';
import courseRouter from './courses.js';
import meController from './me.js';
function route(app) {
    app.use('/me', meController);
    app.use('/courses', courseRouter);
    app.use('/news', newsRouter);
    app.use('/', siteRouter);
}

export default route;
