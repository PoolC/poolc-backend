let express = require('express');
let router = express.Router();
let models = require('../models');
let Post = models.Post;
const DataTypes = require('../models/index').Sequelize;

router.get('/', (req, res, next) => {
    Post.findAll()
        .then(result => {
            res.json(result);
        })
        .catch(err => {
            console.error(err);
            res.json({"result": "failure"});
        });
});

router.get('/:id', (req, res, next) => {
    Post.findAll({
        where: {id: req.params.id}
    })
        .then(result => {
            res.json(result);
        })
        .catch(err => {
            console.error(err);
            res.json({"result": "failure"});
        })
});

router.post('/', (req, res, next) => {
    const data = req.body;
    if(typeof data.title !== "string") {
        res.json({
            "result": "failure",
            "log": "Title for the post is required. Please look for the instructions"
        });
        return;
    }

    Post.create({
        title: data.title,
        body: data.body
    })
        .then(result => {
            res.json({"result": "success"});
        })
        .catch(err => {
            console.error(err);
            res.json({"result": "failure"});
        });
});

router.put('/', (req, res, next) => {
    const data = req.body;
    if(typeof data.id !== "number") {
        res.json({
            "result": "failure",
            "log": "Please make sure to provide the post id."
        });
        return;
    }

    Post.update({
        title: data.title,
        body: data.body,
        updatedAt: DataTypes.literal("NOW()")
    }, {
        where: {id: data.id}
    })
        .then(result => {
            res.json({"result": "success"});
        })
        .catch(err => {
            console.error(err);
            res.json({"result": "failure"});
        })
});

router.delete('/', (req, res, next) => {
    const data = req.body;
    if(data.issure !== true || typeof data.id !== "number") {
        res.json({
            "result": "no_action",
            "log": "make sure to pass 'issure' parameter and post id"
        });
        return;
    }

    Post.destroy({
        where: {id: data.id}
    })
        .then(result => {
            res.json({"result": "success"});
        })
        .catch(err => {
            console.error(err);
            res.json({"result": "failure"});
        });
});

module.exports = router;
