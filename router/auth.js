const express = require('express')
const router = express()
const admin = require('../controllers/admin')


router.post("/admin/group",admin.admin_addGroup)
router.get("/admin/group",admin.admin_getGroup)
router.delete("/admin/group/:id",admin.admin_deleteGroup)
router.put("/admin/group/:group/:id",admin.admin_EditGroup)


router.post("/admin/article",admin.admin_addArticle)
router.get("/admin/article",admin.admin_getArticle)
router.get("/admin/article/:id",admin.admin_getArticleById)
router.delete('/admin/article/:id',admin.admin_deleteArticle)

module.exports=router