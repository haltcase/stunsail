/**
 * Return an empty value matching the kind supplied by `type`,
 * which is either a string representing its kind or any object.
 */
export default function toEmpty<T>(type: T[]): T[];
export default function toEmpty<K extends string | number | symbol, V>(type: Record<K, V>): Record<K, V>;
export default function toEmpty<K, V>(type: Map<K, V>): Map<K, V>;
export default function toEmpty<T>(type: Set<T>): Set<T>;
export default function toEmpty<T = ''>(type: string): T;
export default function toEmpty(type: boolean): false;
export default function toEmpty(type: number): 0;
export default function toEmpty(type: null): null;
export default function toEmpty(type: undefined): undefined;
