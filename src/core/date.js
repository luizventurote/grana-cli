export function parseDate(input) {
  if (!input) return new Date().toISOString().slice(0, 10);
  const d = new Date(input);
  if (Number.isNaN(d.getTime())) {
    throw new Error('Invalid date');
  }
  return d.toISOString().slice(0, 10);
}
