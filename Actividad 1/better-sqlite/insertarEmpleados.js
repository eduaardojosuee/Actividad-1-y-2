import Database from "better-sqlite3";
const db = new Database('app.db')

const data=[
    {nombre:"Ana Pérez Martínez",correo:"ana@gmail.com",departamento:"1"},
    {nombre:"Juan José Rodríguez",correo:"juan@gmail.com",departamento:"2"},
    {nombre:"Pedro Dominguez",correo:"pedro@gmail.com",departamento:"3"},
    {nombre:"Pablo Manuel",correo:"pablo@gmail.com",departamento:"4"},
    {nombre:"Luis Enrique",correo:"luis@gmail.com",departamento:"5"}
]
const insertData=db.prepare(`insert into empleados(nombre,correo,departamento) values(?,?,?)`)

data.forEach(empleado=>{
    const r=insertData.run(empleado.nombre, empleado.correo, empleado.departamento)
    console.log(r)
})
db.close()