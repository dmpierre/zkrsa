import "@testing-library/jest-dom";
import { TextEncoder, TextDecoder } from "util";
global.TextEncoder = TextEncoder;
//@ts-ignore
global.TextDecoder = TextDecoder;
