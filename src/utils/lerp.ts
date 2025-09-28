/**
 * Linearly interpolate between two numbers.
 * @param start - The starting value.
 * @param end - The ending value.
 * @param t - The interpolation factor, clamped between 0 and 1.
 */
export default function lerp(start: number, end: number, t: number): number {
    // Ensure t is clamped between 0 and 1
    t = Math.max(0, Math.min(1, t));

    // Perform linear interpolation
    return start + (end - start) * t;
}