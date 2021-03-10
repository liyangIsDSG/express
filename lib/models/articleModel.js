const mongoose = require('../mongoose')
// 创建schema
const articleSchema = mongoose.Schema({
    title: String,
    context: String
})

const articleModel = mongoose.model('articles', articleSchema, 'articles')

module.exports = articleModel