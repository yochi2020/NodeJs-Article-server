const express = require('express')
const router = express()
const admin = require('../controllers/admin')
const multer = require('multer')
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, '../article/public/img_article')
    },
    filename: function (req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now()+".jpg")
    }
})
var upload = multer({ storage: storage })


router.post("/admin/group",admin.admin_addGroup)
router.get("/admin/group",admin.admin_getGroup)
router.delete("/admin/group/:id",admin.admin_deleteGroup)
router.put("/admin/group/:group/:id",admin.admin_EditGroup)


router.post("/admin/article",upload.single("photoArticle"),admin.admin_addArticle)
router.get("/admin/article",admin.admin_getArticle)
router.get("/admin/article/:id",admin.admin_getArticleById)
router.put("/admin/artucle/:id",admin.admin_editArticle)
router.delete('/admin/article/:id',admin.admin_deleteArticle)

module.exports=router