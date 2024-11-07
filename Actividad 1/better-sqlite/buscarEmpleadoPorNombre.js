import Database from "better-sqlite3";
const db = new Database('app.db')

const query = "select * from empleados where nombre=?;"
const empleados = db.prepare(query).get(["Pablo Manuel"])

db.close()

console.log(empleados)