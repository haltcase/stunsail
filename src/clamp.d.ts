/**
 * Ensures that a number `value` is between bounds `lower` and `upper`.
 *
 * If `value` is not a number it's assumed to be 0, while `lower` and
 * `upper` are set to `value` when they aren't numbers (or aren't provided).
 */
export default function clamp(value: number, lower?: number, upper?: number): number;
