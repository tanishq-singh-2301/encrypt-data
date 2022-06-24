import { Ciphering } from "../src";
import { generate } from 'generate-password';

const randomNumber = (num: number): number => Math.floor(Math.random() * (num + 1))

describe("Ciphering", () => {
    const configKey = {
        length: randomNumber(50),
        numbers: true,
        symbols: true,
        excludeSimilarCharacters: true
    }

    const Key1: string = generate(configKey);
    const Key2: string = generate(configKey);
    const Key3: string = generate(configKey);

    const tests = (shiftingDigit: number, length: number, testName: string): void => {
        const testFunction = (masterPassword: string, data: string, shifting: number): string => {
            const ciphering: Ciphering = new Ciphering(Key1, Key2, Key3, masterPassword);

            const token: string = ciphering.encryptData(data);

            return ciphering.decryptData(token).data!;
        }

        const configTest = {
            length: randomNumber(length),
            numbers: true,
            symbols: true,
            excludeSimilarCharacters: true
        }

        test(testName.toUpperCase(), () => {
            const masterPassword: string = generate(configTest);
            const shifting: number = randomNumber(shiftingDigit);
            const data: string = generate(configTest);
            const isThisMyData: string = testFunction(masterPassword, data, shifting);

            expect(isThisMyData).toMatch(data);
            expect(isThisMyData).toBe(data);
            expect(isThisMyData === data).toBe(true);
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