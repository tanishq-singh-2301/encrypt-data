import decrypt from "./decrypt";
import encrypt from "./encrypt";

class ciphering {
  key_1: string;
  key_2: string;
  key_3: string;
  shifting: number;
  masterPassword: string;

  constructor(key_1: string, key_2: string, key_3: string, masterPassword: string) {
    this.key_1 = key_1;
    this.key_2 = key_2;
    this.key_3 = key_3;
    this.masterPassword = masterPassword;
    this.shifting = 0;
  }

  public encryptData(data: string): string {
    const token: string = encrypt(this.masterPassword, data, this.key_1, this.key_2, this.key_3, this.shifting);

    return token;
  }

  public decryptData(token: string): string {
    const data: string = decrypt(this.masterPassword, token, this.key_1, this.key_2, this.key_3, this.shifting);

    return data
  }
}

export default ciphering;