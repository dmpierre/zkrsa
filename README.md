### zkRSA

This repository's goal will be to perform verifications of rsa signatures within a circom circuit.

The `circom-rsa-verify` folder contains all necessary circuits and tests for carrying out such signature verifications.

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

This is the output format when downloading a proof from the "generate" tab. But you can also pre-format your own proof so as to verify it from the ui. 

### Notes

- Grant proposal V2: https://hackmd.io/DoZPolTRRN-WNYheT7MauA
- Milestone 1 notes: https://hackmd.io/@yHZa50IsRz6mkHZ4ZafYqg/HJGNqzYNo
