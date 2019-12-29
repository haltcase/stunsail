/**
 * If `value` is an Array or Object, return a random value. If it's a number
 * and `bound` is absent, return a random number between 0 and `value`. If
 * `bound` is provided, return a random value between `value` and `bound`.
 */
export default function random(value: number, bound?: number): number;
export default function random<T>(value: T[]): T;
export default function random<T>(value: ArrayLike<T>): T;
export default function random<T extends object>(value: T): T[keyof T];
