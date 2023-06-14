import * as dotenv from 'dotenv';

export interface TestRunnerProps {
  functionName: string;
  fixturePath: string;
}

export const testRunner = ({ functionName, fixturePath }: TestRunnerProps) => {
  const env = dotenv.config();

  //TODO: Pass this config to run method
  console.info(env.parsed?.APP_SECRET_TEST);

  const { run } = require(`../functions/${functionName}/index.ts`);

  const eventFixture = require(`../fixtures/${fixturePath}`);

  run(eventFixture);
};
