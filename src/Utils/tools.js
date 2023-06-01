export function dateTranslator(date) {
  const dateParts = date.split(' ')[0].split('-')
  const frenchFormat = `${dateParts[2]}-${dateParts[1]}-${dateParts[0]}`

  return frenchFormat
}
