import { clear, log } from 'console';
import inquirer from 'inquirer';
import fs from 'fs';
import path from 'path';
import { exec } from 'child_process';

const versionStringToArrayInt = (version) => {
    let versionArray = version.split(".");

    for (var i = 0; i < versionArray.length; i++)
        versionArray[i] = parseInt(versionArray[i]);

    return versionArray;
}

const packageJsonPath = path.join('./package.json');

fs.readFile(packageJsonPath, (err, data) => {
    if (err) throw err;

    const packageJson = JSON.parse(data)

    clear();

    let version = versionStringToArrayInt(packageJson.version);


    const defaultVersion = `v${version[0]}.${version[1]}.${version[2] + 1}`

    inquirer
        .prompt([
            {
                name: 'tests',
                message: 'Did you tested the code locally?',
                type: 'confirm',
                default: false
            },
            {
                name: 'linting',
                message: 'Did you linted the code locally?',
                type: 'confirm',
                default: false
            },
            {
                name: 'version',
                message: `Next version (current v${packageJson.version}):`,
                type: 'input',
                default: defaultVersion.toString(),
                validate: async (input) => {
                    const pattern = /v[0-9]+.[0-9]+.[0-9]+/gm;

                    if (pattern.test(input)) return true;
                    else return "Example version v1.0.0, v1.0.0-beta";
                }
            },
            {
                name: "commitMessage",
                message: "Commit Message: ",
                type: "input",
                validate: (input) => input.length !== 0
            },
            {
                name: "release",
                message: "Create a new release",
                default: true,
                type: "confirm"
            },
            {
                name: "push",
                message: "Are you sure wanna push?",
                type: "confirm",
                default: true
            }
        ])
        .then(answers => {
            const { tests, version, commitMessage, release, push } = answers;

            if (!push) return log("Exitted");

            else {
                if (!tests) {
                    exec("npm run test", (err, stdout) => {
                        if (err) log(err);

                        log(stdout)
                    });
                }

                packageJson.version = version.split("v")[1];
                fs.writeFile(packageJsonPath, JSON.stringify(packageJson), (err) => {
                    if (err) throw new Error(`\n${err}`);

                    exec("git add .", (err, stdout) => {
                        if (err) throw new Error(err);

                        log(stdout)
                    });

                    exec(`git commit -m "${commitMessage}, ${version}"`, (err, stdout) => {
                        if (err) log(err);

                        log(stdout)
                    });

                    exec("git push", (err, stdout) => {
                        if (err) log(err);

                        log(stdout)
                    });
                });
            }
        })
        .catch((err) => console.error(err.message));
});