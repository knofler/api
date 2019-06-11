/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
/**
    * Channel Broadcast updates to client when the model changes
*/

import Channel from './model';

function onSave(socket, doc, cb) {
    socket.emit('channel:save', doc);
}

function onRemove(socket, doc, cb) {
    socket.emit('channel:remove', doc);
}

function register(socket) {
    console.log('Channel imported in socket is :', 
    Channel.schema.post);
    console.log('Register function inside Channel API Model has been executed');
    Channel.schema.post('save', (doc) =>
        onSave(socket, doc)
    );
    Channel.schema.post('remove', (doc) =>
        onRemove(socket, doc)
    );
}


export { register };