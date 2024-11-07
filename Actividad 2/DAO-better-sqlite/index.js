//usar Dao
import AppDaoBetterSQLite from './DaoBetterSqlite3.js'
import ModelUsers from "./model.users.js";
import ModelEmpleados from "./model.empleados.js"
import ModelDepartamentos from "./model.departamentos.js"

const controllerDB=new AppDaoBetterSQLite('app.db')
const mc=new ModelUsers(controllerDB)
const mcc=new ModelEmpleados(controllerDB)
const mccc=new ModelDepartamentos(controllerDB)

// TABLA USERS
// Insertar registro
const insertar_user=mc.insert(["jose luis cuevas","jcuevas"])
console.log(insertar_user)

// Mostar Tabla
const mostrar_users=mc.getAll()
console.log(mostrar_users)

// Mostrar user por ID
const mostrar_user_id= mc.get(3)
console.log(mostrar_user_id)

// Modificar user completo
const modificar_user= mc.put(["pablo","pb2",8,2])
console.log(modificar_user)

// Modificar name y username
const modificar_name_username= mc.patch(["pepe","pp6",1])
console.log(modificar_name_username)

// Eliminar user
const eliminar_user= mc.delete(5)
console.log(eliminar_user)


// TABLA EMPLEADOS
// Insertar registro
const insertar_empleado=mcc.insert(["Jose Luis Cuevas","jcuevas@gmail.com",3])
console.log(insertar_empleado)

// Mostrar Tabla
const mostrar_empleados=mcc.getAll()
console.log(mostrar_empleados)

// Mostrar empleado por ID
const mostrar_empleado_id= mcc.get(1)
console.log(mostrar_empleado_id)

// Modificar departamento del empleado
const modificar_empleado= mcc.patch([5,2])
console.log(modificar_empleado)

// Eliminar empleado
const eliminar_empleado= mcc.delete(4)
console.log(eliminar_empleado)


// TABLA DEPARTAMENTOS
// Insertar registro
const insertar_departamento=mccc.insert("Ventas")
console.log(insertar_departamento)

// Mostrar Tabla
const mostrar_departamentos=mccc.getAll()
console.log(mostrar_departamentos)

// Mostrar departamento por ID
const mostrar_departamento_id= mccc.get(1)
console.log(mostrar_departamento_id)

// Modificar departamento
const modificar_departamento= mccc.patch(["Tesorería",2])
console.log(modificar_departamento)

// Eliminar departamento
const eliminar_departamento= mccc.delete(4)
console.log(eliminar_departamento)