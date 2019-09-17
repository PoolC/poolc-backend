const port = 80;

let express = require('express');
let app = express();

app.use(express.static(__dirname + '/public'));

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile)

app.use('/', require('./routes/index'));
app.use('/board', require('./routes/board'));

app.get('/html', (req, res) => {
	res.send("<h1>저는 html 헤더입니다</h1>");
});

app.get('/json', (req, res) => {
	let data = {
		"data": "안녕하세요 " + req.query.name + "님",
		"name": req.query.name
	};
	res.json(data);
});

app.get('/practice', (req, res) => {
	res.render("practice.html");
});

let server = app.listen(port, () => {
	console.log("Express server has started on port " + port);
});
/*

*/
