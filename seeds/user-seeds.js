const User  = require('../models/User');
const userdata = [
    {
      username: 'test1',
      password: '123456',
    }
  ];

  const seedUsers = () => User.bulkCreate(userdata);

module.exports = seedUsers;