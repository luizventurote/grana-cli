// "charsm" does not support all platforms (e.g. macOS). We load it
// dynamically so the CLI can still run where the module is unavailable.
export let lip;

export async function initCliUI() {
  try {
    const { initLip, Lipgloss } = await import('charsm');
    const ok = await initLip();
    if (ok) {
      lip = new Lipgloss();
    }
    return ok;
  } catch {
    return false;
  }
}

export function renderTable(headers, rows) {
  if (!lip) {
    const lines = [headers.join('\t')];
    for (const r of rows) {
      lines.push(r.join('\t'));
    }
    return lines.join('\n');
  }

  return lip.newTable({
    data: { headers, rows },
    table: { border: 'rounded', color: '99' },
    header: { color: '212', bold: true },
    rows: { even: { color: '246' } }
  });
}
