
// Rutas CRUD

// 1. Ver empleados
app.get("/empleados", (req, res) => {
    db.query("SELECT * FROM empleados", (err, results) => {
        if (err) throw err;
        res.json(results);
    });
});

// 2. Crear empleado
app.post("/empleados", (req, res) => {
    const { Id_empleado, Nombre_empleado, Salario } = req.body;
    db.query(
        "INSERT INTO empleados VALUES (?, ?, ?)",
        [Id_empleado, Nombre_empleado, Salario],
        err => {
            if (err) throw err;
            res.json({ message: "Empleado creado" });
        }
    );
});

// 3. Actualizar salario
app.put("/empleados/:id", (req, res) => {
    const { Salario } = req.body;
    const id = req.params.id;

    db.query(
        "UPDATE empleados SET Salario = ? WHERE Id_empleado = ?",
        [Salario, id],
        err => {
            if (err) throw err;
            res.json({ message: "Empleado actualizado" });
        }
    );
});

// 4. Eliminar empleado
app.delete("/empleados/:id", (req, res) => {
    const id = req.params.id;

    db.query(
        "DELETE FROM empleados WHERE Id_empleado = ?",
        [id],
        err => {
            if (err) throw err;
            res.json({ message: "Empleado eliminado" });
        }
    );
});

// Servidor
app.listen(3000, () => {
    console.log("Servidor corriendo en http://localhost:3000");
});
