import { createVerify, X509Certificate } from "crypto";
import fs from "fs";
import { asn1 } from "node-forge";
import { exit } from "process";
//@ts-ignore
const { extractSignature } = require("node-signpdf");

const main = () => {
  const pdf = fs.readFileSync("./adhaar.pdf");
  let pem = fs.readFileSync("./cert.pem");

  // extract asn1 signature
  const { ByteRange, signedData, signature } = extractSignature(pdf);
  const x509 = new X509Certificate(pem);
  const signatureASN1 = asn1.fromDer(signature).value as string;

  // verify signature
  const verifyAlgo = createVerify("RSA-SHA1");
  verifyAlgo.update(signedData);
  const result = verifyAlgo.verify(x509.publicKey, signatureASN1, "binary");

  console.log(`Signature verified: ${result}`);
  return 0;
};

exit(main());
