module.exports = (sequelize, Sequelize) => {
    const Tarefa = sequelize.define("tarefa", {
      titulo: {
        type: Sequelize.STRING
      },
      tipo: {
        type: Sequelize.INTEGER
      },
      status: {
        type: Sequelize.INTEGER
      },
      inicio: {
        type: Sequelize.DATE
      },
      duracao: {
        type: Sequelize.INTEGER
      },
      parentId: {
        type: Sequelize.INTEGER
      },
      conteudo: {
        type: Sequelize.BLOB
      }
    },
    {
      freezeTableName: true /*Não alterar o nome da Tabela*/
    });

    return Tarefa;
  };