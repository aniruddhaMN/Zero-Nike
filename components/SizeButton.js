import { STATUS_LABEL } from "@/lib/status";

export default function SizeButton({ size, isSelected, onSelect }) {
  const isDisabled = size.status === "sold_out";
  const statusClass = size.status.replace("_", "-"); // in-stock | low-stock | sold-out

  const className = [
    "size-btn",
    `size-btn--${statusClass}`,
    isSelected ? "size-btn--selected" : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <button
      type="button"
      className={className}
      disabled={isDisabled}
      aria-pressed={isSelected}
      aria-label={`Men's size ${size.sizeUsMen}, Women's size ${size.sizeUsWomen}. ${STATUS_LABEL[size.status]}.`}
      onClick={onSelect}
    >
      <span className="size-btn__label">{size.label}</span>
      <span className="size-btn__tag">{STATUS_LABEL[size.status]}</span>
    </button>
  );
}
