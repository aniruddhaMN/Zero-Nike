export default function HeroImage({ productName, colorway }) {
  return (
    <div className="hero">
      <div className="hero__placeholder">
        <svg
          className="hero__icon"
          viewBox="0 0 24 24"
          fill="none"
          aria-hidden="true"
        >
          <rect x="3" y="4" width="18" height="16" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
          <circle cx="8" cy="9" r="1.75" stroke="currentColor" strokeWidth="1.5" />
          <path
            d="M3.5 17 9 11.5l3 3L16.5 10 20.5 15"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
        </svg>
        <span className="hero__caption">
          {productName} — {colorway}
          <br />
          Hero image placeholder, 375 × 450
        </span>
      </div>
    </div>
  );
}
