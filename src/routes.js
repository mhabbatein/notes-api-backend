const { addNotesHandler, getAllNotesHandler, getNoteByIdHandler, editNoteByHandler, deleteNoteByIdHandler } = require('./handler');

const routes = [
  {
    method: 'POST',
    path: '/notes',
    handler: addNotesHandler,
    // tambahkan kode dibawah untuk mengizinkan CORS untuk route ini,
    // jika ingin mengizinkan CORS untuk semua route, tambahkan di server.js
    // options: {
    //   cors: {
    //     origin: ['*']
    //   }
    // }
  },
  {
    method: 'GET',
    path: '/notes',
    handler: getAllNotesHandler
  },
  {
    method: 'GET',
    path: '/notes/{id}',
    handler: getNoteByIdHandler
  },
  {
    method: 'PUT',
    path: '/notes/{id}',
    handler: editNoteByHandler
  },
  {
    method: 'DELETE',
    path: '/notes/{id}',
    handler: deleteNoteByIdHandler
  },
];

module.exports = routes;
