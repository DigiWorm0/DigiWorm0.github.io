import {atom, useAtomValue} from "jotai";
import {selectedProjectIDAtom} from "./useSelectedProjectID";
import projectsDB from "../db/ProjectsDB";

export const selectedProjectAtom = atom((get) => {
    const selectedProjectID = get(selectedProjectIDAtom);
    return projectsDB.find(project => project.id === selectedProjectID);
});

export default function useSelectedProject() {
    return useAtomValue(selectedProjectAtom);
}