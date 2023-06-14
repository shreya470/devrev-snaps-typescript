import function_1 from './functions/function_1/index';
import function_2 from './functions/function_2/index';
import function_3 from './functions/function_2/index';

export const functionFactory = {
  function_1,
  function_2,
  function_3,
} as const;

export type FunctionFactoryType = keyof typeof functionFactory;
