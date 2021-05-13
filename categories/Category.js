const Sequelize = require("sequelize");
const connection = require('../database/connection');
const Article = require('../articles/Article');


const Category = connection.define('categories', {
    title: {
        type : Sequelize.STRING,
        allowNull: false
    },
    slug: {
        type : Sequelize.STRING,
        allowNull: false
    }
});

Category.hasMany(Article);
Article.belongsTo(Category);



module.exports = Category;