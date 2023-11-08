const capitalizeFirstLetter = (value) => {
  if (!value) return ''
  return value.charAt(0).toUpperCase() + value.slice(1)
}

const lowerCaseFirstLetter = (value) => {
  if (!value) return ''
  return value.charAt(0).toLowerCase() + value.slice(1)
}

const capitalizeWords = (value) => {
  return value.replace(/(?:^|\s)\S/g, (replace) => replace.toUpperCase())
}

const snakeToTitle = (value) => {
  const result = value.toLowerCase().replace(
    /([-_][a-z])/g,
    group => ' ' + group
      .toUpperCase()
      .replace('-', '')
      .replace('_', ''))
  const finalResult = result.charAt(0).toUpperCase() + result.slice(1)
  return finalResult
}

export {
  capitalizeFirstLetter,
  lowerCaseFirstLetter,
  capitalizeWords,
  snakeToTitle
}
