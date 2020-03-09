// Controller here
// complete building out the controller
var dbshelpers = require('../db/dbhelpers.js')
// import schema model here
// get

const controller = {
  get: (req, res) => {
    dbshelpers.getProductsHelper().then(results => {res.status(200).send(results)}).catch(err => res.status(400).send(err))
  }

  // post: (req, res) => {
  //   dbshelpers.create
  // },

  // put: (req, res) => {
  //   dbshelpers.findByIdAndUpdate
  // },

  // delete: (req, res) => {
  //   dbshelpers.findByIdAndDelete
  // }

}

module.exports = controller