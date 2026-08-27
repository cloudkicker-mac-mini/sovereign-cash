import { describe, expect, it } from 'vitest';
import { calculateEconomics } from './calculator';
describe('calculateEconomics', () => { it('calculates transparent monthly projections', () => { expect(calculateEconomics({transactions:600,surcharge:3.5,venueShare:40,lift:18})).toEqual({monthlySurcharge:2100,venueRevenue:840,estimatedSpendLift:10800}); }); });
