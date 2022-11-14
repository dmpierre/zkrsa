### zkRSA

This repository's goal will be to perform verifications of rsa signatures within a circom circuit.

The `circom-rsa-verify` folder contains all necessary circuits and tests for carrying out such signature verifications.

The `zkrsa-ui` contains the UI for generating or verifying proofs of valid RSA signatures using circom.

Extracting x509 certificate:

```python
from cryptography import x509
c = "0A 1B 2C[...]"
certificate = x509.load_der_x509_certificate(bytes.fromhex(c))
pk = certificate.public_key()
modulus = pk.public_numbers().n
signature = int.from_bytes(certificate.signature, "little")
fingerprint = certificate.fingerprint(certificate.signature_hash_algorithm)
int.from_bytes(fingerprint, "little")
```

### Todo
- Use IndexedDB for offline vk storage and access?
- Network status info ? Informing user whether vkey downloaded from remote or used locally

### Notes

- Grant proposal V2: https://hackmd.io/DoZPolTRRN-WNYheT7MauA
- Milestone 1 notes: https://hackmd.io/@yHZa50IsRz6mkHZ4ZafYqg/HJGNqzYNo
