import { createHash } from 'crypto';

const getCipherKey: Function = (key: string): Buffer => createHash('sha256').update(key).digest();

export default getCipherKey;