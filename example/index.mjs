import Ciphering from 'ciphering';

// These are general keys, (same for all users).
const key1 = "key-1";
const key2 = "key-2";
const key3 = "key-3";

//"master-pass" is different and is given by user.
// Is used to encrypt and decrypt the data.
const ciphering = new Ciphering(key1, key2, key3, "master-pass");


const encryption = ciphering.encryptData("my-personal-data"); // personal data of the user
console.log('Encryption:\n', encryption); // Encrypted token that can be saved in the database
/**
 * output:
 * 
 * Encryption:
 *   ea8dd60fed5597caf0423f9ff859808f:57ad6f882bc63293c740043112e1efdc:d58b0261a972994a55839271c
 *   f48b120fd616fd7434a2e3dda00cdee9a06be7dbe5ed85c01d7a44b2db11385a5dddc1d:bfdbf9b807d046905aea0cb93cd8
 *   198d9ed187a3b4ecb9007a08b0df5a29d653a19a0b900dd183f17d6c57d6e8e64b88623c634f6e545565c0f5d50005d6ea38d0
 *   9f9fd089228e5beae91fffcf3ce760883a3f805b68e0c924ea606f816ebea71aa627b3828d0f4ec7615dd21695861e
 * 
 */


const decryption = ciphering.decryptData(encryption);
console.log('Decryption:', decryption);
/**
 * output:
 * 
 * Decryption: my-personal-data
 */