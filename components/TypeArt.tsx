import { CakeSlice } from "@/components/CakeArt";
import type { CakeShape } from "@/lib/cakeTypes";

type Props = {
  shape: CakeShape;
  accent: string;
  crumb?: string;
  className?: string;
};

// Small inline SVG drawings for each type of cake, all on the same 120×90
// canvas as CakeSlice so they line up in a grid.
export default function TypeArt({ shape, accent, crumb = "var(--sponge)", className }: Props) {
  switch (shape) {
    case "slice":
      return <CakeSlice className={className} accent={accent} crumb={crumb} />;

    case "ring":
      return (
        <svg className={className} viewBox="0 0 120 90" aria-hidden="true">
          <ellipse cx="60" cy="80" rx="54" ry="8" fill="var(--plate)" />
          <path d="M14 76 26 30c10-8 58-8 68 0l12 46c-14 8-78 8-92 0z" fill={crumb} />
          <g fill="none" stroke="var(--sponge-dark)" strokeWidth="3" strokeLinecap="round" opacity="0.7">
            <path d="M32 34 26 78" />
            <path d="M46 31 44 80" />
            <path d="M60 30v51" />
            <path d="M74 31l2 49" />
            <path d="M88 34l6 44" />
          </g>
          <ellipse cx="60" cy="30" rx="34" ry="8" fill={accent} opacity="0.9" />
          <ellipse cx="60" cy="30" rx="10" ry="3" fill="var(--plate)" />
          <path d="M30 32c2 10 4 14 6 14s3-8 5-8 2 12 5 12 3-10 5-10" fill="none" stroke={accent} strokeWidth="3" strokeLinecap="round" opacity="0.9" />
        </svg>
      );

    case "loaf":
      return (
        <svg className={className} viewBox="0 0 120 90" aria-hidden="true">
          <ellipse cx="60" cy="80" rx="56" ry="7" fill="var(--plate)" />
          <path d="M10 44c0-14 16-20 50-20s50 6 50 20v34H10z" fill={crumb} />
          <path d="M10 44c0-14 16-20 50-20s50 6 50 20c-10 4-90 4-100 0z" fill="var(--sponge-dark)" />
          <path d="M28 34c10 4 22 4 32 0s22-4 32 0" fill="none" stroke={accent} strokeWidth="4" strokeLinecap="round" />
          <g fill={accent} opacity="0.55">
            <circle cx="30" cy="60" r="2.5" />
            <circle cx="52" cy="66" r="2" />
            <circle cx="74" cy="58" r="2.5" />
            <circle cx="92" cy="68" r="2" />
          </g>
        </svg>
      );

    case "dome":
      return (
        <svg className={className} viewBox="0 0 120 90" aria-hidden="true">
          <ellipse cx="60" cy="82" rx="40" ry="6" fill="var(--plate)" />
          <path d="M28 46c0-30 64-30 64 0z" fill="var(--sponge-dark)" />
          <rect x="30" y="44" width="60" height="38" rx="3" fill={crumb} />
          <rect x="30" y="54" width="60" height="22" fill={accent} opacity="0.85" />
          <g stroke="var(--cream)" strokeWidth="2" opacity="0.7">
            <path d="M40 54v22M50 54v22M60 54v22M70 54v22M80 54v22" />
          </g>
          <path d="M44 30c6-4 10 2 16-2s10 2 16-2" fill="none" stroke="var(--cream)" strokeWidth="3" strokeLinecap="round" opacity="0.8" />
        </svg>
      );

    case "roll":
      return (
        <svg className={className} viewBox="0 0 120 90" aria-hidden="true">
          <ellipse cx="62" cy="80" rx="54" ry="7" fill="var(--plate)" />
          <path d="M38 22h66a24 26 0 0 1 0 52H38z" fill="var(--sponge-dark)" />
          <ellipse cx="38" cy="48" rx="26" ry="26" fill={crumb} />
          <path
            d="M38 48c0-4 6-4 6 0 0 8-12 8-12 0 0-12 18-12 18 0 0 16-24 16-24 0 0-20 30-20 30 0"
            fill="none"
            stroke={accent}
            strokeWidth="4"
            strokeLinecap="round"
          />
          <g fill="var(--cream)" opacity="0.8">
            <circle cx="70" cy="30" r="1.6" />
            <circle cx="84" cy="36" r="1.6" />
            <circle cx="96" cy="28" r="1.6" />
            <circle cx="76" cy="44" r="1.6" />
          </g>
        </svg>
      );

    case "disc":
      return (
        <svg className={className} viewBox="0 0 120 90" aria-hidden="true">
          <ellipse cx="60" cy="74" rx="56" ry="12" fill="var(--plate)" />
          <path d="M10 42h100v26c0 8-22 12-50 12S10 76 10 68z" fill={crumb} />
          <path d="M10 62c0 8 22 12 50 12s50-4 50-12v6c0 8-22 12-50 12S10 76 10 68z" fill="var(--sponge-dark)" opacity="0.6" />
          <ellipse cx="60" cy="42" rx="50" ry="14" fill={accent} opacity="0.9" />
          <ellipse cx="54" cy="38" rx="22" ry="5" fill="var(--cream)" opacity="0.35" />
        </svg>
      );

    case "check":
      return (
        <svg className={className} viewBox="0 0 120 90" aria-hidden="true">
          <ellipse cx="62" cy="80" rx="54" ry="7" fill="var(--plate)" />
          <path d="M60 18h44l8 8v52H60z" fill="var(--sponge-dark)" />
          <path d="M60 18h44l8 8H68z" fill="var(--cream)" />
          <rect x="16" y="26" width="52" height="52" rx="4" fill="var(--cream)" />
          <rect x="21" y="31" width="21" height="21" fill={accent} />
          <rect x="42" y="31" width="21" height="21" fill="var(--sponge)" />
          <rect x="21" y="52" width="21" height="21" fill="var(--sponge)" />
          <rect x="42" y="52" width="21" height="21" fill={accent} />
        </svg>
      );
  }
}
