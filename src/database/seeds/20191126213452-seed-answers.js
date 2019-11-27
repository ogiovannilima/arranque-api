module.exports = {
  up: QueryInterface => {
    return QueryInterface.bulkInsert(
      'answers',
      [
        {
          title: 'r1',
          id_qst: 1,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          title: 'r2',
          id_qst: 1,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          title: 'r3',
          id_qst: 1,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          title: 'r4',
          id_qst: 1,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          title: 'Compras',
          id_qst: 2,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          title: 'Jogos',
          id_qst: 2,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          title: 'Rede Social',
          id_qst: 2,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          title: 'Filmes',
          id_qst: 2,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          title: 'Sair',
          id_qst: 3,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          title: 'Praticar Esportes',
          id_qst: 3,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          title: 'Estudar',
          id_qst: 3,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          title: 'Ver os Amigos',
          id_qst: 3,
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {}
    );
  },
  down: () => {},
};
