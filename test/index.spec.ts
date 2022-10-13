import { decrypt, encrypt } from "../";
import { generate } from 'generate-password';

const randomNumber = (num: number): number => Math.floor(Math.random() * (num + 1))

describe("Ciphering", () => {
    const tests = (length: number, testName: string, match: number): void => {
        const configTest = {
            length: randomNumber(length),
            numbers: true,
            symbols: true,
            excludeSimilarCharacters: true
        }

        test(testName.toUpperCase(), () => {
            const key: string = generate(configTest);
            const data: string = generate(configTest);

            const encryption = encrypt.encryptData({ data, key });
            const decryption = decrypt.decryptData({ token: encryption.token, key: match ? key : generate(configTest) });

            decryption
                .then((value) => expect(data === value).toBe(true))
                .catch(() => expect(0 === match).toBe(true));
        });
    }

    Array.from({ length: 100 })
        .map((_, index) => tests(randomNumber(100), `Test ${index + 1}`, index % 3));
});