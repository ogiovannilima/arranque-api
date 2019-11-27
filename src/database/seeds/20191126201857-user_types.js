module.exports = {
  up: QueryInterface => {
    return QueryInterface.bulkInsert(
      'user_types',
      [
        {
          description: 'Company',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          description: 'School',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          description: 'Student',
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {}
    );
  },
  down: () => {},
};
