export default function range (...args) {
  if (!args.length) return []

  let [start, end, step = 1] =
    args.length === 1 ? [0, args[0]] : args

  if (start > end) step = -Math.abs(step)
  if (step === 0) return [start, end]

  let i = start
  const result = []
  while (step > 0 ? end >= i : end <= i) {
    result.push(i)
    i += step
  }

  return result
}
