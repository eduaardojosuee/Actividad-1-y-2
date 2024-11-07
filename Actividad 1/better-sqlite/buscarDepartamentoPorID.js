import Database from "better-sqlite3";
const db = new Database('app.db')

const query = "select * from departamentos where id=?;"
const departamentos = db.prepare(query).get([3])

db.close()

console.log(departamentos)