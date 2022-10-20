//@ts-ignore
import snarkjs from "snarkjs";
import { readFileSync } from "fs";
import {
    stringifyBigInts,
    unstringifyBigInts,
    //@ts-ignore
} from "snarkjs/src/stringifybigint.js";

const circuitDef = JSON.parse(
  readFileSync("./circuits/circuit.json", "utf-8")
);
const circuit = new snarkjs.Circuit(circuitDef);
const setup = snarkjs.original.setup(circuit);
