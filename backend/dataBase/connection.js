const dbEnvironment = require("./environment")
const mysql = require("mysql")
module.exports = {
    connection: mysql.createConnection({
        host     : dbEnvironment.DB_HOST,
        user     : dbEnvironment.DB_USER,
        password : dbEnvironment.DB_PASSWORD,
        database : dbEnvironment.DB_NAME,
        port: dbEnvironment.DB_PORT
    })
}