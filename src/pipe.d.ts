import { PipeFunction } from './types';

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
export default function pipe<A, B>(value: A, fn1: PipeFunction<A, B>): Promise<B>;
export default function pipe<A, B, C>(value: A, fn1: PipeFunction<A, B>, fn2: PipeFunction<B, C>): Promise<C>;
export default function pipe<A, B, C, D>(value: A, fn1: PipeFunction<A, B>, fn2: PipeFunction<B, C>, fn3: PipeFunction<C, D>): Promise<D>;
export default function pipe<A, B, C, D, E>(value: A, fn1: PipeFunction<A, B>, fn2: PipeFunction<B, C>, fn3: PipeFunction<C, D>, fn4: PipeFunction<D, E>): Promise<E>;
export default function pipe<A, B, C, D, E, F>(value: A, fn1: PipeFunction<A, B>, fn2: PipeFunction<B, C>, fn3: PipeFunction<C, D>, fn4: PipeFunction<D, E>, fn5: PipeFunction<E, F>): Promise<F>;
export default function pipe<A, B, C, D, E, F, G>(value: A, fn1: PipeFunction<A, B>, fn2: PipeFunction<B, C>, fn3: PipeFunction<C, D>, fn4: PipeFunction<D, E>, fn5: PipeFunction<E, F>, fn6: PipeFunction<F, G>): Promise<G>;
export default function pipe<A, B, C, D, E, F, G, H>(value: A, fn1: PipeFunction<A, B>, fn2: PipeFunction<B, C>, fn3: PipeFunction<C, D>, fn4: PipeFunction<D, E>, fn5: PipeFunction<E, F>, fn6: PipeFunction<F, G>, fn7: PipeFunction<G, H>): Promise<H>;
export default function pipe<A, B, C, D, E, F, G, H, I>(value: A, fn1: PipeFunction<A, B>, fn2: PipeFunction<B, C>, fn3: PipeFunction<C, D>, fn4: PipeFunction<D, E>, fn5: PipeFunction<E, F>, fn6: PipeFunction<F, G>, fn7: PipeFunction<G, H>, fn8: PipeFunction<H, I>): Promise<I>;
