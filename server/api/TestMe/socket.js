/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
/**
    * TestMe Broadcast updates to client when the model changes
*/

import TestMe from './model';

function onSave(socket, doc, cb) {
    socket.emit('testMe:save', doc);
}

function onRemove(socket, doc, cb) {
    socket.emit('testMe:remove', doc);
}

function register(socket) {
    console.log('TestMe imported in socket is :', 
    TestMe.schema.post);
    console.log('Register function inside TestMe API Model has been executed');
    TestMe.schema.post('save', (doc) =>
        onSave(socket, doc)
    );
    TestMe.schema.post('remove', (doc) =>
        onRemove(socket, doc)
    );
}


export { register };