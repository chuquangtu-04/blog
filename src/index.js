import express from 'express';
import methodOverride from 'method-override';
import sortMiddleware from './app/middleware/sortMiddleware.js';
import dayjs from 'dayjs';
import Handlebars from 'handlebars';

import { engine } from 'express-handlebars';
import path from 'path';
import { db } from './config/db/index.js';
import handlebars from './helpers/handlebars.js';
import route from './routes/index.js';
const app = express();
const __dirname = path.resolve();

// app.use(morgan("combined"));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));

//customer middleware
app.use(sortMiddleware);

//Connect to db
db.connect();

app.engine(
    '.hbs',
    engine({
        extname: '.hbs',
        helpers: handlebars(dayjs, Handlebars),
    }),
);
app.set('view engine', '.hbs');
app.set('views', './src/resources/views');

app.use(express.static(path.join(__dirname, 'src', 'public')));

//Routes init
route(app);

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
