const express = require("express");
const Router = express.Router();
const homeController = require('../Controllers/homeController')
const adminAuth = require('../middleware/adminAuth')


Router.get('/', homeController.home_index)

Router.get('/admin', adminAuth, homeController.home_index_admin)

Router.get('/:slug', homeController.home_findOne_article)

Router.get('/category/:slug', homeController.home_findByCategory_article)

module.exports = Router;