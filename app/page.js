import { getPegasusProduct } from "@/lib/pegasus";
import HeroImage from "@/components/HeroImage";
import ProductInfo from "@/components/ProductInfo";
import SizeSelector from "@/components/SizeSelector";

// Always read the JSON file fresh — no static caching of the catalog.
export const dynamic = "force-dynamic";

export default function Page() {
  const product = getPegasusProduct();

  return (
    <main className="screen">
      <HeroImage productName={product.productName} colorway={product.colorway} />
      <ProductInfo
        productName={product.productName}
        colorway={product.colorway}
        price={product.price}
      />
      <SizeSelector sizes={product.sizes} />
    </main>
  );
}
