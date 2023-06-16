export function calculatePoints(amount) {
  const parsedAmmount = parseInt(amount)

  if (parsedAmmount <= 50) return 0

  if (parsedAmmount > 50 && amount <= 100) {
    return parsedAmmount - 50
  }

  if (parsedAmmount > 100) {
    const doublePoints = parsedAmmount - 100
    return doublePoints * 2 + 50
  }
}
