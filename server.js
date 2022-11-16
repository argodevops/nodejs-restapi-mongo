const express = require('express');
const bodyParser = require('body-parser');
const swaggerUi = require('swagger-ui-express');
const YAML = require('yamljs');
const swaggerDocument = YAML.load('./swagger.yml');

require('dotenv').config()

const bookController = require('./controller/book.controller');
const userController = require('./controller/user.controller');

const app = express();
const port = process.env.PORT || 3000;
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.post('/api/login', (req, res) => {
    userController.loginUser(req.body.user, req.body.pass, req.body.token).then(data => res.json(data));
})

app.get('/api/login', (req, res) => {
    res.sendStatus(200);
});

app.get('/api/logout', (req, res) => {
    userController.logoutUser(req.query.user, req.query.token).then(data => res.json(data));
});

app.get('/api/books/:author', (req, res) => {
    bookController.getBooksByAuthor(req.params.author).then(data => res.json(data));
});

app.get('/api/books', (req, res) => {
    bookController.getBooks().then(data => res.json(data));
});

app.get('/api/books/:author', (req, res) => {
    bookController.getBooksByAuthor(req.params.author).then(data => res.json(data));
});

app.post('/api/book', (req, res) => {
    bookController.createBook(req.body).then(data => res.json(data));
});

app.put('/api/book', (req, res) => {
    bookController.updateBook(req.body.book).then(data => res.json(data));
});

app.get('/api/book/:id', (req, res) => {
    bookController.getBook(parseInt(req.params.id)).then(data => res.json(data));
});

app.delete('/api/book/:id', (req, res) => {
    bookController.deleteBook(parseInt(req.params.id)).then(data => res.json(data));
});

app.get('/api/page/:title', (req,res) => {
    bookController.getPage(req.params.title).then(data => res.json(data));
});

app.get('/', (req, res) => {
    res.send(`<h1>The noddy API. Of Books.</h1>`)
});

app.listen(port, () => {
    console.log(`Server listening on the port  ${port}`);
})