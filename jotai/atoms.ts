import { atom } from "jotai";
import { atomWithStorage } from "jotai/utils";

export const countAtom = atomWithStorage("count", 0);
export const countAtom2 = atom(0);
