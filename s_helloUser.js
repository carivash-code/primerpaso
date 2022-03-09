
var serverlessSDK = require('./serverless_sdk/index.js');
serverlessSDK = new serverlessSDK({
  orgId: 'carivash',
  applicationName: 'curso-sls-hola-mundo',
  appUid: 'c8fkLhQsJlpGv547Nv',
  orgUid: 'df80c303-2a54-4670-b3b6-e2e4de88fc39',
  deploymentUid: '8dac46f1-5bd6-46e6-b595-6ba88377df44',
  serviceName: 'curso-sls-hola-mundo',
  shouldLogMeta: true,
  shouldCompressLogs: true,
  disableAwsSpans: false,
  disableHttpSpans: false,
  stageName: 'dev',
  serverlessPlatformStage: 'prod',
  devModeEnabled: false,
  accessKey: null,
  pluginVersion: '6.1.5',
  disableFrameworksInstrumentation: false
});

const handlerWrapperArgs = { functionName: 'curso-sls-hola-mundo-dev-helloUser', timeout: 6 };

try {
  const userHandler = require('./handler.js');
  module.exports.handler = serverlessSDK.handler(userHandler.helloUser, handlerWrapperArgs);
} catch (error) {
  module.exports.handler = serverlessSDK.handler(() => { throw error }, handlerWrapperArgs);
}