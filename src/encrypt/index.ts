import { Cipher, randomBytes, createCipheriv } from 'crypto';
import { getCipherKey } from '../../lib/cipher-key';

type EncryptedOutput = { token: string, vector: Buffer };

export const encryptData = ({ data, key, vector }: { data: string, key: string, vector?: Buffer | undefined }): EncryptedOutput => {
    const iv: Buffer = vector ?? randomBytes(16);
    const CIPHER_KEY: Buffer = getCipherKey(key);
    const cipher: Cipher = createCipheriv("AES-256-CBC", CIPHER_KEY, iv);
    let encrypted: Buffer = cipher.update(data);

    encrypted = Buffer.concat([encrypted, cipher.final()]);

    const token = `${iv.toString('hex')}:${encrypted.toString('hex')}`;

    return {
        token,
        vector: iv
    };
};

export type {
    EncryptedOutput
}