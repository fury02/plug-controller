import { Principal } from '@dfinity/principal';

import { PRINCIPAL_REGEX, CANISTER_MAX_LENGTH } from '../utils/dfx/constants';

export const isValidPrincipal = (text: string): boolean =>
  Principal.fromText(text).toText() === text;

export const validatePrincipalId = (text: string): boolean => {
  try {
    return Boolean(PRINCIPAL_REGEX.test(text) && isValidPrincipal(text));
  } catch (e) {
    return false;
  }
};

export const validateCanisterId = (text: string): boolean => {
  try {
    return Boolean(
      text.length <= CANISTER_MAX_LENGTH && isValidPrincipal(text)
    );
  } catch (e) {
    return false;
  }
};

export const validateToken = (metadata: any): boolean =>
  Boolean(!!metadata.decimal && !!metadata.name && !!metadata.symbol);
