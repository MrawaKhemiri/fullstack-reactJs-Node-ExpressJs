import express from "express";

const router = express.Router();

import {
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
} from "../controllers/articleController.js";
/*******article routes********* */
router.route("/showArticles").get(showArticles);
router.route("/create").get(AddArticleForm);
router.route("/create").post(AddArticle);
router.route("/update/:id").get(UpdateArticleForm);
router.route("/update/:id").post(UpdateArticle);
router.route("/delete/:id").delete(deleteArticle);
router.route("/article/:id").get(detailsArticle);
/*******comment routes********** */
router.route("/article/:id").post(AddComment);
/********category routes******* */
router.route("/category").get(AddCategoryForm);
router.route("/category").post(AddCategory);
router.route("/catarticle/:id").get(CatArticle);
router.route("/search").post(searchArticle);
export default router;
