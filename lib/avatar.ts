const PALETTES: [string, string][] = [
  ["#1c7a44", "#22935a"],
  ["#14351f", "#1c7a44"],
  ["#0f2318", "#22935a"],
  ["#1c7a44", "#0f2318"],
];

function initials(name: string) {
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0])
    .join("")
    .toUpperCase();
}

export function founderAvatar(name: string, seed: number) {
  const [c1, c2] = PALETTES[seed % PALETTES.length];
  const label = initials(name);
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="480" height="600" viewBox="0 0 480 600">
    <defs>
      <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stop-color="${c1}"/>
        <stop offset="1" stop-color="${c2}"/>
      </linearGradient>
      <pattern id="p" width="28" height="28" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
        <line x1="0" y1="0" x2="0" y2="28" stroke="rgba(255,255,255,0.05)" stroke-width="28"/>
      </pattern>
    </defs>
    <rect width="480" height="600" fill="url(#g)"/>
    <rect width="480" height="600" fill="url(#p)"/>
    <text x="50%" y="53%" font-family="Arial, Helvetica, sans-serif" font-size="168" font-weight="700" fill="rgba(255,255,255,0.92)" text-anchor="middle" dominant-baseline="middle">${label}</text>
  </svg>`;
  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
}
