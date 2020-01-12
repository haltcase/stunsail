export type Falsy = false | '' | null | undefined | 0
export type Primitive = null | undefined | string | number | boolean | symbol

export type PathLinks = (string | number | symbol)[]

export type ArrayIterator <T, R> =
  (value: T, key: number, collection: T[]) => R

export type MapIterator <K, V, R> =
  (value: V, key: K, collection: Map<K, V>) => R

export type ObjectIterator <T, R> =
  (value: T[keyof T], key: keyof T, collection: T) => R

export type SetIterator <T, R> =
  (value: T, key: T, collection: Set<T>) => R

export type StringIterator <R> =
  (value: string, key: number, collection: string) => R

export type ArrayAccumulator <T, U> =
  (accumulator: U, value: T, key: number, collection: T[]) => U

export type MapAccumulator <K, V, U> =
  (accumulator: U, value: V, key: K, collection: Map<K, V>) => U

export type ObjectAccumulator <T, U> =
  (accumulator: U, value: T[keyof T], key: keyof T, collection: T) => U

export type SetAccumulator <T, U> =
  (accumulator: U, value: T, key: T, collection: Set<T>) => U

export type StringAccumulator <T, U> =
  (accumulator: U, value: string, key: number, collection: T) => U

export type GenericCollection <T> =
  | string
  | T[]
  | Record<any, T>
  | Set<T>
  | Map<any, T>

export type MapKey <T> =
  T extends Map<infer K, any> ? K : never

export type MapValue <T> =
  T extends Map<any, infer V> ? V : never

export type IterableValue <T> =
  T extends Iterable<infer V> ? V : never

export type Callable = (...args: any[]) => any

export type ElementType <
  T extends { [P in K & any]: any },
  K extends keyof T | number
> = T[K]

export type ValidPropertyKey <T> =
  T extends PropertyKey ? T : string

export type ParamType <F extends Callable, P extends number> =
  ElementType<Parameters<F>, P>

export type Param1 <F extends Function> =
  F extends (...args: [infer T1, ...any[]]) => any ? T1 : never

export type Param2 <F extends Function> =
  F extends (a: any, b: infer T2) => any ? T2 : never

export type Param3 <F extends Function> =
  F extends (...args: [any, any, infer T3, ...any[]]) => any ? T3 : never

export type Param4 <F extends Function> =
  F extends (...args: [any, any, any, infer T4, ...any[]]) => any ? T4 : never

export type Param5 <F extends Function> =
  F extends (...args: [any, any, any, any, infer T5, ...any[]]) => any ? T5 : never

export type Param6 <F extends Function> =
  F extends (...args: [any, any, any, any, any, infer T6, ...any[]]) => any ? T6 : never

export type Then <T> =
  T extends PromiseLike<infer A> ? A : T

export type PipeFunction <T, R> =
  (value: Then<T>) => R

export type Tuple <T> = [T, T]
