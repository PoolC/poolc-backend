let express = require('express');
let router = express.Router();

router.get(['/', '/dev'], (req, res, next) => {
	res.send("board/dev");
});

router.get('/me', (req, res, next) => {
	res.send("board/me");
});

router.get('/cook', (req, res, next) => {
	res.send("board/cook");
});

router.get('/review', (req, res, next) => {
	res.send("board/review");
});

module.exports = router;
