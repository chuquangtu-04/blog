import express from 'express';
import dayjs from 'dayjs';
import methodOverride from 'method-override';

import { engine } from 'express-handlebars';
import path from 'path';
import { db } from './config/db/index.js';
import route from './routes/index.js';
const app = express();
const __dirname = path.resolve();

// app.use(morgan("combined"));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));

//Connect to db
db.connect();

app.engine(
    '.hbs',
    engine({
        extname: '.hbs',
        helpers: {
            count: (aString) => aString + 1,
            formatDate: (date) => dayjs(date).format('DD/MM/YYYY HH:mm:ss'),
        },
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
