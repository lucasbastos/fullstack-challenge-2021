const ProductService = require("../services/ProductService");

module.exports = class Product {
  static async apiWelcome(req, res, next) {
    res.send("Fullstack Challenge 2021");
  }

  static async apiGetAllProducts(req, res, next) {
    try {
      const products = await ProductService.getAllProducts();
      if (!products) {
        res.status(404).json("There are no article published yet!");
      }
      res.json(products);
    } catch (error) {
      res.status(500).json({ error: error });
    }
  }

  static async apiGetProductById(req, res, next) {
    try {
      let id = req.params.id || {};
      const product = await ProductService.getProductbyId(id);
      res.json(product);
    } catch (error) {
      res.status(500).json({ error: error });
    }
  }

  static async apiCreateProduct(req, res, next) {
    try {
      const createdProduct = await ProductService.createProduct(req.body);
      res.json(createdProduct);
    } catch (error) {
      res.status(500).json({ error: error });
    }
  }

  // static async apiUpdateArticle(req, res, next){
  //    try {
  //       const comment = {}
  //       comment.title        = req.body.title;
  //       comment.body         = req.body.body;
  //       comment.articleImage = req.body.article_image

  //       const updatedArticle = await ProductService.updateArticle(comment);

  //       if(updatedArticle.modifiedCount === 0){
  //          throw new Error("Unable to update article, error occord");
  //       }

  //       res.json(updatedArticle);

  //    } catch (error) {
  //       res.status(500).json({error: error});
  //    }
  // }

  // static async apiDeleteArticle(req, res, next){
  //       try {
  //          const articleId = req.params.id;
  //          const deleteResponse =  await ArticleService.deleteArticle(articleId)
  //          res.json(deleteResponse);
  //       } catch (error) {
  //          res.status(500).json({error: error})
  //       }
  // }
};
