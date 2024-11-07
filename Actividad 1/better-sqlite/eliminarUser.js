import Database from "better-sqlite3";
const db = new Database('app.db')

const query = "DELETE FROM users WHERE id = ?"
const user = db.prepare(query).run(2)

db.close()

console.log(user)