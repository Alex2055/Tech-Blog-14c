const  Post  = require('../models/Post');

const postdata = [
  {
    title: 'Title 1',
    post: 'Post 1',
  },
  {
    title: 'Title 2',
    post: 'Post 2',
  }
];

  const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;