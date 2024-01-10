import { cmpTokensJson } from './constants';

export const getCmpTokensJson = (component: string) =>
  cmpTokensJson.filter((token) => token.attributes.component === component);
