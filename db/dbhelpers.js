var Product = require('./index.js');
// complete the dbhelpers
var helpers = {
  getProductsHelper: () => {
    return Product.find({})
  }
  // ,
  // postProductsHelper: () => {
  //   Product.create()
  // },
  // updateProductHelper: (id, params) => {
  //   Product.findByIdAndUpdate()
  // },
  // deleteProductHelper: (id) => {
  //   Product.findByIdAndDelete()
  // }
};

module.exports = helpers