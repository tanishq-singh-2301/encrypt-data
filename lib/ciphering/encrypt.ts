import { Cipher, randomBytes, createCipheriv } from 'crypto';
import getCipherKey from '../cipher_key';

type encryptedOutput = { token: string, vector: Buffer };

const encryptText = ({ text, password, vector = null }: { text: string, password: string, vector?: Buffer | null }): encryptedOutput => {
    const iv: Buffer = vector ? vector : randomBytes(16);
    const CIPHER_KEY: Buffer = getCipherKey(password);
    const cipher: Cipher = createCipheriv("AES-256-CBC", CIPHER_KEY, iv);
    let encrypted: Buffer = cipher.update(text);

    encrypted = Buffer.concat([encrypted, cipher.final()]);

    return {
        token: iv.toString('hex') + ':' + encrypted.toString('hex'),
        vector: iv
    };
};

export default encryptText;
export type {
    encryptedOutput
}