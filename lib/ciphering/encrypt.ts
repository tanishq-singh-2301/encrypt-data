import { Cipher, randomBytes, createCipheriv } from 'crypto';
import { getCipherKey } from '../cipher-key';

type EncryptedOutput = { token: string, vector: Buffer };

export const encryptText = ({ text, password, vector }: { text: string, password: string, vector?: Buffer | undefined }): EncryptedOutput => {
    const iv: Buffer = vector ?? randomBytes(16);
    const CIPHER_KEY: Buffer = getCipherKey(password);
    const cipher: Cipher = createCipheriv("AES-256-CBC", CIPHER_KEY, iv);
    let encrypted: Buffer = cipher.update(text);

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