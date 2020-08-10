// user.js
// 数据操作文件模块
// 职责：操作文件中的数据，只处理数据，不关心业务
// 这里才是我们学习 Node 的精华部分：奥义之所在
// 封装异步 API

var fs = require('fs')

var dbPath = './db.json'

/**
 * 获取用户列表
 * @param  {Function} callback 回调函数
 */
exports.find = function (callback) {
    fs.readFile(dbPath, 'utf8', function (err, data) {
        if (err) {
            return callback(err)
        }
        callback(null, JSON.parse(data).users)
    })
}

/**
 * 根据 id 获取用户信息对象
 * @param  {Number}   ID       用户 ID
 * @param  {Function} callback 回调函数
 */
exports.findById = function (ID, callback) {
    fs.readFile(dbPath, 'utf8', function (err, data) {
        if (err) {
            return callback(err)
        }
        var users = JSON.parse(data).users
        var ret = users.find(function (item) {
            return item.ID === parseInt(ID)
        })
        callback(null, ret)
    })
}

/**
 * 添加保存用户
 * @param  {Object}   user  用户对象
 * @param  {Function} callback 回调函数
 */
exports.save = function (user, callback) {
    fs.readFile(dbPath, 'utf8', function (err, data) {
        if (err) {
        return callback(err)
        }
        var users = JSON.parse(data).users

        // 添加 ID ，唯一不重复
        user.ID = users[users.length - 1].ID + 1

        // 把用户传递的对象保存到数组中
        users.push(user)

        // 把对象数据转换为字符串
        var fileData = JSON.stringify({
            users: users
        })

        // 把字符串保存到文件中
        fs.writeFile(dbPath, fileData, function (err) {
            if (err) {
                // 错误就是把错误对象传递给它
                return callback(err)
            }
            // 成功就没错，所以错误对象是 null
            callback(null)
        })
    })
}

// 更新用户
exports.updateById = function (user, callback) {
    fs.readFile(dbPath, 'utf8', function (err, data) {
        if (err) {
            return callback(err)
        }
        var users = JSON.parse(data).users

        // 注意：这里记得把 id 统一转换为数字类型
        user.ID = parseInt(user.ID)

        // 你要修改谁，就需要把谁找出来
        // EcmaScript 6 中的一个数组方法：find
        // 需要接收一个函数作为参数
        // 当某个遍历项符合 item.ID === user.ID 条件的时候，find 会终止遍历，同时返回遍历项
        var stu = users.find(function (item) {
            return item.ID === user.ID
        })

        // 这种方式你就写死了，有 100 个难道就写 100 次吗？
        // stu.name = user.name
        // stu.ID = user.ID

        // 遍历拷贝对象
        for (var key in user) {
            stu[key] = user[key]
        }

        // 把对象数据转换为字符串
        var fileData = JSON.stringify({
            users: users
        })

        // 把字符串保存到文件中
        fs.writeFile(dbPath, fileData, function (err) {
            if (err) {
            // 错误就是把错误对象传递给它
                return callback(err)
            }
            // 成功就没错，所以错误对象是 null
            callback(null)
        })
    })
}

// 删除用户
exports.deleteById = function (ID, callback) {
    fs.readFile(dbPath, 'utf8', function (err, data) {
        if (err) {
            return callback(err)
        }
        var users = JSON.parse(data).users

        // findIndex 方法专门用来根据条件查找元素的下标
        var deleteId = users.findIndex(function (item) {
            return item.ID === parseInt(ID)
        })

        // 根据下标从数组中删除对应的用户对象
        users.splice(deleteId, 1)

        // 把对象数据转换为字符串
        var fileData = JSON.stringify({
            users: users
        })

        // 把字符串保存到文件中
        fs.writeFile(dbPath, fileData, function (err) {
            if (err) {
            // 错误就是把错误对象传递给它
                return callback(err)
            }
            // 成功就没错，所以错误对象是 null
            callback(null)
        })
    })
}