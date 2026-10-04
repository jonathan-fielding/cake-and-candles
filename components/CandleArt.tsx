import type { CandleArtSpec } from "@/lib/candles";

// Candle drawings in inline SVG, so the candles pages need no image files.
// Every drawing shares one 120×160 viewBox so cards line up neatly.

const outline = "rgb(60 30 20 / 0.2)";

function Flame({ x, y, size = 1 }: { x: number; y: number; size?: number }) {
  return (
    <g transform={`translate(${x} ${y}) scale(${size})`}>
      <circle cy="-11" r="15" fill="#ffd27a" opacity="0.25" />
      <g className="candle-flame">
        <path d="M0 0c-6 0-9-5-9-10 0-7 9-16 9-21 0 5 9 14 9 21 0 5-3 10-9 10z" fill="#f6a93b" />
        <path d="M0-1c-3 0-4.5-2.5-4.5-5 0-3.5 4.5-8 4.5-11 0 3 4.5 7.5 4.5 11 0 2.5-1.5 5-4.5 5z" fill="#fff1b8" />
      </g>
    </g>
  );
}

function Wick({ x, top, bottom }: { x: number; top: number; bottom: number }) {
  return <path d={`M${x} ${bottom}V${top}`} stroke="#3b2620" strokeWidth="1.6" strokeLinecap="round" />;
}

// A slab of iced sponge, for candles that sit on a cake.
function CakeTop() {
  return (
    <g>
      <rect x="0" y="128" width="120" height="32" fill="var(--sponge)" />
      <path
        d="M0 122h120v12c-6 0-6 8-12 8s-6-6-12-6-6 10-12 10-6-8-12-8-6 6-12 6-6-9-12-9-6 7-12 7-6-5-12-5-6 8-12 8-6-6-12-6z"
        fill="var(--cream)"
      />
    </g>
  );
}

function Plate() {
  return <ellipse cx="60" cy="150" rx="52" ry="7" fill="var(--plate)" />;
}

// A spiral birthday candle standing in a little holder.
function Spiral({ x, top, wax, accent }: { x: number; top: number; wax: string; accent: string }) {
  const bottom = 124;
  const stripes = [];
  for (let y = top + 10; y < bottom - 4; y += 12) {
    stripes.push(
      <polygon key={y} points={`${x - 6},${y + 6} ${x + 6},${y} ${x + 6},${y + 4} ${x - 6},${y + 10}`} fill={accent} opacity="0.85" />,
    );
  }
  return (
    <g>
      <rect x={x - 6} y={top} width="12" height={bottom - top} rx="2" fill={wax} stroke={outline} />
      {stripes}
      <path d={`M${x - 10} ${bottom - 6}h20l-3 8h-14z`} fill={accent} />
      <Wick x={x} top={top - 6} bottom={top} />
      <Flame x={x} y={top - 5} size={0.8} />
    </g>
  );
}

function Taper({ x, top, wax, accent, holder = true }: { x: number; top: number; wax: string; accent: string; holder?: boolean }) {
  return (
    <g>
      <path d={`M${x - 9} 124L${x - 6} ${top}h12L${x + 9} 124z`} fill={wax} stroke={outline} />
      {holder && (
        <g fill={accent}>
          <path d={`M${x - 16} 122h32l-4 10h-24z`} />
          <rect x={x - 4} y="130" width="8" height="14" />
          <ellipse cx={x} cy="146" rx="22" ry="5" />
        </g>
      )}
      <Wick x={x} top={top - 7} bottom={top} />
      <Flame x={x} y={top - 6} />
    </g>
  );
}

function Sparks({ x, y, color }: { x: number; y: number; color: string }) {
  const rays = [0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330];
  return (
    <g className="candle-sparks" stroke={color} strokeWidth="2" strokeLinecap="round">
      {rays.map((deg, i) => {
        const rad = (deg * Math.PI) / 180;
        const inner = i % 2 ? 8 : 6;
        const outer = i % 2 ? 22 : 16;
        return (
          <line
            key={deg}
            x1={(x + Math.cos(rad) * inner).toFixed(1)}
            y1={(y + Math.sin(rad) * inner).toFixed(1)}
            x2={(x + Math.cos(rad) * outer).toFixed(1)}
            y2={(y + Math.sin(rad) * outer).toFixed(1)}
          />
        );
      })}
      <circle cx={x} cy={y} r="5" fill="#fff1b8" stroke="none" />
    </g>
  );
}

function Drawing({ shape, wax, accent = "var(--berry)", glyph }: CandleArtSpec) {
  switch (shape) {
    case "spiral":
      return (
        <>
          <CakeTop />
          <Spiral x={36} top={70} wax={wax} accent={accent} />
          <Spiral x={60} top={58} wax="#fff3c4" accent="#e9b949" />
          <Spiral x={84} top={70} wax="#bfe3f2" accent="#4d9fc4" />
        </>
      );
    case "trick":
      return (
        <>
          <CakeTop />
          <Spiral x={42} top={66} wax={wax} accent={accent} />
          <Spiral x={78} top={66} wax="#f2a7c3" accent="#e05d6f" />
          <g fill="#ffe08a">
            <circle cx="30" cy="40" r="2" />
            <circle cx="55" cy="38" r="1.6" />
            <circle cx="66" cy="44" r="2" />
            <circle cx="92" cy="36" r="1.6" />
          </g>
        </>
      );
    case "number":
      return (
        <>
          <CakeTop />
          <text
            x="60"
            y="126"
            textAnchor="middle"
            fontSize="84"
            fontWeight="900"
            fontFamily="var(--font-body)"
            fill={wax}
            stroke={accent}
            strokeWidth="3"
            paintOrder="stroke"
          >
            {glyph ?? "1"}
          </text>
          <Wick x={60} top={58} bottom={66} />
          <Flame x={60} y={59} />
        </>
      );
    case "letter":
      return (
        <>
          <CakeTop />
          {(glyph ?? "ABC").split("").slice(0, 3).map((ch, i) => {
            const x = 30 + i * 30;
            return (
              <g key={i}>
                <text
                  x={x}
                  y="124"
                  textAnchor="middle"
                  fontSize="40"
                  fontWeight="900"
                  fontFamily="var(--font-body)"
                  fill={i === 1 ? "#f2a7c3" : wax}
                  stroke={i === 1 ? "#e05d6f" : accent}
                  strokeWidth="2.5"
                  paintOrder="stroke"
                >
                  {ch}
                </text>
                <Wick x={x} top={87} bottom={94} />
                <Flame x={x} y={88} size={0.65} />
              </g>
            );
          })}
        </>
      );
    case "sparkler":
      return (
        <>
          <CakeTop />
          <path d="M44 124V64M76 124V54" stroke={wax} strokeWidth="2" />
          <path d="M44 100V68M76 92V58" stroke="#6b6f76" strokeWidth="6" strokeLinecap="round" />
          <Sparks x={44} y={62} color={accent} />
          <Sparks x={76} y={52} color="#ffd27a" />
        </>
      );
    case "flower":
      return (
        <>
          <CakeTop />
          <rect x="57" y="104" width="6" height="22" fill="#5e8a43" />
          <g fill={wax} stroke={accent} strokeWidth="1.5">
            <path d="M60 108C40 108 18 96 14 80c14-2 30 6 46 28z" />
            <path d="M60 108c20 0 42-12 46-28-14-2-30 6-46 28z" />
            <path d="M60 108C48 100 36 82 38 66c12 4 22 20 22 42z" />
            <path d="M60 108c12-8 24-26 22-42-12 4-22 20-22 42z" />
          </g>
          {[
            [20, 80],
            [40, 66],
            [80, 66],
            [100, 80],
          ].map(([x, y]) => (
            <g key={x}>
              <rect x={x - 2} y={y - 12} width="4" height="12" fill="#fff3c4" />
              <Flame x={x} y={y - 13} size={0.45} />
            </g>
          ))}
          <path d="M60 106V76" stroke="#6b6f76" strokeWidth="3" />
          <Sparks x={60} y={68} color="#ffd27a" />
        </>
      );
    case "slim":
      return (
        <>
          <CakeTop />
          {[
            [34, 54],
            [52, 34],
            [70, 46],
            [88, 62],
          ].map(([x, top], i) => (
            <g key={x}>
              <rect x={x - 3} y={top} width="6" height={126 - top} rx="2" fill={i % 2 ? accent : wax} stroke={outline} />
              <Wick x={x} top={top - 5} bottom={top} />
              <Flame x={x} y={top - 4} size={0.6} />
            </g>
          ))}
        </>
      );
    case "novelty":
      return (
        <>
          <CakeTop />
          <path d="M60 124v-18" stroke="#9aa1ab" strokeWidth="3" />
          <path
            d="M60 52l11 22 24 3-17 17 4 24-22-11-22 11 4-24-17-17 24-3z"
            fill={wax}
            stroke={accent}
            strokeWidth="3"
            strokeLinejoin="round"
          />
          <circle cx="53" cy="86" r="3" fill="#3b2620" />
          <circle cx="67" cy="86" r="3" fill="#3b2620" />
          <path d="M54 96c3 4 9 4 12 0" stroke="#3b2620" strokeWidth="2.5" fill="none" strokeLinecap="round" />
          <Wick x={60} top={44} bottom={52} />
          <Flame x={60} y={45} />
        </>
      );
    case "taper":
      return (
        <>
          <Plate />
          <Taper x={60} top={40} wax={wax} accent={accent} />
        </>
      );
    case "pillar":
      return (
        <>
          <Plate />
          <path d="M30 66v76c0 4 13 7 30 7s30-3 30-7V66z" fill={wax} stroke={outline} />
          <ellipse cx="60" cy="66" rx="30" ry="7" fill={wax} stroke={outline} />
          <ellipse cx="60" cy="68" rx="20" ry="4" fill={accent} opacity="0.25" />
          <Wick x={60} top={58} bottom={67} />
          <Flame x={60} y={59} />
        </>
      );
    case "votive":
      return (
        <>
          <Plate />
          <rect x="44" y="98" width="32" height="44" rx="3" fill={wax} stroke={outline} />
          <Wick x={60} top={90} bottom={98} />
          <Flame x={60} y={91} />
          <path d="M34 82h52l-4 64H38z" fill={accent} opacity="0.28" stroke={accent} strokeWidth="2" />
        </>
      );
    case "tealight":
      return (
        <>
          <Plate />
          {[36, 84].map((x) => (
            <g key={x}>
              <path d={`M${x - 22} 126h44v14c0 3-10 5-22 5s-22-2-22-5z`} fill={accent} />
              <ellipse cx={x} cy="126" rx="22" ry="5" fill={wax} stroke={outline} />
              <Wick x={x} top={118} bottom={126} />
              <Flame x={x} y={119} size={0.8} />
            </g>
          ))}
        </>
      );
    case "jar":
      return (
        <>
          <Plate />
          <path d="M34 98v44c0 4 12 6 26 6s26-2 26-6V98z" fill={wax} />
          <ellipse cx="60" cy="98" rx="26" ry="5" fill={wax} stroke={outline} />
          <rect x="34" y="112" width="52" height="18" fill={accent} opacity="0.9" />
          <path d="M44 121h32" stroke="#fff" strokeWidth="2" opacity="0.7" strokeLinecap="round" />
          <Wick x={60} top={90} bottom={98} />
          <Flame x={60} y={91} />
          <path
            d="M30 70v72c0 5 14 8 30 8s30-3 30-8V70"
            fill="none"
            stroke="var(--muted)"
            strokeWidth="2.5"
            opacity="0.6"
          />
          <ellipse cx="60" cy="70" rx="30" ry="6" fill="none" stroke="var(--muted)" strokeWidth="2.5" opacity="0.6" />
        </>
      );
    case "floating":
      return (
        <>
          <ellipse cx="60" cy="132" rx="56" ry="20" fill={accent} opacity="0.3" />
          <ellipse cx="60" cy="132" rx="56" ry="20" fill="none" stroke={accent} strokeWidth="2" opacity="0.7" />
          {[
            [36, 128, 0.7],
            [76, 134, 0.85],
          ].map(([x, y, s]) => (
            <g key={x}>
              <path
                d={`M${x - 16 * s} ${y}c0 ${6 * s} ${32 * s} ${6 * s} ${32 * s} 0v${-6 * s}c0-${5 * s}-${32 * s}-${5 * s}-${32 * s} 0z`}
                fill={wax}
                stroke={outline}
              />
              <Wick x={x} top={y - 13 * s} bottom={y - 6 * s} />
              <Flame x={x} y={y - 12 * s} size={s} />
            </g>
          ))}
        </>
      );
    case "gel":
      return (
        <>
          <Plate />
          <path d="M34 84v58c0 4 12 6 26 6s26-2 26-6V84z" fill={wax} opacity="0.65" />
          <circle cx="50" cy="128" r="7" fill={accent} />
          <circle cx="70" cy="116" r="5" fill="#ffd166" />
          <circle cx="62" cy="134" r="4" fill="#6f9a4f" />
          <g fill="#fff" opacity="0.7">
            <circle cx="44" cy="104" r="2" />
            <circle cx="76" cy="100" r="1.5" />
            <circle cx="56" cy="112" r="1.5" />
          </g>
          <Wick x={60} top={76} bottom={86} />
          <Flame x={60} y={77} />
          <path
            d="M30 64v78c0 5 14 8 30 8s30-3 30-8V64"
            fill="none"
            stroke="var(--muted)"
            strokeWidth="2.5"
            opacity="0.6"
          />
          <ellipse cx="60" cy="64" rx="30" ry="6" fill="none" stroke="var(--muted)" strokeWidth="2.5" opacity="0.6" />
        </>
      );
  }
}

export function CandleArt({ className, ...spec }: CandleArtSpec & { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 120 160" aria-hidden="true">
      <Drawing {...spec} />
    </svg>
  );
}

// A birthday cake covered in different candles, for the top of the candles page.
export function CandleCake({ className }: { className?: string }) {
  const candles = [
    { x: 64, top: 64, wax: "#f2a7c3", stripe: "#e05d6f" },
    { x: 92, top: 50, wax: "#fff3c4", stripe: "#e9b949" },
    { x: 120, top: 40, wax: "#bfe3f2", stripe: "#4d9fc4" },
    { x: 148, top: 50, wax: "#b9e4c9", stripe: "#6f9a4f" },
    { x: 176, top: 64, wax: "#d9c2ef", stripe: "#7d5ba6" },
  ];
  return (
    <svg
      className={className}
      viewBox="0 0 240 220"
      role="img"
      aria-label="A birthday cake with five lit candles on top"
    >
      <ellipse cx="120" cy="204" rx="104" ry="12" fill="var(--plate)" />
      <path d="M36 118h168v72c0 8-38 14-84 14s-84-6-84-14z" fill="var(--sponge)" />
      <rect x="36" y="150" width="168" height="10" fill="var(--berry)" opacity="0.85" />
      <rect x="36" y="174" width="168" height="7" fill="var(--cream)" />
      <ellipse cx="120" cy="118" rx="84" ry="16" fill="var(--cream)" />
      <path
        d="M36 118c0 10 8 22 14 22s8-10 14-10 8 14 16 14 8-12 16-12 8 14 16 14 8-12 16-12 8 12 16 12 8-14 14-14 10 10 14 0 8-8 8-14z"
        fill="var(--cream)"
      />
      {candles.map((c) => {
        const bottom = 118;
        const stripes = [];
        for (let y = c.top + 8; y < bottom - 4; y += 11) {
          stripes.push(
            <polygon
              key={y}
              points={`${c.x - 5},${y + 5} ${c.x + 5},${y} ${c.x + 5},${y + 4} ${c.x - 5},${y + 9}`}
              fill={c.stripe}
            />,
          );
        }
        return (
          <g key={c.x}>
            <rect x={c.x - 5} y={c.top} width="10" height={bottom - c.top} rx="2" fill={c.wax} />
            {stripes}
            <Wick x={c.x} top={c.top - 6} bottom={c.top} />
            <Flame x={c.x} y={c.top - 5} size={0.85} />
          </g>
        );
      })}
      <g fill="var(--berry)" opacity="0.7">
        <circle cx="70" cy="126" r="3" />
        <circle cx="168" cy="124" r="3" />
        <circle cx="106" cy="130" r="2.5" />
        <circle cx="140" cy="131" r="2.5" />
      </g>
    </svg>
  );
}
