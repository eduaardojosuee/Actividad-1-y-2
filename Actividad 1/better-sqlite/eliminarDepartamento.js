import Database from "better-sqlite3";
const db = new Database('app.db')

const query = "DELETE FROM departamentos WHERE id = ?"
const user = db.prepare(query).run(4)

db.close()

console.log(user)