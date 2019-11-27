import Sequelize, { Model } from 'sequelize';

class Answer extends Model {
  static init(sequelize) {
    super.init(
      {
        title: Sequelize.STRING,
        id_qst: Sequelize.INTEGER,
      },
      {
        sequelize,
      }
    );

    return this;
  }
}

export default Answer;
