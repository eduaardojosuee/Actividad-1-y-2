import Database from "better-sqlite3";
const db = new Database('app.db')

const query = "UPDATE users SET name = ?, username = ? WHERE id = ?"
const user = db.prepare(query).run("pablo","pa2",2)

db.close()

console.log(user)