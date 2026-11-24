export default function ProductInfo({ productName, colorway, price }) {
  const formattedPrice = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(price);

  return (
    <section className="product-info">
      <h1 className="product-info__name">{productName}</h1>
      <p className="product-info__colorway">{colorway}</p>
      <p className="product-info__price">{formattedPrice}</p>
    </section>
  );
}
