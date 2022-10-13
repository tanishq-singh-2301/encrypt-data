import { encryptText } from "../lib/ciphering/encrypt";
import type { EncryptedOutput } from "../lib/ciphering/encrypt";

import { decryptText } from "../lib/ciphering/decrypt";
import type { DecryptedOutput } from "../lib/ciphering/decrypt";

export class Ciphering {
	key: string;

	constructor(key: string) {
		this.key = key;
  	}

  	public encryptData(data: string): EncryptedOutput {
    	return encryptText({ text: data, password: this.key });
  	}

 	public decryptData(token: string): { data?: DecryptedOutput; success: boolean; } {
    	try {
			const data = decryptText({ token, password: this.key })

      		return { success: true, data };
    	} catch (error) {
      		console.error(error);

      		return { success: false };
    	}
  	}
}
