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
        // cb(null, './public/images')
        cb(null, '../images')

    },
    filename(req, file, cb) {
        // 处理上传文件所存文件的名称
        // 文件名 = 时间戳 + 后缀
        let ext = getExt(file.originalname)
        let realName = (new Date()).getTime() + '.' + ext
        cb(null, realName)
        imgName = 'http://younglee666.com:8091/public/images/' + realName
    }
})

const upload = multer({
    storage: storage
}).single('photoImg')

/**
 * @auth ly
 * @desc: 获取文章分页接口
 * @params page[Number] 、 rows[Number]
 * @return articles [Array]
 * @Last Modified: 2021-03-17 15:05:45
 * @Modified By: ly at <ly18482022657@gmail.com>
 * */

router.get('/', (req, res, next) => {
    console.log(req.body)
    let query = articleModel.find({});
    let page = Number(req.query.page);
    // note: req拿到的 rows 不转Number,mongodb报错 
    let rows = Number(req.query.rows);
    let skips = (page - 1) * rows
    // 当前页显示的数据所有数据-前几页显示的数据
    query.skip(skips);
    query.limit(rows)
    query.exec(function (err, rs) {
        if (err) {
            console.log('exec执行失败了')
            res.send(err);
        } else {
            // 计算数据总数
            articleModel.find(function (err, result) {
                let jsonArray = {
                    articles: rs,
                    total: result.length
                };
                res.send(jsonArray);
            });

        }
    })
})

/***
 *  @desc 新增文章
 *  @params title [String] 、 context [String]、 srcImg [String]
 */

router.post('/addArticles', (req, res) => {
    upload(req, res, function (err) {
        if (err instanceof multer.MulterError) {
            // A Multer error occurred when uploading.
            res.send('A Multer error occurred when uploading.')
            return
        } else if (err) {
            // An unknown error occurred when uploading.
            res.send('An unknown error occurred when uploading.')
            return
        }
        // console.log(req.body)
        // console.log(req.file)
        // console.log('imgName:', imgName)

        articleModel.create([{
            title: req.body.title,
            context: req.body.context,
            imgSrc: imgName
        }], (err, resl) => {
            console.log('插入数据执行之后的回调')
            if (err) {
                res.send('数据库插入失败')
            }
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