const express = require("express");
const router = express.Router();
const ProductController = require("../controllers/ProductController");

router.get("/", ProductController.apiGetAllProducts);
// router.get("/products", ProductController.apiGetAllProducts);
router.get("/:code", ProductController.apiGetProductById);
// router.put("/article/:id", ProductController.apiUpdateArticle);
// router.delete("/article/:id", ProductController.apiDeleteArticle);

module.exports = router;
