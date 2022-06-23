import encryptText from '../../lib/ciphering/encrypt';
import type { encryptedOutput } from '../../lib/ciphering/encrypt';
import shifting from '../../lib/shifting/shifting';

const main = (masterPasssword: string, data: string, key_1: string, key_2: string, key_3: string, shiftingNum: number): string => {
    const token1: encryptedOutput = encryptText({ text: masterPasssword, password: key_1 });
    const vecToken: string = encryptText({ text: token1.vector.toString('hex'), password: key_2 }).token;

    const token2: encryptedOutput = encryptText({ text: data, password: token1.token });
    const token3: string = shifting(token2.token, shiftingNum);
    const token4: encryptedOutput = encryptText({ text: token3, password: key_3 });

    const masterVectorToken: Array<string> = vecToken.split(":");
    const masterToken: Array<string> = token4.token.split(":");

    const token: string = `${masterVectorToken[0]}:${masterToken[0]}:${masterVectorToken[1]}:${masterToken[1]}`

    return token;
};

export default main;