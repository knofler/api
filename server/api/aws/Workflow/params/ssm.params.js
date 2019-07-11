/* eslint-disable comma-dangle */
/* eslint-disable quote-props */

const params = {
    Name: 'STRING_VALUE',
    /* required */
    Type: 'SecureString', // Type: String | StringList | SecureString, /* required */
    /* required */
    Value: 'STRING_VALUE',
    /* required */
    // AllowedPattern: 'STRING_VALUE',
    Description: 'programatically stored mediapackage channels password',
    KeyId: 'alias/aws/ssm',
    // Overwrite: true || false,
    // Policies: 'STRING_VALUE',
    Tags: [{
        Key: 'MEDIA_PACKAGE',
        /* required */
        Value: 'API_DRIVEN_PARAMS' /* required */
      },
      /* more items */
    ],
    Tier: 'Standard' //Tier: Standard | Advanced
  };

export default params;