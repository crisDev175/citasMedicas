const { Sequelize, DataTypes, Model } = require('sequelize')
const pass = process.env.MYSQL_PSWD;
const sequelize = new Sequelize('dbCustomer', 'root', pass, {
    host: 'localhost',
    dialect: 'mysql',
    port: 3306
})

class Customer extends Model { }

Customer.init({
    customer_id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true
    },
    customer_name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    customer_age: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    customer_phone: {
        type: DataTypes.BIGINT(6),
        allowNull: false
    }
},
    {
        sequelize,
        modelName: 'Customer'
    })

module.exports = Customer;



//PRUEBA DE CONEXION A DB
//async function testConnection(){
//try {
// await sequelize.authenticate();
// console.log('All Good!!')
//} catch (err) {
//    console.error('All bad!!', err)
//}
//}
//testConnection()