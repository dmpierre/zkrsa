//@ts-ignore
import snarkjs from "snarkjs";
import { readFileSync } from "fs";
import {
  stringifyBigInts,
  unstringifyBigInts,
  //@ts-ignore
} from "snarkjs/src/stringifybigint.js";
import fs from "fs";

const circuitName = process.argv[2];

console.log("Loading circuit..");
const circuitDef = JSON.parse(
  readFileSync(`./circuits/${circuitName}.json`, "utf-8")
);

console.log("Instantiating circuit...");
const circuit = new snarkjs.Circuit(circuitDef);

const input = {
  a: 30,
  b: 40,
};

console.log("Calculating witness..")
const witness = circuit.calculateWitness(input);

const vkProof = JSON.parse(
  fs.readFileSync(`./vkeys/${circuitName}.vk_proof`, "utf8")
);

console.log("Generating verifier")
const vkVerifier = JSON.parse(
  fs.readFileSync(`./vkeys/${circuitName}.vk_verifier`, "utf8")
);
console.log("Generating proof..")
const { proof, publicSignals } = snarkjs.original.genProof(
  unstringifyBigInts(vkProof),
  unstringifyBigInts(witness)
);

if (
  snarkjs.original.isValid(
    unstringifyBigInts(vkVerifier),
    unstringifyBigInts(proof),
    unstringifyBigInts(publicSignals)
  )
) {
  console.log("Valid!");
} else {
    console.log("Invalid!")
}
