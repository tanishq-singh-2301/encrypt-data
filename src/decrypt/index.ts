import { decryptText } from "../../lib/ciphering/decrypt";
import type { DecryptedOutput } from "../../lib/ciphering/decrypt";
import { encryptText, EncryptedOutput } from "../../lib/ciphering/encrypt";

export const main = (
  masterPasssword: string,
  token: string,
  key_1: string,
  key_2: string,
  key_3: string
): string => {
  const values: Array<string> = token.split(":");
  const token4 = `${values[1]}:${values[3]}`;
  const vecToken = `${values[0]}:${values[2]}`;

  const token3: DecryptedOutput = decryptText({
    token: token4,
    password: key_3,
  });

  const vector: Buffer = Buffer.from(
    decryptText({ token: vecToken, password: key_2 }).data,
    "hex"
  );

  const token1: EncryptedOutput = encryptText({
    text: masterPasssword,
    password: key_1,
    vector,
  });

  const data: DecryptedOutput = decryptText({
    token: token3.data,
    password: token1.token,
  });

  return data.data;
};
