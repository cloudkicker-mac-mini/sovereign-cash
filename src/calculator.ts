export type EconomicsInput = { transactions: number; surcharge: number; venueShare: number; lift: number };
export function calculateEconomics({transactions,surcharge,venueShare,lift}: EconomicsInput) {
  const monthlySurcharge = transactions * surcharge;
  return { monthlySurcharge, venueRevenue: monthlySurcharge * (venueShare / 100), estimatedSpendLift: transactions * lift };
}
