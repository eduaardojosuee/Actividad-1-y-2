import Database from "better-sqlite3";
const db = new Database('app.db')

const data=[
    {nombre:"Finanzas"},
    {nombre:"Recursos Humanos"},
    {nombre:"Marketing"},
    {nombre:"Logística"},
    {nombre:"Producción"},
]
const insertData=db.prepare(`insert into departamentos(nombre) values(?)`)

data.forEach(departamento=>{
    const r=insertData.run(departamento.nombre)
    console.log(r)
})
db.close()