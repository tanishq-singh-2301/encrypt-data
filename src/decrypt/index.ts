import decryptText from "../../lib/ciphering/decrypt";
import type { decryptedOutput } from "../../lib/ciphering/decrypt";
import encryptText, { encryptedOutput } from "../../lib/ciphering/encrypt";
import unshifting from "../../lib/shifting/unshifting";

const main = (masterPasssword: string, token: string, key_1: string, key_2: string, key_3: string, shifting: number): string => {

    const values: Array<string> = token.split(":");
    const token4: string = `${values[1]}:${values[3]}`;
    const vecToken: string = `${values[0]}:${values[2]}`;

    const token3: decryptedOutput = decryptText({ token: token4, password: key_3 });
    const token2: string = unshifting(token3.data, shifting);

    const vector: Buffer = Buffer.from(decryptText({ token: vecToken, password: key_2 }).data, 'hex');

    const token1: encryptedOutput = encryptText({ text: masterPasssword, password: key_1, vector });

    const data: decryptedOutput = decryptText({ token: token2, password: token1.token });

    return data.data;
}

export default main;