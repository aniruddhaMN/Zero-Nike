import fs from "fs";
import path from "path";

const DATA_FILE = "nike_pegasus_size_stock_b2ebb9fac7f74d6a8bb3432d7642176f.json";

// Reads the catalog JSON fresh on every call so the page always reflects
// the current contents of the file on disk.
export function getPegasusProduct() {
  const filePath = path.join(process.cwd(), DATA_FILE);
  const raw = fs.readFileSync(filePath, "utf-8");
  const rows = JSON.parse(raw);

  const sizes = [...rows]
    .sort((a, b) => a.display_order - b.display_order)
    .map((row) => ({
      sku: row.sku,
      label: row.size_label,
      sizeUsMen: row.size_us_men,
      sizeUsWomen: row.size_us_women,
      sizeEu: row.size_eu,
      status: row.stock_status,
      quantity: row.stock_quantity,
    }));

  const first = rows[0];

  return {
    productName: first.product_name,
    styleCode: first.style_code,
    colorway: first.colorway,
    price: first.price,
    launchDate: first.launch_date,
    sizes,
  };
}
