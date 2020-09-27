const Post = require('./Post');

const Comment = require('./Comment');

 const User = require('./User')

 User.hasMany(Post);
// User.hasMany(Comment);
Post.hasMany(Comment);
Comment.belongsTo(Post);





module.exports = { Comment, Post , User };

