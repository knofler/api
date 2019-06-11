/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
/**
    * Input Broadcast updates to client when the model changes
*/

import Input from './model';

function onSave(socket, doc, cb) {
    socket.emit('input:save', doc);
}

function onRemove(socket, doc, cb) {
    socket.emit('input:remove', doc);
}

function register(socket) {
    console.log('Input imported in socket is :', 
    Input.schema.post);
    console.log('Register function inside Input API Model has been executed');
    Input.schema.post('save', (doc) =>
        onSave(socket, doc)
    );
    Input.schema.post('remove', (doc) =>
        onRemove(socket, doc)
    );
}


export { register };