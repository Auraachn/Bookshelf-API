const {
  addBookHandler,
  getAllBooksHandler,
  getBookDetailHandler,
  editBookbyIdHandler,
  deleteBookbyIdHandler,
} = require('./handler');

const routes = [
  {
    method: 'POST',
    path: '/books',
    handler: addBookHandler,
  },
  {
    method: 'GET',
    path: '/books',
    handler: getAllBooksHandler,
  },
  {
    method: 'GET',
    path: '/books/{id}',
    handler: getBookDetailHandler,
  },
  {
    method: 'PUT',
    path: '/books/{id}',
    handler: editBookbyIdHandler,
  },
  {
    method: 'DELETE',
    path: '/books/{id}',
    handler: deleteBookbyIdHandler,
  },
];

module.exports = routes;
