### zkRSA

[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)

This repository's goal will be to perform verifications of rsa signatures and generating zero knowledge proofs regarding their validity. All from within a web browser and locally.

The `circom-rsa-verify` folder contains all necessary circuits and tests for carrying out such signature verifications. It has been cloned from [here](https://github.com/zkp-application/circom-rsa-verify). You should check it out! This allows us to perform proof generation and verification of valid RSA signatures.

The `zkrsa-ui` contains the UI for generating or verifying proofs of valid RSA signatures using circom.

### Signing messages from the CLI

To generate keys from the CLI - note that your message does not need to be quoted and can be of arbitrary length:

```sh
$ yarn sign this is a message to sign
```

It will log a new signature, generated out of an RSA keypair. You can copy those values and use them directly within the zkRSA UI for generating a new proof.

### Generating and verifying proofs

On the zkRSA UI, you can generate and verify proofs for valid RSA signatures. The verify tab, accepts a JSON with the following format:

```js
{
    "proof": proof,
    "publicSignals": publicSignals
}
```

This is the output format when downloading a proof from the "generate" tab. You can also pre-format your own proof to verify it from the ui.

### Notes

- Grant proposal V2: https://hackmd.io/DoZPolTRRN-WNYheT7MauA
- Milestone 1 notes: https://hackmd.io/@yHZa50IsRz6mkHZ4ZafYqg/HJGNqzYNo
