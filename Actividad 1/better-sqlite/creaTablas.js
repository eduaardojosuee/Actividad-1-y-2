import Database from "better-sqlite3";
const db = new Database('app.db');

const query = `
    CREATE TABLE users(
        id INTEGER PRIMARY KEY,
        name STRING NOT NULL,
        username STRING NOT NULL UNIQUE
    );

    CREATE TABLE departamentos(
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        nombre STRING NOT NULL
    );

    CREATE TABLE empleados(
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        nombre STRING NOT NULL,
        correo STRING NOT NULL,
        departamento INTEGER,
        FOREIGN KEY(departamento) REFERENCES departamentos(id)
    );
`
db.exec(query);
db.close();