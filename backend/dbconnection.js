const mysql = require("mysql");
const Promise = require("bluebird");
const { add } = require("nodemon/lib/rules");
const { use } = require("express/lib/application");
Promise.promisifyAll(require("mysql/lib/Connection").prototype);

const dbinfo = {
  host: "localhost",
  user: "root",
  password: "cdac",
  database: "labexam",
};

async function addMessage(text) {
  const connection = mysql.createConnection(dbinfo);
  await connection.connectAsync();

  let sql = `INSERT INTO MESSAGE(msg)values(?)`;
  await connection.queryAsync(sql, [text.msg]);

  console.log("DATA ADDED TO DATABASE");

  await connection.endAsync();
}

const text = {
  msg: "Hello CDAC MUMBAI",
}; /*
const text = {
  msg: "I AM ADITYA GAIKWAD",
};
const text = {
  msg: "LUCKY TO BE PART OF THIS INSTITUTE",
};
const text = {
  msg: "THANK YOU SO MUCH",
};*/
addMessage(text);

async function selectMessage() {
  const connection = mysql.createConnection(dbinfo);
  await connection.connectAsync();

  let sql = `SELECT *FROM MESSAGE`;
  const list = await connection.queryAsync(sql, []);
  await connection.endAsync();

  console.log(list);
  return list;
}
//selectMessage();

module.exports = { addMessage, selectMessage };
