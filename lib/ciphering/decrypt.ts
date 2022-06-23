import { createDecipheriv, Decipher } from 'crypto';
import getCipherKey from '../cipher_key';

type decryptedOutput = { data: string };

const decryptText = ({ token, password }: { token: string, password: string }): decryptedOutput => {
    const textParts: Array<string> = token.split(':');

    const iv: Buffer = Buffer.from(textParts.shift()!, 'hex');
    const CIPHER_KEY: Buffer = getCipherKey(password);
    const encryptedText: Buffer = Buffer.from(textParts.join(':'), 'hex');
    const decipher: Decipher = createDecipheriv("AES-256-CBC", CIPHER_KEY, iv);
    let decrypted: Buffer = decipher.update(encryptedText);

    decrypted = Buffer.concat([decrypted, decipher.final()]);

    return {
        data: decrypted.toString()
    };
}

export default decryptText;
export type {
    decryptedOutput
}