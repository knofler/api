// const channel_name = "media-live-api-channel";
// function create_mediapackage_channel(channel_name) {
//   const channel_p_name = channel_name + "-p",
//     channel_b_name = channel_name + "-b";

//   const newchannel_p = MP.createChannel(params, (err, data) => {
//     if (err) console.log(err, err.stack); // an error occurred
//     else console.log(data); // successful response
//     return data;
//   });

//   const newchannel_b = MP.createChannel(params, (err, data) => {
//     if (err) console.log(err, err.stack); // an error occurred
//     else console.log(data); // successful response
//     return data;
//   });

//   const babel_p = MP.describeChannel(channel_p_name, (err, data) => {
//     if (err) console.log(err, err.stack); // an error occurred
//     else console.log(data); // successful response
//     return data;
//   });

//   const babel_b = MP.describeChannel(channel_b_name, (err, data) => {
//     if (err) console.log(err, err.stack); // an error occurred
//     else console.log(data); // successful response
//     return data;
//   });

//   const destinations = {
//     'p_id': channel_p_name,
//     'p_url': babel_p['HlsIngest']['IngestEndpoints'][0]['Url'],
//     'p_u': babel_p['HlsIngest']['IngestEndpoints'][0]['Username'],
//     'p_p': babel_p['HlsIngest']['IngestEndpoints'][0]['Password'],
//     'b_id': channel_b_name,
//     'b_url': babel_b['HlsIngest']['IngestEndpoints'][0]['Url'],
//     'b_u': babel_b['HlsIngest']['IngestEndpoints'][0]['Username'],
//     'b_p': babel_b['HlsIngest']['IngestEndpoints'][0]['Password'],
//   }
//   return destinations
// }
// const destinations = create_mediapackage_channel(channel_name)