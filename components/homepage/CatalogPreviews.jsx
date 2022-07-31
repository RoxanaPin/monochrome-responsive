import ProductTile from '../catalog/ProductTile';

export default function CatalogPreviews() {
  return (
    <>
      {/* <section className="catalog-preview container">
        <header>
          <h1>

            New Stuff
          </h1>

          <p>
            Accomplish new achievements with a bold new style from the brilliant
            collection of mens designer suits. <br></br>
            For the finest custom tailored experience, be sure to explore our
            selection of premium fabrics from one of the worlds oldest fabric
            mills, Vitale Barberis Canonico.
          </p>
        </header>

        <div className="product-tiles row">
          <div className="col-12 col-lg-4 mb-5 mb-lg-0">
            <ProductTile></ProductTile>
          </div>
          <div className="col-12 col-lg-4 mb-5 mb-lg-0">
            <ProductTile></ProductTile>
          </div>
          <div className="col-12 col-lg-4">
            <ProductTile></ProductTile>
          </div>

          <div className="col-12 col-lg-4">
            <ProductTile></ProductTile>
          </div>
        </div>
      </section> */}

      <section className="catalog-preview container grid-layout">
        <header>
          <h1>
            New Stuff
            {/* <span>Most loved</span> */}
          </h1>

          <p></p>
        </header>

        <div className="product-tiles">
          <ProductTile></ProductTile>

          <ProductTile></ProductTile>

          <ProductTile></ProductTile>

          <ProductTile></ProductTile>
        </div>
      </section>

      <section className="catalog-preview container grid-layout">
        <header>
          <h1>
            Most loved
            {/* <span>Most loved</span> */}
          </h1>

          <p></p>
        </header>

        <div className="product-tiles">
          <ProductTile></ProductTile>

          <ProductTile></ProductTile>

          <ProductTile></ProductTile>

          <ProductTile></ProductTile>
        </div>
      </section>

      <section className="catalog-preview container flex-layout">
        <div className="home-content">
          <div className="aside">
            <a href="https://github.com/" title="Monochrome Desk">
              <img
                src="/images/banners/oliver-pecker-HONJP8DyiSM-unsplash.png"
                alt="Monochrome Desk"
              />
            </a>
          </div>

          <div className="section">
            <h2>
              <span>Watches for entrepreneurs</span>
            </h2>
            <p>
              But I must explain to you how all this mistaken idea of denouncing
              pleasure and praising pain was born and I will give you a complete
              account of the system, and expound the actual teachings of the
              great explorer of the truth, the master-builder of human
              happiness. No one rejects, dislikes, or avoids pleasure itself,
              because.
            </p>

            <p>
              But I must explain to you how all this mistaken idea of denouncing
              pleasure and praising pain was born and I will give you a complete
              account of the system, and expound the actual teachings of the
              great explorer of the truth, the master-builder of human
              happiness. No one rejects, dislikes, or avoids pleasure itself,
              because.
            </p>
          </div>
        </div>
      </section>

      <section className="catalog-preview container flex-layout">
        <header>
          <h1>
            MEN`S
            {/* <span>MEN`S</span> */}
          </h1>

          <p></p>
        </header>

        <div className="product-tiles">
          <ProductTile></ProductTile>

          <ProductTile></ProductTile>

          <ProductTile></ProductTile>

          <ProductTile></ProductTile>
        </div>

        <header>
          <h1>
            <button className="button" type="button" title="view all">
              view all
            </button>
          </h1>
        </header>
      </section>

      <section className="catalog-preview container flex-layout">
        <header>
          <h1>
            WOMEN`S
            {/* <span>MEN`S</span> */}
          </h1>

          <p></p>
        </header>

        <div className="product-tiles">
          <ProductTile></ProductTile>

          <ProductTile></ProductTile>

          <ProductTile></ProductTile>

          <ProductTile></ProductTile>
        </div>

        <header>
          <h1>
            <button className="button" type="button" title="view all">
              view all
            </button>
          </h1>
        </header>
      </section>
    </>
  );
}
