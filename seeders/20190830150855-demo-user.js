'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('users', [
      {
        email: 'ramdaniilham63@gmail.com',
        password: '123',
        username: 'Ilham',
        handphone:'08132015142'
      },
      {
        email: 'ilham@gmail.com',
        password: '12345',
        username: 'Ilham',
        handphone:'08132015142'
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('users', null, {});
  }
};
