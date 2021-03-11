var express = require('express');
const multer = require('multer');
const path = require('path')

var router = express.Router();
const articleModel = require('../lib/models/articleModel')
const uploader = multer({
    dest: path.join(path.dirname(__dirname), 'public', 'images') // 配置图片存入地址
})
router.get('/', (req, res, next) => {
    articleModel.find({}, (err, article) => {
        if (!err) {
            res.send(article)
        }
    })
})
// 新增文章
router.post('/addArticles', uploader.single('photoImg'), (req, res) => {
    // console.log('图片地址:', req.file) // 获取图片 files获取多张图片
    // console.log(req.body) // 获取其他参数
    console.log(req.body.title, req.body.context, req.file.path)
    // articleModel.insertOne({
    //     title: req.body.title,
    //     context: req.body.context,
    //     imgSrc: req.file.path + '.' + req.file.originalname.split('.')[1]
    // })
})
module.exports = router