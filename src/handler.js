const { nanoid } = require('nanoid');
const notes = require('./notes');

/* Diketahui, Bentuk Objek dari Client adalah sebagai berikut:
 {
     id: string,
     title: string,
     createdAt: string,
     updatedAt: string,
     tags: array of string,
     body: string,
 },
*/

const addNotesHandler = (request, h) => {
  const { title, tags, body } = request.payload;
  const id = nanoid(16);
  const createdAt = new Date().toISOString();
  const updatedAt = createdAt;

  const newNote = {
    title,
    tags,
    body,
    id,
    createdAt,
    updatedAt,
  };
  notes.push(newNote);

  const isSuccess = notes.filter((note) => note.id === id).length > 0;
  if (isSuccess) {
    const response = h.response({
      status: 'success',
      message: 'Catatan berhasil ditambahkan',
      data: {
        noteId: id,
      },
    });
    response.code(201);
    return response;
  }

  const response = h.response({
    status: 'fail',
    message: 'Catatan gagal ditambahkan'
  });
  response.code(500);
  return response;
};

const getAllNotesHandler = () => ({
  status: 'success',
  data: {
    notes
  }
});

const getNoteByIdHandler = (request, h) => {
  const { id } = request.params;
  const note = notes.filter((n) => n.id === id)[0];

  if (note !== undefined) {
    return {
      status: 'success',
      data: {
        note
      }
    };
  }

  const response = h.response(
    {
      status: 'fail',
      message: 'Catatan tidak ditemukan'
    }
  );
  response.code(404);
  return response;
};

const editNoteByHandler = (request, h) => {
  const { id } = request.params;
  const { title, tags, body } = request.payload;
  const updatedAt = new Date().toISOString();

  const index = notes.findIndex((n) => n.id === id);
  // disini index akan mengembalikan nilai -1 jika tidak ada data dengan ada tersebut
  if (index !== -1) {

    notes[index] = {
      ...notes[index],
      title,
      tags,
      body,
      updatedAt
    };
    const response = h.response({
      status: 'success',
      message: 'Catatan berhasil diperbarui'
    });
    return response;
  }
  const response = h.response({
    status: 'fail',
    message: 'Gagal memperbarui catatan. Id tidak ditemukan',
  });
  response.code(404);
  return response;
};

const deleteNoteByIdHandler = (request, h) => {
  const { id } = request.params;
  const index = notes.findIndex((n) => n.id === id);

  if (index !== -1) {
    notes.splice(index, 1);
    const response = h.response({
      status: 'success',
      message: 'Catatan berhasil dihapus'
    });
    response.code(200);
    return response;
  }
  const response = h.response({
    status: 'fail',
    message: 'Gagal menghapus catatan, id tidak ditemukan'
  });
  response.code(404);
  return response;
};


module.exports = { addNotesHandler, getAllNotesHandler, getNoteByIdHandler, editNoteByHandler, deleteNoteByIdHandler };
