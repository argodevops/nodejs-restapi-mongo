const express = require('express');
const bodyParser = require('body-parser');
const swaggerUi = require('swagger-ui-express');
const YAML = require('yamljs');
const swaggerDocument = YAML.load('./swagger.yml');
const logger = require('./logger/api.logger');
const session = require('express-session');
const cookieParser = require('cookie-parser');

const loginRouter = require('./routes/login');
const logoutRouter = require('./routes/logout');
const bookRouter = require('./routes/book');
const booksRouter = require('./routes/books');
const pageRouter = require('./routes/page');
const createRouter = require('./routes/create');
const oncallLoginRouter = require('./routes/oncallLoginRouter');
const oncallRouter = require('./routes/oncall');
require('dotenv').config()

const path = '/oncall.identity/connect/authorize?client_id=OnCall&redirect_uri=http://localhost:3000/oncall/&response_type=code id_token&scope=openid profile oncall-auth&state=OpenIdConnect.AuthenticationProperties=YrLz1Uz3T2eE4BBg_SGlx7Zu0n0g11BT93lVQ3LLo6ElqIvsiTmk3yjcOTR1JV4yB-B7A5mBDQmG0i2BprD0lxLOqRDrtV9rQjf-XA1ahckkd8HBjzcAGwMZcU8ogMOthvwrg_BJ-CuusER2m_xvbty0YnSDpFjHUjwHWSXZy5K9fiamSyq_uHyLFVu5eGwUZ8UPMjC-x3SUbxxyXQfoOrnVgcAYRSmFZqv62_LjEmrpTR5nwXB9BMK-erO9yaau&response_mode=form_post&nonce=638048922273116310.ZWUzYmUzOGYtNjMxYi00MWNkLWFmYzctZWNkNDkyMDc2NWY1ZTkwNWYxYzMtY2U0MC00Y2JjLTkzYmMtODk3Y2Q0N2FmZGQ2&ui_locales=en-gb&x-client-SKU=ID_NET461&x-client-ver=6.8.0.0'

const app = express();
const port = process.env.PORT || 3000;
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(session({
    secret: "asecret",
    saveUninitialized:true,
    resave:true
}));

// swagger. Before logging/login middlewares.
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.get('/favicon.ico', (req, res) => res.status(204));
// couple of middlewares
app.use(logRoute);
app.use(auth);


function logRoute(req, res, next) {
    logger.info(`Requested resource: ${req.url}`)
    next();
}

function auth(req, res, next) {
    const sess = req.session;
    if (!sess || !sess.loggedIn) {
        if (req.url.includes('/oncall.identity/')) {
            next();
        } else {
            logger.info('Not logged in, redirecting to Login');
            res.redirect(req.baseUrl + path);
        }
    } else {
        next();
    }
}

// routes middlewares
app.use('/oncall.identity/', oncallLoginRouter);
app.use('/api/login', loginRouter)
app.use('/api/logout', logoutRouter);
app.use('/api/book', bookRouter);
app.use('/api/books', booksRouter);
app.use('/api/page', pageRouter);
app.use('/api/create', createRouter);
app.use('/oncall', oncallRouter);

// just basic response for basic path.
app.get('/', (req, res) => {
    res.send(`<h1>The noddy API. Of Books.</h1>`)
});

app.listen(port, () => {
    console.log(`Server listening on the port  ${port}`);
})