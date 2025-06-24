export function calculateCost(distance: number, time: number): number {
  // Simple example: ₦500 per km, ₦200 per hour
  return distance * 500 + time * 200
}