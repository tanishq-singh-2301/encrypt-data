import { main as decrypt } from "./decrypt";
import { main as encrypt } from "./encrypt";

export class Ciphering {
  key_1: string;

  key_2: string;

  key_3: string;

  masterPassword: string;

  constructor(key_1: string, key_2: string, key_3: string, masterPassword: string) {
    this.key_1 = key_1;
    this.key_2 = key_2;
    this.key_3 = key_3;
    this.masterPassword = masterPassword;
  }

  public encryptData(data: string): string {
    const token: string = encrypt(this.masterPassword, data, this.key_1, this.key_2, this.key_3);

    return token;
  }

  public decryptData(token: string): {
    data?: string,
    success: boolean
  } {
    try {
      const data: string = decrypt(this.masterPassword, token, this.key_1, this.key_2, this.key_3);

      return { success: true, data }
    } catch (error) {
      console.error(error);

      return { success: false }
    }
  }
}