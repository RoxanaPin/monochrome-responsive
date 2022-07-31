export default function ProductTile() {
  return (
    <article className="product-tile">
      <header className="product-tile-header">
        <a
          href="https://x.ro"
          className="product-tile-image"
          title="Monochrome"
        >
          <img
            src="/images/products/recently_viewed_thumbnail_2.png"
            alt="Monochrome"
          ></img>
        </a>

        <span className="badge badge-oversized">
          <i class="fa-regular fa-heart"></i>
        </span>

        <div className="mt-4 text-center">
          <h1 className="product-tile-title">
            {/* <span>Traveller</span> */}
            MONOCHROME
          </h1>

          {/* <h2 className="product-tile-subtitle">London fit-Semi-slim</h2> */}
        </div>
      </header>

      <section className="product-tile-pricing text-center">
        <span className="catalog-price d-block">$425</span>

        {/* <span className="price">
          USD
          <span>299</span>
        </span>*/}
      </section>

      <footer className="product-tile-controls text-center mt-4">
        <button className="button" type="button" title="Add to Cart">
          Add to Cart
        </button>
      </footer>
    </article>
  );
}
