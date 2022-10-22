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
console.log(circuitName)

console.log("Loading circuit..");
const circuitDef = JSON.parse(readFileSync(`./circuits/${circuitName}.json`, "utf-8"));

console.log("Instantiating circuit...");
const circuit = new snarkjs.Circuit(circuitDef);

console.log("Starting setup..");
const setup = snarkjs.original.setup(circuit);

console.log("Writing vk_proof");
fs.writeFileSync(
  `./vkeys/${circuitName}.vk_proof`,
  JSON.stringify(stringifyBigInts(setup.vk_proof)),
  "utf8"
);

console.log("Writing vk_verifier");

fs.writeFileSync(
  `./vkeys/${circuitName}.vk_verifier`,
  JSON.stringify(stringifyBigInts(setup.vk_verifier)),
  "utf8"
);