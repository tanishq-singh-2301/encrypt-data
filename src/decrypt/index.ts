import { createDecipheriv, Decipher } from 'crypto';
import { getCipherKey } from '../../lib/cipher-key';

export const decryptData = ({ token, key }: { token: string, key: string }): Promise<string> => new Promise((resolve, reject) => {
    try {
        const textParts: Array<string> = token.split(':');
    
        const iv: Buffer = Buffer.from(textParts.shift()!, 'hex');
        const CIPHER_KEY: Buffer = getCipherKey(key);
        const encryptedText: Buffer = Buffer.from(textParts.join(':'), 'hex');
        const decipher: Decipher = createDecipheriv("AES-256-CBC", CIPHER_KEY, iv);
        let decrypted: Buffer = decipher.update(encryptedText);
    
        decrypted = Buffer.concat([decrypted, decipher.final()]);
    
        resolve(decrypted.toString());
    } catch (error) {
        reject(error)
    }
});