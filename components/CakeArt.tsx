type Props = {
  className?: string;
  accent?: string;
};

// A layered cake drawn in inline SVG, so the site needs no image files.
export function LayerCake({ className, accent = "var(--berry)" }: Props) {
  return (
    <svg
      className={className}
      viewBox="0 0 240 220"
      role="img"
      aria-label="A layered cake with a cherry on top"
    >
      <ellipse cx="120" cy="200" rx="104" ry="14" fill="var(--plate)" />
      <path d="M36 112h168v76c0 8-38 14-84 14s-84-6-84-14z" fill="var(--sponge)" />
      <rect x="36" y="140" width="168" height="10" fill={accent} opacity="0.85" />
      <rect x="36" y="166" width="168" height="8" fill="var(--cream)" />
      <ellipse cx="120" cy="112" rx="84" ry="16" fill="var(--cream)" />
      <path
        d="M36 112c0 10 8 22 14 22s8-10 14-10 8 14 16 14 8-12 16-12 8 14 16 14 8-12 16-12 8 12 16 12 8-14 14-14 10 10 14 0 8-8 8-14z"
        fill="var(--cream)"
      />
      <path d="M120 62c4-14 14-22 26-24" stroke="var(--leaf)" strokeWidth="4" fill="none" strokeLinecap="round" />
      <circle cx="118" cy="82" r="16" fill={accent} />
      <circle cx="112" cy="76" r="4" fill="#fff" opacity="0.6" />
      <g fill={accent} opacity="0.7">
        <circle cx="70" cy="108" r="3" />
        <circle cx="160" cy="104" r="3" />
        <circle cx="96" cy="116" r="2.5" />
        <circle cx="146" cy="117" r="2.5" />
      </g>
    </svg>
  );
}

export function CakeSlice({ className, accent = "var(--berry)" }: Props) {
  return (
    <svg className={className} viewBox="0 0 120 90" aria-hidden="true">
      <path d="M10 46 100 22v50L10 80z" fill="var(--sponge)" />
      <path d="M10 46 100 22 112 30 22 54z" fill="var(--cream)" />
      <path d="M100 22l12 8v50l-12-8z" fill="var(--sponge-dark)" />
      <path d="M10 60 100 40v7L10 67z" fill={accent} opacity="0.85" />
      <path d="M100 40l12 6v7l-12-6z" fill={accent} />
      <circle cx="62" cy="28" r="7" fill={accent} />
    </svg>
  );
}

export function Whisk({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 64 64" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round">
      <path d="M40 24 58 6" />
      <path d="M40 24c-10-6-30 6-32 22s16 14 32-22z" />
      <path d="M40 24c-6-2-22 12-24 22" />
      <path d="M40 24c-2 6-14 22-22 24" />
    </svg>
  );
}
