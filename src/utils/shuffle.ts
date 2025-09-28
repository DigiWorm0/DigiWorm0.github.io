/**
 * Randomize array element order in-place.
 * Based on the Fisher-Yates shuffle algorithm: https://bost.ocks.org/mike/shuffle/
 * @param array - The array to shuffle.
 * @returns The shuffled array (same reference as input).
 */
export default function shuffle<T>(array: T[]): T[] {
    let index = array.length;

    // While there remain elements to shuffle…
    while (index !== 0) {

        // Pick a remaining element…
        const newIndex = Math.floor(Math.random() * index--);

        // And swap it with the current element.
        const tempElement = array[index];
        array[index] = array[newIndex];
        array[newIndex] = tempElement;
    }

    return array;
}