import { describe, it, expect } from 'vitest';
import { parseDate } from '../src/core/date.js';

describe('parseDate', () => {
  it('returns valid ISO date', () => {
    const d = parseDate('2023-01-02');
    expect(d).toBe('2023-01-02');
  });

  it('throws on invalid date', () => {
    expect(() => parseDate('invalid')).toThrow();
  });
});
