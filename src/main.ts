import { testRunner } from './test-runner/test-runner';
import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';

(async () => {
  const argv = await yargs(hideBin(process.argv)).options({
    fixturePath: {
      type: 'string',
      require: true,
    },
    functionName: {
      type: 'string',
      require: true,
    },
  }).argv;

  if (!argv.fixturePath || !argv.functionName) {
    console.error(
      'Please make sure you have passed fixturePath & functionName'
    );
  }

  testRunner({
    fixturePath: argv.fixturePath,
    functionName: argv.functionName,
  });
})();
