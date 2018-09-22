const routes = module.exports = require('next-routes')();

module.exports = routes
  .add('index', '/')
  .add('events', 'events')
  .add('event', '/events/:id')
  .add('people', '/people')
  .add('person', '/people/:id')
  .add('words', '/words')
  .add('word', '/words/:id')
  .add('contact-us', '/contact-us')
  .add('error-404', '/404')
  .add('page', '/:id');
