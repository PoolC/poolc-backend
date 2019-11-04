const port = process.env.PORT || 8080;

let models = require('./models/index');
let express = require('express');
let app = express();

models.sequelize.sync();

app.use(express.static(__dirname + '/public'));
app.use(express.json());
app.use(require('cors')());

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

app.use((req, res, next) => {
	console.log(req.method, req.url, res.status);
	next();
});

app.use('/post', require('./routes/post'));
// app.use('/board', require('./routes/board')); not in use
app.use('/', require('./routes/index'));

// 404 페이지 헨들링
app.use((req, res, next) => {
	res.status(404).send("요청하신 페이지는 존재하지 않습니다.");
});

// 500 서버 오류
app.use((err, req, res, next) => {
	console.error(err.stack);
	res.status(500).send("서버 오류가 발생하여 요청을 처리할 수 없습니다. 대단히 죄송합니다.")
});

let server = app.listen(port, () => {
	console.log("Express server has started on port " + port);
});
