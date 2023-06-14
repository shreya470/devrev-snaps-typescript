import fetch_ticket_digest from './functions/fetch_ticket_digest/index'

export const functionFactory = {
  fetch_ticket_digest,
} as const;

export type FunctionFactoryType = keyof typeof functionFactory;
