import Ciphering from "../src";
import { generate } from 'generate-password';

const randomNumber = (num: number): number => Math.floor(Math.random() * (num + 1))

describe("Ciphering", () => {
    const config = {
        length: randomNumber(50),
        numbers: true,
        symbols: true,
        excludeSimilarCharacters: true
    }

    const key_1: string = generate(config);
    const key_2: string = generate(config);
    const key_3: string = generate(config);

    const tests = (shiftingDigit: number, length: number, testName: string) => {
        const test_function = (masterPassword: string, data: string, shifting: number): string => {
            const ciphering: Ciphering = new Ciphering(key_1, key_2, key_3, masterPassword, shifting);

            const token: string = ciphering.encryptData(data);

            return ciphering.decryptData(token);
        }

        const config = {
            length: randomNumber(length),
            numbers: true,
            symbols: true,
            excludeSimilarCharacters: true
        }

        test(testName, () => {
            const masterPassword: string = generate(config);
            const shifting: number = randomNumber(shiftingDigit);
            const data: string = generate(config);
            const is_this_my_data: string = test_function(masterPassword, data, shifting);

            expect(is_this_my_data).toMatch(data);
            expect(is_this_my_data).toBe(data);
            expect(is_this_my_data === data).toBe(true);
        });
    }

    tests(randomNumber(10), randomNumber(100), "Test 1");
    tests(randomNumber(10), randomNumber(100), "Test 2");
    tests(randomNumber(10), randomNumber(100), "Test 3");
    tests(randomNumber(10), randomNumber(100), "Test 4");
    tests(randomNumber(10), randomNumber(100), "Test 5");
    tests(randomNumber(10), randomNumber(100), "Test 6");
    tests(randomNumber(10), randomNumber(100), "Test 7");
});