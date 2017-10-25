import express from 'express';
import http from 'http';
import logger from 'morgan';
import bodyParser from 'body-parser';
/**
 * set up app server
 */

const app = express();

/**
 * log request to the console
 */

app.use(logger('dev'));

/**
 * Parsing incomming request data
 */

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: false }));


/**
 * created my server using http.createServer, and passing the express server "app" as 
 * parameter
 * set port to 4000
 */
const port = parseInt(process.env.PORT, 10) || 4000;
app.set('port', port);

const server = http.createServer(app);
server.listen(port);

// require('./server/routes')(app);

app.get('*', (req, res) => res.status(200).send({ message: 'Welcome to My charting Api',
})

);

export default app;

