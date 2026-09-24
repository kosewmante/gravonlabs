// Brand lockup. Geometry and colours come from assets-src/brand/gravonlabs-lockup-*.svg.
// The wordmark is live text rather than the SVG's <text>, which can't load Geist as an <img>.
const VARIANTS = {
  dark: { stroke: '#0D1117', bar: '#14B8A6' }, // for light backgrounds
  light: { stroke: '#E6EDF3', bar: '#2DD4BF' }, // for dark backgrounds
};

export const Logo = ({ variant = 'dark' }: { variant?: keyof typeof VARIANTS }) => {
  const { stroke, bar } = VARIANTS[variant];

  return (
    <span className="logo" style={{ color: stroke }}>
      <svg className="logo-mark" viewBox="0 0 48 48" aria-hidden="true">
        <path
          d="M38 8 H15 Q8 8 8 15 V33 Q8 40 15 40 H33 Q40 40 40 33 V25"
          fill="none"
          stroke={stroke}
          strokeWidth="5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <rect x="23" y="20" width="10" height="6" rx="1.5" fill={bar} />
      </svg>
      <span className="logo-word">
        <b>Gravon</b>Labs
      </span>
    </span>
  );
};
