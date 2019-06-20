/* eslint-disable comma-dangle */
/* eslint-disable quote-props */

const s3_bucket = 'media-live-api';

const params = {
  Name: 'Media-live-API-INPUT-DEFAULT-AUTO',
  RoleArn: 'arn:aws:iam::103365315157:role/MediaLiveAccessRole',
  Type: 'RTP_PUSH',
  InputSecurityGroups: ['2993169']
};

export default params;
