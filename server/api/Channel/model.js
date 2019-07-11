/*
* Channel Model
*
* This contains defalut Channel model.
*/


import mongoose from 'mongoose';
import { strictEqual } from 'assert';
const Schema = mongoose.Schema;

const ChannelSchema = new Schema({
    Arn: {
        type: 'String',
        required: false,
    },
    Name: {
        type: 'String',
        required: false,
    },
    channelName: {
        type: 'String',
        required: false,
    },
    channelId: {
        type: 'String',
        required: false,
    },
    InputId: {
        type: 'String',
        required: false,
    },
    destinationsOneSettingsOneUrl: {
        type: 'String',
        required: false,
    },
    destinationsOneSettingsOneUsername: {
        type: 'String',
        required: false,
    },
    destinationsOneSettingsTwoUrl: {
        type: 'String',
        required: false,
    },
    destinationsOneSettingsTwoUsername: {
        type: 'String',
        required: false,
    },
    destinationsTwoSettingsOneUrl: {
        type: 'String',
        required: false,
    },
    destinationsTwoSettingsOneUsername: {
        type: 'String',
        required: false,
    },
    destinationsTwoSettingsTwoUrl: {
        type: 'String',
        required: false,
    },
    destinationsTwoSettingsTwoUsername: {
        type: 'String',
        required: false,
    },
    channelClass: {
        type: 'String',
        required: false,
    },
    info: {
        type: 'String',
        required: false,
    },
    slug: {
        type: 'String',
        required: false,
    },
    cuid: {
        type: 'String',
        required: false,
    },
    createdBy: {
        type: 'String',
        required: false,
    },
    created_at: {
        type: 'Date',
        default: Date.now,
        required: false,
    },
});

export default mongoose.model('Channel', ChannelSchema);