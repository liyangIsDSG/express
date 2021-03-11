const express = require('express');
const multer = require('multer');
const path = require('path')
const router = express.Router();
const articleModel = require('../lib/models/articleModel')

let imgName = ''
//  multer.diskStorage配置保存目录以及文件保存名
const storage = multer.diskStorage({
    destination(req, file, cb) {
        // 处理上传文件所存放的目录
        cb(null, './public/images')
    },
    filename(req, file, cb) {
        // 处理上传文件所存文件的名称
        // 文件名 = 时间戳 + 后缀
        let ext = getExt(file.originalname)
        let realName = (new Date()).getTime() + '.' + ext
        cb(null, realName)
        imgName = 'http://younglee666.com:8090/public/images/' + realName
    }
})

const upload = multer({
    storage: storage
}).single('photoImg')

// 获取文章
router.get('/', (req, res, next) => {
    articleModel.find({}, (err, article) => {
        if (!err) {

            res.send(article)
        }
    })
})

// 新增文章
router.post('/addArticles', (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    upload(req, res, function (err) {
        if (err instanceof multer.MulterError) {
            // A Multer error occurred when uploading.
        } else if (err) {
            // An unknown error occurred when uploading.
        }
        // console.log(req.body)
        console.log(req.file)
        console.log('imgName:', imgName)
        articleModel.create([{
            title: req.body.title,
            context: req.body.context,
            imgSrc: imgName
        }], (err, resl) => {
            res.send('ok')
        })
        // Everything went fine.
    })

})

function getExt(filename) {
    let temp = filename.split('.')
    return temp.pop()
}

module.exports = router