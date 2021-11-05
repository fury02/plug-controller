/* eslint-disable no-underscore-dangle */
/* eslint-disable @typescript-eslint/camelcase */
/* eslint-disable camelcase */
import { HttpAgent } from '@dfinity/agent';
import { BinaryBlob, blobFromUint8Array } from '@dfinity/candid';
import Secp256k1KeyIdentity from '../crypto/secpk256k1/identity';
import { wrappedFetch } from './wrappedFetch'

// import TokenService from '../../interfaces/token';
import { IC_URL_HOST, PLUG_PROXY_HOST } from './constants';

export interface CreateAgentArgs {
  secretKey: BinaryBlob;
  defaultIdentity?: Secp256k1KeyIdentity;
}

export const createIdentity = (secretKey: BinaryBlob): Secp256k1KeyIdentity =>
  Secp256k1KeyIdentity.fromSecretKey(secretKey);

export const createAgent = async ({
  secretKey,
  defaultIdentity,
}: CreateAgentArgs): Promise<HttpAgent> => {
  const identity =
    defaultIdentity || createIdentity(blobFromUint8Array(secretKey));
  const agent = await Promise.resolve(
    new HttpAgent({
      host: process.env.DFX_HOST || PLUG_PROXY_HOST,
      fetch: wrappedFetch,
      identity,
    })
  ).then(async ag => {
    await ag.fetchRootKey();
    return ag;
  });
  return agent;
};

export { createLedgerActor } from './ledger';
export { createNNSActor } from './nns_uid';
