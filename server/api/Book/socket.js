/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
/**
    * Book Broadcast updates to client when the model changes
*/

import Book from './model';

function onSave(socket, doc, cb) {
    socket.emit('book:save', doc);
}

function onRemove(socket, doc, cb) {
    socket.emit('book:remove', doc);
}

function register(socket) {
    console.log('Book imported in socket is :', 
    Book.schema.post);
    console.log('Register function inside Book API Model has been executed');
    Book.schema.post('save', (doc) =>
        onSave(socket, doc)
    );
    Book.schema.post('remove', (doc) =>
        onRemove(socket, doc)
    );
}


export { register };