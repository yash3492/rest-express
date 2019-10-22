/**
 * @Author: sandeep.patel
 * @Date: 01-Jul-19, Mon
 **/

const bodyParser = require('body-parser');
const compression = require('compression');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const helmet = require('helmet');

module.exports = (app, config) => {

    // enable xssFilter, hide powered by header, Disable Caching etc.
    app.use(helmet({
        noCache: true
    }));

    // Enabling CORS
    app.use(cors());
    // Allowing proxy IP
    app.set('trust proxy', true);
    // Serving static contents,
    // Excluded from logger
    app.use(compression({ threshold: 1 }));

    app.use(function (req, res, next) {

        //  Adding response specific variable, these will be available in view file also
        res.locals.baseUrl = req.protocol + '://' + req.get('host'); //   +'/'
        res.locals.requestUrl = req.protocol + '://' + req.get('host') + req.originalUrl;

        //   adding data object for later use
        req.data = config;

        res.on('finish', function () {
            // performing cleanups...
        });

        next();
    });

    let limit = (config.REQUEST_BODY_SIZE_LIMIT || '100kb');

    // parse application/x-www-form-urlencoded
    //app.use(bodyParser.urlencoded({extended: false}));               //      required for using req.body or req.params

    // parse application/json
    app.use(bodyParser.json({ limit }));

    // cookie parser should required before session.
    // enable this only when dealing with cookies
    // app.use(cookieParser());

    // Bind routes only when all needful middleware binding is done
    try {
        const databaseInstance = require('./db-interface')(config);
        let routes = require('./routes')(app, config, databaseInstance);

        // Registering Routes
        app.use(routes);

    } catch (e) {
        console.error('route loading error', e);
        process.exit(1);
    }

    // none of route got executed, it means it's a 404
    app.all('*', function (req, res, next) {
        let err = new Error();
        err.status = 404;
        next(err);
    });

    // handling 404 errors
    app.use(function (err, req, res, next) {
        if (err.status !== 404) {
            return next(err);
        }
        err.message ? res.status(err.status).send(err.message) : res.sendStatus(err.status);
    });

    //  Error handler
    app.use(function (err, req, res, next) {
        res.writeHead(err.status || 500, {
            'Content-Type': 'text/html'
        });
        res.end(err.message || 'Internal Server Error', 'utf-8');
        console.error('error', err.message || err);
        console.error('error', (err.stack));
    });
};