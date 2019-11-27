module.exports = {
  up: QueryInterface => {
    return QueryInterface.bulkInsert(
      'questions',
      [
        {
          title: 'Interesses',
          step: 1,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          title: 'O que você faz na internet',
          step: 2,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          title: 'O que você faz no dia-a-dia',
          step: 3,
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {}
    );
  },
  down: () => {},
};
