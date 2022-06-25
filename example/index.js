import { Ciphering } from 'ciphering'

// General protected keys (All 3 are required).
const key1 = "KEY_1";
const key2 = "KEY_2";
const key3 = "KEY_3";

// Master password (user dependent).
const masterPassword = "master-pass";

const ciphering = new Ciphering(key1, key2, key3, masterPassword);

const my_data = "my-personal-data";
const encrypted_data = ciphering.encryptData(my_data);

/**
 * output:
 *  063e66fce3bcc4575bb6210635c65c39:97915eb723bb58dc1bede7b1f49d00e7:06280df9baf15118900585f3
 *  e72ccbd74efe89a8747ae08244b1e9e35eb2dda62f1130077a256677dbb7c39d5407403e:1e336f2a9972455629e7463324c
 *  ca1de2dc94019702bc6f9c422569baa64e12f0026f4d217775d890ffb1cc83c8519b3fa911953009e5eb74808ba7329dcfe50c
 *  1f743c52cd78cdc8e8c8628e2684b32ec20a9ebdaf6937c395c0a448471e16e05e4c5e5435c5846dbbad99f066c43f1
 */

// To decrypt data we'll need the encrypted_data token.
const decryption = ciphering.decryptData(encrypted_data);

decryption.success // boolean
decryption.data // "my-personal-data" iff success === true

/**
 * output:
 *  {
 *    success: true,
 *    data: 'my-personal-data'
 *  }
 */