module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('answers', 'id_qst', {
      type: Sequelize.INTEGER,
      references: { model: 'questions', key: 'id' },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL',
      allowNull: true,
    });
  },

  down: queryInterface => {
    return queryInterface.removeColumn('answers', 'id_qst');
  },
};
