import { Sequelize } from 'sequelize';

import User from '../app/models/User';
import UserTypes from '../app/models/UserTypes';
import Question from '../app/models/Question';
import Answer from '../app/models/Answer';

import databaseConfig from '../config/database';

const models = [User, UserTypes, Question, Answer];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(databaseConfig);

    models.map(model => model.init(this.connection));
  }
}

export default new Database();
