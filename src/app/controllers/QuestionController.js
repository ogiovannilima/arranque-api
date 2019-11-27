import Question from '../models/Question';
import Answer from '../models/Answer';

class QuestionController {
  async index(req, res) {
    const { step } = req.params;

    const questions = await Question.findOne({
      where: {
        step,
      },
      attributes: ['id', 'title'],
    });

    const answers = await Answer.findAll({
      where: {
        id_qst: questions.id,
      },
    });

    return res.json({ answers });
  }
}

export default new QuestionController();
