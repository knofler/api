/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
/**
    * Mpchannel Broadcast updates to client when the model changes
*/

import Mpchannel from './model';

function onSave(socket, doc, cb) {
    socket.emit('mpchannel:save', doc);
}

function onRemove(socket, doc, cb) {
    socket.emit('mpchannel:remove', doc);
}

function register(socket) {
    console.log('Mpchannel imported in socket is :', 
    Mpchannel.schema.post);
    console.log('Register function inside Mpchannel API Model has been executed');
    Mpchannel.schema.post('save', (doc) =>
        onSave(socket, doc)
    );
    Mpchannel.schema.post('remove', (doc) =>
        onRemove(socket, doc)
    );
}


export { register };