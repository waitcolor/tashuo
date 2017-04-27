module.exports = function (app) {
//   app.get('/', function (req, res) {
//     res.redirect('/posts');
//   });
  app.use('/api', require('./api'));
//   app.use('/signin', require('./signin'));
//   app.use('/signout', require('./signout'));
//   app.use('/posts', require('./posts'));
};