import express from "express";
import morgan from "morgan";
import path from "path";
import { engine } from "express-handlebars";
import flash from "connect-flash";
import session from "express-session";
import MySQLStore from "express-mysql-session";
import passport from "passport";

import helpers from "./lib/handlebars.js";
import { fileURLToPath } from 'url';
import { database } from "./keys.js";
import * as passportAuthent from './lib/passport.js';

import homeRoutes from './routes/home.routes.js';
import validationRoutes from './routes/validation.routes.js';
import userRouters from './routes/user.routes.js';
import newsRouters from './routes/news.routes.js';
import foodsRouters from './routes/food.routes.js';
import ordersRouters from './routes/orders.routes.js'


//Initialization
const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const MySQLSessionStore = MySQLStore(session);
const sessionStore = new MySQLSessionStore(database);


//middlewares
app.use(session({
    secret: 'restaupontesessionsql',
    resave: false,
    saveUninitialized: false,
    store: sessionStore
}));
app.use(flash())
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(express.static('public'));
app.use(passport.initialize());
app.use(passport.session());

// Globar variables
app.use((req, res, next) => {
    app.locals.success = req.flash('success');
    app.locals.failure = req.flash('failure');
    app.locals.user = req.user;
    next();
});

//endpoints

app.use(homeRoutes);
app.use(validationRoutes);
app.use(userRouters);
app.use(newsRouters);
app.use(foodsRouters);
app.use(ordersRouters);

//servidor
const port = process.env.PORT || 3001;
app.listen(port, () => console.log(`Servidor ${port}\nEstado: Activado`));

//settings
app.set('views', path.join(__dirname, '/views'));
app.engine('.hbs', engine({
    defaultLayout: 'main',
    layoutsDir: path.join(app.get('views'), 'layout'),
    partialsDir: path.join(app.get('views'), 'partials'),
    extname: '.hbs',
    helpers: helpers 
}));
app.set('view engine', '.hbs');