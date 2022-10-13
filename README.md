# **Ciphering**

<img src="./public/images/logo.svg" width="160" height="160" alt="sharp logo" align="right">

The typical use case for this high speed Node.js module is to convert data in common text to encrypted string.

Encryption and decryption of the data is done with the help of military grade encryption `(AES-256)` [crypto](https://nodejs.org/api/crypto.html).

The data is encrypted with three levels of encryption excluding the one which uses the master key.

Most modern macOS, Windows and Linux systems running Node.js >= 12.13.0
do not require any additional install or runtime dependencies.

## _**Examples**_

```sh
npm install ciphering
```

```typescript
const { decrypt, encrypt } = require('ciphering');

// or

import { decrypt, encrypt } from 'ciphering';
```

### _**General**_

1. Create a `password` (key),
2. Must be protected and saved in `.env` file when deployed in production.

```typescript
const key: string = process.env.KEY as string;
```

### _**Encrypting Data**_

```typescript
const data: string = "my-personal-data"; // data which to be encrypted
const encryption = encrypt.encryptData({ data, key });

/**
 * output:
 *  {
 *      token: 'd811948ba5dd95584ddf847afc8601c3:5a0229c6cecc095a92b5a3ee1a793240',
 *      vector: <Buffer d8 11 94 8b a5 dd 95 58 4d df 84 7a fc 86 01 c3>
 *  }
 */
```

### _**Decrypting Data**_

```typescript
// To decrypt data we'll need the encrypted_data token.
const decryption = decrypt.decryptData({ token: encryption.token, key });

decryption
    .then(console.log) // "my-personal-data"
    .catch(console.error); // error: unknown
```

## _**Image Example**_
<img src="./public/images/Snap.png" width="100%" alt="sharp logo" align="center" style="padding-bottom:30px; padding-top:10px;">

## Contributing

A [guide for contributors](https://github.com/tanishq-singh-2301/ciphering/blob/main/.github/CONTRIBUTING.md)
covers reporting bugs, requesting features and submitting code changes.

[![Node v14](https://img.shields.io/badge/Node-v14-green.svg)](https://nodejs.org/dist/latest/docs/api/n-api.html#n_api_n_api_version_matrix)

## _**Licensing**_

The MIT License (MIT)

Copyright (c) 2022 Tanishq Singh <tanishqsingh640@gmail.com>

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.