import { PipeFunction, Then } from './types'

type Initial <T> =
  T extends (...args: any[]) => infer A
    ? Then<A>
    : T

/**
 * Run a set of functions in series using the output of each
 * as the input to the next. The first value is allowed to be
 * of any kind - if it is not a function it is simply passed
 * as the argument to the second item. Subsequent non-function
 * items are ignored.
 *
 * Because `pipe` handles Promise-returning functions, it will
 * always return a Promise in order to maintain a consistent API
 * even if all given functions & values are synchronous.
 */
interface Pipe {
  <A, B> (a: A, b: PipeFunction<Initial<A>, B>): Promise<B>
  <A, B, C> (a: A, b: PipeFunction<Initial<A>, B>, c: PipeFunction<B, C>): Promise<C>
  <A, B, C, D> (a: A, b: PipeFunction<Initial<A>, B>, c: PipeFunction<B, C>, d: PipeFunction<C, D>): Promise<D>
  <A, B, C, D, E> (a: A, b: PipeFunction<Initial<A>, B>, c: PipeFunction<B, C>, d: PipeFunction<C, D>, e: PipeFunction<D, E>): Promise<E>
  <A, B, C, D, E, F> (a: A, b: PipeFunction<Initial<A>, B>, c: PipeFunction<B, C>, d: PipeFunction<C, D>, e: PipeFunction<D, E>, f: PipeFunction<E, F>): Promise<F>
  <A, B, C, D, E, F, G> (a: A, b: PipeFunction<Initial<A>, B>, c: PipeFunction<B, C>, d: PipeFunction<C, D>, e: PipeFunction<D, E>, f: PipeFunction<E, F>, g: PipeFunction<F, G>): Promise<G>
  <A, B, C, D, E, F, G, H> (a: A, b: PipeFunction<Initial<A>, B>, c: PipeFunction<B, C>, d: PipeFunction<C, D>, e: PipeFunction<D, E>, f: PipeFunction<E, F>, g: PipeFunction<F, G>, h: PipeFunction<G, H>): Promise<H>
  <A, B, C, D, E, F, G, H, I> (a: A, b: PipeFunction<Initial<A>, B>, c: PipeFunction<B, C>, d: PipeFunction<C, D>, e: PipeFunction<D, E>, f: PipeFunction<E, F>, g: PipeFunction<F, G>, h: PipeFunction<G, H>, i: PipeFunction<H, I>): Promise<I>

  // type-unsafe fallback
  <T = unknown> (...args: PipeFunction<any, unknown>[]): Promise<T>
}

declare const pipe: Pipe
export default pipe
