// router.js 路由模块
// 职责：
//     处理路由
//     根据不同的请求方法+请求路径设置具体的请求处理函数
// 模块职责要单一，不要乱写
// 我们划分模块的目的就是为了增强项目代码的可维护性
// 提升开发效率

var fs = require('fs')
var user = require('./user')

// Express 提供了一种更好的方式
// 专门用来包装路由的
var express = require('express')

// 1. 创建一个路由容器
var router = express.Router()

// 2. 把路由都挂载到 router 路由容器中

// 渲染用户列表页面
router.get('/list', function (req, res) {
    user.find(function (err, users) {
        if (err) {
            return res.status(500).send('Server error.')
        }
        res.render('../../views/list.html', {
            users: users
        })
    })
})

// 渲染添加用户页面
router.get('/', function (req, res) {
    res.render('../../views/index.html')
})

// 处理添加用户
router.post('/', function (req, res) {
    // 1. 获取表单数据
    // 2. 处理
    //      将数据保存到 db.json 文件中用以持久化
    // 3. 发送响应
    user.save(req.body, function (err) {
        if (err) {
            return res.status(500).send('Server error.')
        }
        res.redirect('/list')
    })
})

// 渲染编辑用户页面
router.get('/edit', function (req, res) {
    // 1. 在客户端的列表页中处理链接问题（需要有 id 参数）
    // 2. 获取要编辑的用户 id
    // 3. 渲染编辑页面
    //     根据 id 把用户信息查出来
    //     使用模板引擎渲染页面

    user.findById(parseInt(req.query.ID), function (err, user) {
        if (err) {
            return res.status(500).send('Server error.')
        }
        res.render('../../views/edit.html', {
            user: user
        })
    })
})

// 处理编辑用户
router.post('/edit', function (req, res) {
    // 1. 获取表单数据
    //    req.body
    // 2. 更新
    //    user.updateById()
    // 3. 发送响应
    user.updateById(req.body, function (err) {
        if (err) {
            return res.status(500).send('Server error.')
        }
        res.redirect('/list')
    })
})

// 处理删除用户
router.get('/delete', function (req, res) {
    // 1. 获取要删除的 id
    // 2. 根据 id 执行删除操作
    // 3. 根据操作结果发送响应数据

    user.deleteById(req.query.ID, function (err) {
        if (err) {
            return res.status(500).send('Server error.')
        }
        res.redirect('/list')
    })
})

// 3. 把 router 导出
module.exports = router