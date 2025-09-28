import GUID from "../types/GUID";
import {atom, useAtom} from "jotai";

export const selectedProjectIDAtom = atom<GUID | undefined>(undefined);

export default function useSelectedProjectID() {
    return useAtom(selectedProjectIDAtom);
}