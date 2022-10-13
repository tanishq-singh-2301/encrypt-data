import { decrypt, encrypt } from 'ciphering';

// Key and passowrd
const key = "my-super-password";
const data = "my-secret-data";

// generating encrytion.token
const encryption = encrypt.encryptData({ data, key });

/**
 * output:
 *  {
 *      token: 'd811948ba5dd95584ddf847afc8601c3:5a0229c6cecc095a92b5a3ee1a793240',
 *      vector: <Buffer d8 11 94 8b a5 dd 95 58 4d df 84 7a fc 86 01 c3>
 *  }
 */

// To decrypt data we'll need the encryption.token.
const decryption = decrypt.decryptData({ token: encryption.token, key });

decryption
    .then(console.log)
    .catch(console.error);