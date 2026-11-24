# Prompt notes

## Prompt given to build the page

> Build an interactive, responsive prototype of the Pegasus 43 shoe page in Next.js. Work from my page plan (Google Doc), my UI spec doc, and the size and stock JSON file, and read the name, price, colorway and all 26 sizes from the JSON so the data stays live. Design for a 375px minimum width and make every component responsive so it scales across mobile sizes, with fixed positions for each component as the screen scales. Show the price and colorway once, under the hero image. Show the 26 sizes in ascending order, each labelled like 'M 11 / W 12.5', with a tag that reads 'In stock', 'Low stock' or 'Out of stock'. In stock is the default button, low stock is the default button with red text, and out of stock is a disabled button. Hand back a running prototype, and tell me how to run and view it.

## Matching sold-out sizes to the stock list

Each row in `nike_pegasus_size_stock_b2ebb9fac7f74d6a8bb3432d7642176f.json` carries its own `sku` and a `stock_status` field (`in_stock`, `low_stock`, or `sold_out`) for that specific size. `lib/pegasus.js` reads the file fresh on every request and passes each row's `sku` and `status` straight through to its button, so `components/SizeButton.js` only has to check `size.status === "sold_out"` to disable that one button and show the "Out of stock" tag — there's no separate sold-out list to cross-reference; the stock status already lives on the same row as the size label.
