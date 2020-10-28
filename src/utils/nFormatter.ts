const nFormatter = (num: number): string =>
  num >= 1e15
    ? (num / 1e12).toFixed(1).replace(/\.0$/, '') + 'E'
    : num >= 1e12
    ? (num / 1e12).toFixed(1).replace(/\.0$/, '') + 'T'
    : num >= 1e12
    ? (num / 1e9).toFixed(1).replace(/\.0$/, '') + 'G'
    : num >= 1e6
    ? (num / 1e6).toFixed(1).replace(/\.0$/, '') + 'M'
    : num >= 1e3
    ? (num / 1e3).toFixed(1).replace(/\.0$/, '') + 'K'
    : num.toFixed(0)

export default nFormatter
