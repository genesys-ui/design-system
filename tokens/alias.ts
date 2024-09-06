import { aliasTokensJson } from './constants';

export const getAliasTokensByNameJson = (exp: string) =>
  aliasTokensJson.filter((token) => token.name.includes(exp));
