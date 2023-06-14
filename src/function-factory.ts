import search_giphy from './functions/search_giphy/index';
import render_giphy from './functions/render_giphy/index';

export const functionFactory = {
  search_giphy,
  render_giphy,
} as const;

export type FunctionFactoryType = keyof typeof functionFactory;
