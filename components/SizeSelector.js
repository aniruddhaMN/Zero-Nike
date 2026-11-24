"use client";

import { useMemo, useState } from "react";
import SizeButton from "./SizeButton";

export default function SizeSelector({ sizes }) {
  const [selectedSku, setSelectedSku] = useState(null);

  const selected = useMemo(
    () => sizes.find((size) => size.sku === selectedSku) ?? null,
    [sizes, selectedSku]
  );

  function handleSelect(size) {
    if (size.status === "sold_out") return;
    setSelectedSku((current) => (current === size.sku ? null : size.sku));
  }

  return (
    <section className="size-selector" aria-label="Select a size">
      <h2 className="size-selector__heading">Select size</h2>

      <div className="size-grid" role="group">
        {sizes.map((size) => (
          <SizeButton
            key={size.sku}
            size={size}
            isSelected={size.sku === selectedSku}
            onSelect={() => handleSelect(size)}
          />
        ))}
      </div>

      <button type="button" className="buy-now" disabled={!selected}>
        {selected ? "Buy Now" : "Select a size"}
      </button>
    </section>
  );
}
