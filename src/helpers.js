
export const linkify = s => s.replace(' ', '_')
                             .replace(/\W+/, '')
                             .replace(/_+$/, '')
                             .toLowerCase();
