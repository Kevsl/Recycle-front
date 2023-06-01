export function checkEmail(email) {
  if (/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
    return true
  } else {
    return false
  }
}
export function checkPassword(password) {
  if (
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/.test(
      password
    )
  ) {
    return true
  } else {
    return false
  }
}

export function checkString(string) {
  const wordsToBan = [
    'Connard',
    'Salope',
    'Cul',
    'Sexe',
    'Sodomie',
    'bite',
    'Nichons',
    'Nég',
    'Neg',
    'Meurtre',
    'Génocide',
    'bougn',
    'juif',
    'éja',
  ]

  const lowerCaseString = string.toLowerCase()

  for (let i = 0; i < wordsToBan.length; i++) {
    const word = wordsToBan[i]
    if (lowerCaseString.includes(word)) {
      return false
    }
  }

  return true
}
