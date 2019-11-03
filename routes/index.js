let express = require('express');
let router = express.Router();

router.get('/', (req, res, next) => {
	res.render('index.html');
});

router.get('/html', (req, res) => {
	res.send("<h1>저는 html 헤더입니다</h1>");
});

router.get('/json', (req, res) => {
	let data = {
		"data": "안녕하세요 " + req.query.name + "님",
		"name": req.query.name
	};
	res.json(data);
});

router.get('/practice', (req, res) => {
	res.render("practice.html");
});

module.exports = router;
