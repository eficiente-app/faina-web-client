module.exports = app => {
    const tutorial = require("../controllers/tutorial.controller.js");

    var router = require("express").Router();

    // Create a new Tutorial
    router.post("/", tutorial.create);

    // Retrieve all tutorial
    router.get("/", tutorial.findAll);

    // Retrieve all published tutorial
    router.get("/published", tutorial.findAllPublished);

    // Retrieve a single Tutorial with id
    router.get("/:id", tutorial.findOne);

    // Update a Tutorial with id
    router.put("/:id", tutorial.update);

    // Delete a Tutorial with id
    router.delete("/:id", tutorial.delete);

    // Create a new Tutorial
    router.delete("/", tutorial.deleteAll);

    app.use('/api/tutorial', router);
  };