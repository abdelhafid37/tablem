export default function Noise() {
  return (
    <div
      aria-hidden
      className="pointer-events-none z-9999 fixed inset-0 opacity-[.12] mix-blend-multiply"
    >
      <svg className="h-full w-full" preserveAspectRatio="none">
        <filter id="noiseFilter">
          <feTurbulence
            type="fractalNoise"
            baseFrequency=".8"
            numOctaves={2}
            stitchTiles="stitch"
          />
          <feColorMatrix type="saturate" values="0" />
        </filter>

        <rect width="100%" height="100%" filter="url(#noiseFilter)" />
      </svg>
    </div>
  );
}
