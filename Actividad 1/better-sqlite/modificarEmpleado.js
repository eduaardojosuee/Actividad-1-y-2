import Database from "better-sqlite3";
const db = new Database('app.db')

const query = "UPDATE empleados SET departamento = ? WHERE id = ?"
const empleados = db.prepare(query).run([1,5])

db.close()

console.log(empleados)