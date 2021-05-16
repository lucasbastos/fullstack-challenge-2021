const Product = require("../models/Products");

module.exports = class ProductService {
  static async getAllProducts() {
    try {
      const allProducts = await Article.find();
      return allProducts;
    } catch (error) {
      console.log(`Could not fetch products ${error}`);
    }
  }

  static async createProduct(data) {
    try {
      const newProduct = {
        code: data.title,
        barcode: data.barcode,
        imported_t: data.imported_t,
        url: data.url,
        product_name: data.product_name,
        quantity: data.quantity,
        categories: data.categories,
        packaging: data.packaging,
        brands: data.brands,
        image_url: data.image_url,
      };
      const response = await new Product(newProduct).save();
      return response;
    } catch (error) {
      console.log(error);
    }
  }

  static async getProductbyId(productId) {
    try {
      const singleProductResponse = await Product.findById({ _id: productId });
      return singleProductResponse;
    } catch (error) {
      console.log(`Product not found. ${error}`);
    }
  }

  //   static async updateArticle(title, body, articleImage) {
  //     try {
  //       const updateResponse = await Article.updateOne(
  //         { title, body, articleImage },
  //         { $set: { date: new Date.now() } },
  //       );

  //       return updateResponse;
  //     } catch (error) {
  //       console.log(`Could not update Article ${error}`);
  //     }
  //   }

  //   static async deleteProduct(productId) {
  //     try {
  //       const deletedResponse = await Product.findOneAndDelete(productId);
  //       return deletedResponse;
  //     } catch (error) {
  //       console.log(`Could  ot delete product ${error}`);
  //     }
  //   }
};

// {
//   "code": 3661112502850,
//   "barcode": "3661112502850(EAN / EAN-13)",
//   "status": "imported",
//   "imported_t": "2020-02-07T16:00:00Z",
//   "url": "https://world.openfoodfacts.org/product/3661112502850",
//   "product_name": "Jambon de Paris cuit à l'étouffée",
//   "quantity": "240 g",
//   "categories": "Meats, Prepared meats, Hams, White hams",
//   "packaging": "Film en plastique, Film en plastique",
//   "brands": "Tradilège, Marque Repère",
//   "image_url": "https://static.openfoodfacts.org/images/products/366/111/250/2850/front_fr.3.400.jpg"
// }
