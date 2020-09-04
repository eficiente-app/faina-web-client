module.exports = app => {
    const tarefa = require("../controllers/tarefa.controller.js");

    var router = require("express").Router();

    // Create a new tarefa
    router.post("/", tarefa.create);

    // Retrieve all tarefa
    router.get("/", tarefa.findAll);

    // Retrieve all published tarefa
    router.get("/published", tarefa.findAllPublished);

    // Retrieve a single tarefa with id
    router.get("/:id", tarefa.findOne);

    // Update a tarefa with id
    router.put("/:id", tarefa.update);

    // Delete a tarefa with id
    router.delete("/:id", tarefa.delete);

    // Create a new tarefa
    router.delete("/", tarefa.deleteAll);

    app.use('/api/tarefa', router);
  };