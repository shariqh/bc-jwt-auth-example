const BoxSDK = require('box-node-sdk');

const sdkConfig = require('../../config.json');
const sdk = BoxSDK.getPreconfiguredInstance(sdkConfig);

// Get the service account client, used to create and manage app user accounts
// The enterprise ID is pre-populated by the JSON configuration,
// so you don't need to specify it here
export const serviceAccountClient = sdk.getAppAuthClient('enterprise');

// Get an app user or managed user client
// const appUserClient = sdk.getAppAuthClient('user', 'YOUR-APP-USER-ID');
