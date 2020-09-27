const { Comment } = require('../models');

const commentdata = [
  {
    comment_text: 'first comment'
  }
];

  const seedComments = () => Comment.bulkCreate(commentdata);

module.exports = seedComments;