const Sequelize = require('sequelize')

const db = new Sequelize({
    dialect: 'mysql',
    database: 'menses',
    username: 'root',
    password: 'Ash'
  })

    
const Women_details = db.define('women_details', {
    email: {
        type: Sequelize.STRING,
        allowNull: false
        },
    password:{
        type: Sequelize.STRING,
        allowNull: false
    },

    name: {
      type: Sequelize.STRING,
      allowNull: false
    },
    // phone_no:{
    //     type:Sequelize.STRING,
    //     allowNull:false
    // }
  })
  module.exports = {
      db,
   Women_details
  }
