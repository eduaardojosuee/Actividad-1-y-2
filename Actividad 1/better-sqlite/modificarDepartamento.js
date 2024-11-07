import Database from "better-sqlite3";
const db = new Database('app.db')

const query = "UPDATE departamentos SET nombre = ? WHERE id = ?"
const departamento = db.prepare(query).run("Ventas",5)

db.close()

console.log(departamento)