const DataBase = require("../lib/database");
const url = process.env.REPLIT_DB_URL || "https://kv.replit.com/v0/eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2MTk1Mzg0NjksImlhdCI6MTYxOTQyNjg2OSwiaXNzIjoiY29ubWFuIiwiZGF0YWJhc2VfaWQiOiI1YzM3YjhlNS1mZDhlLTQ2OWEtYTBiYi1kNWVlZjQzMDRhMDgifQ.QUc-6QpIDmje-UDAPmk5prThDQY6tZerjbWySp7smIFdQJ10lzt9gi5I3pU2xf420K-bzswCeuUntiiuOkcN5Q"


module.exports = new DataBase(url);

