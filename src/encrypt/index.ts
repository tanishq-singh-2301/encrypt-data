import { encryptText } from "../../lib/ciphering/encrypt";
import type { EncryptedOutput } from "../../lib/ciphering/encrypt";

export const main = (
  masterPasssword: string,
  data: string,
  key_1: string,
  key_2: string,
  key_3: string
): string => {
  const token1: EncryptedOutput = encryptText({
    text: masterPasssword,
    password: key_1,
  });
  const vecToken: string = encryptText({
    text: token1.vector.toString("hex"),
    password: key_2,
  }).token;

  const token2: EncryptedOutput = encryptText({
    text: data,
    password: token1.token,
  });
  const token4: EncryptedOutput = encryptText({
    text: token2.token,
    password: key_3,
  });

  const masterVectorToken: Array<string> = vecToken.split(":");
  const masterToken: Array<string> = token4.token.split(":");

  const token = `${masterVectorToken[0]}:${masterToken[0]}:${masterVectorToken[1]}:${masterToken[1]}`;

  return token;
};
