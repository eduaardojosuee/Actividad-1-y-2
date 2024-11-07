import Database from "better-sqlite3";
const db = new Database('app.db')

const query = "DELETE FROM empleados WHERE id = ?"
const empleado = db.prepare(query).run(3)

db.close()

console.log(empleado)