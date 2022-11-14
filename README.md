### zkRSA

This repository's goal will be to perform verifications of rsa signatures within a circom circuit.

The `circom-rsa-verify` folder contains all necessary circuits and tests for carrying out such signature verifications.

The `zkrsa-ui` contains the UI for generating or verifying proofs of valid RSA signatures using circom.


### Signing messages from the CLI

To generate keys from the CLI - note that your message does not need to be quoted and can be of arbitrary length:

```sh
$ yarn sign this is a message to sign
```

### Notes

- Grant proposal V2: https://hackmd.io/DoZPolTRRN-WNYheT7MauA
- Milestone 1 notes: https://hackmd.io/@yHZa50IsRz6mkHZ4ZafYqg/HJGNqzYNo
