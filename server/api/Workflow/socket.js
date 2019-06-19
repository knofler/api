/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
/**
    * Workflow Broadcast updates to client when the model changes
*/

import Workflow from './model';

function onSave(socket, doc, cb) {
    socket.emit('workflow:save', doc);
}

function onRemove(socket, doc, cb) {
    socket.emit('workflow:remove', doc);
}

function register(socket) {
    console.log('Workflow imported in socket is :', 
    Workflow.schema.post);
    console.log('Register function inside Workflow API Model has been executed');
    Workflow.schema.post('save', (doc) =>
        onSave(socket, doc)
    );
    Workflow.schema.post('remove', (doc) =>
        onRemove(socket, doc)
    );
}


export { register };