import asyncHandler from "express-async-handler";
import Articles from "../models/articlesModel.js";
import Categories from "../models/categoriesModel.js";

/************Articles Fonctions*********/
const showArticles = asyncHandler(async (req, res) => {
  const articles = await Articles.find().populate("category");
  const categories = await Categories.find();
  res.json({ 'produits': articles,  categories });
});
const AddArticleForm = asyncHandler(async (req, res) => {
  const categories = await Categories.find();
  res.json( { categories: categories });
});
const AddArticle = asyncHandler(async (req, res) => {
  const today = new Date();
  const date =
    today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();
  const article = new Articles({
    title: req.body.title,
    content: req.body.content,
    postedAt: date,
    category: req.body.category,
  });
  console.log(article)
  await article.save();
  res.json('Ajout Article ');

});
const deleteArticle = asyncHandler(async (req, res) => {
  await Articles.findByIdAndDelete(req.params.id);
  res.json("dellllllllll");
});


const UpdateArticleForm = asyncHandler(async (req, res) => {
  const article = await Articles.findById(req.params.id).populate("category");
  const categories = await Categories.find();
  console.log(article);
  // res.render("updateArticle", { article: article, categories: categories });
  res.json({  article: article, categories: categories});
});
const UpdateArticle = asyncHandler(async (req, res) => {
  await Articles.findByIdAndUpdate(req.params.id, {
    title: req.body.title,
    content: req.body.content,
    category: req.body.category,
  });
  res.json("upppppp");
});
const detailsArticle = asyncHandler(async (req, res) => {
  const article = await Articles.findById(req.params.id).populate("category");
  res.json({ article: article, comments: article.comment });
});

/*************Comment Fonctions***************/

const AddComment = asyncHandler(async (req, res) => {
  const today = new Date();
  const date =
    today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();

  /*************** */

  const article = await Articles.findById(req.params.id);
  article.comment.push({
    title: req.body.cTitle,
    content: req.body.cContent,
    postedAt: date,
  });
  await article.save();
  res.json("comment ajouté");
});
/*************Category Fonctions********* */
const AddCategoryForm = asyncHandler(async (req, res) => {
  const categories = await Categories.find();
  res.json( categories );
});
const AddCategory = asyncHandler(async (req, res) => {
  const category = new Categories({ title: req.body.title });
  await category.save();
  res.json("category");
});

const CatArticle = asyncHandler(async (req, res) => {
  const articles = await Articles.find({ category: req.params.id }).populate(
    "category"
  );
  const categories = await Categories.find();
  res.render("home", { articles: articles, categories: categories });
});

const searchArticle = asyncHandler(async (req, res) => {
  const articles = await Articles.find(
    
      { title: req.body.search }
     
  
  ).populate("category");
  const categories = await Categories.find();
  res.render("home", { articles: articles, categories: categories });
});


export {
  showArticles,
  AddArticleForm,
  AddArticle,
  deleteArticle,
  UpdateArticleForm,
  UpdateArticle,
  detailsArticle,
  AddComment,
  AddCategoryForm,
  AddCategory,
  CatArticle,
  searchArticle,
};
