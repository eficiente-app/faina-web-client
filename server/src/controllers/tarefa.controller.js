const db = require("../models");
const Tarefa = db.tarefa;
const Op = db.Sequelize.Op;

// Create and Save a new Tarefa
exports.create = (req, res) => {
    // Validate request
    if (!req.body.titulo) {
      res.status(400).send({
        message: "Content can not be empty!"
      });
      return;
    }

    // Create a Tarefa
    const tarefa = {
        titulo: req.body.titulo,
        tipo: req.body.tipo,
        status: req.body.status,
        inicio: req.body.inicio,
        duracao: req.body.duracao,
        parentId: req.body.parentId,
        conteudo: req.body.conteudo
    };

    // Save Tarefa in the database
    Tarefa.create(tarefa)
    .then(data => {
        res.send(data);
    })
    .catch(err => {
        res.status(500).send({
        message:
            err.message || "Some error occurred while creating the Tarefa."
        });
    });
};

// Retrieve all tarefa from the database.
exports.findAll = (req, res) => {
    const titulo = req.query.titulo;
    var condition = titulo ? { titulo: { [Op.like]: `%${titulo}%` } } : null;

    Tarefa.findAll({ where: condition })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving tarefa."
        });
      });
};

// Find a single Tarefa with an id
exports.findOne = (req, res) => {
    const id = req.params.id;

    Tarefa.findByPk(id)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving Tarefa with id=" + id
        });
      });
  };

// Update a Tarefa by the id in the request
exports.update = (req, res) => {
    const id = req.params.id;

    Tarefa.update(req.body, {
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Tarefa was updated successfully."
          });
        } else {
          res.send({
            message: `Cannot update Tarefa with id=${id}. Maybe Tarefa was not found or req.body is empty!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating Tarefa with id=" + id
        });
      });
  };

// Delete a Tarefa with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;

    Tarefa.destroy({
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Tarefa was deleted successfully!"
          });
        } else {
          res.send({
            message: `Cannot delete Tarefa with id=${id}. Maybe Tarefa was not found!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete Tarefa with id=" + id
        });
      });
  };

// Delete all tarefa from the database.
exports.deleteAll = (req, res) => {
    Tarefa.destroy({
      where: {},
      truncate: false
    })
      .then(nums => {
        res.send({ message: `${nums} tarefa were deleted successfully!` });
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while removing all tarefa."
        });
      });
  };

// Find all published tarefa
exports.findAllPublished = (req, res) => {
    Tarefa.findAll({ where: { published: true } })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving tarefa."
        });
      });
  };
