export default function HeaderSecondary() {
  return (
    <section className="header-secondary">
      <div className="header-logo">
        <a href="http://pixellab.ro" title="Monochrome">
          <img src="/images/banners.banner.jpg" alt="Monochrome - Logo"></img>
        </a>
      </div>

      <div className="header-support d-none d-lg-block">
        <ul>
          <li>
            <a href="tel: +44 (0)10 2345 6789" title="Call us">
            CALL US +44 (0)10 2345 6789
            </a>{' '}

          </li>


        </ul>
      </div>

      <div className="header-search d-lg-none">
        <ul>
          <li>
            <a href="http://pixellab.ro" title="Menu">
              <i className="fa-solid fa-bars"></i>
            </a>
          </li>

          <li>
            <a href="http://pixellab.ro" title="Search">
              <i className="fa-solid fa-search"></i>
            </a>
          </li>
        </ul>
      </div>

      <div className="header-controls">
        <ul>
          <li>
            <a href="http://pixellab.ro" title="Cart">
              <i className="fa-solid fa-cart-shopping"></i>
            </a>
          </li>

          <li>
            <a href="http://pixellab.ro" title="Cart">
              <i className="fa-solid fa-cart-shopping"></i>
            </a>
          </li>

          <li>
            <a href="http://pixellab.ro" title="Cart">
              <i className="fa-solid fa-cart-shopping"></i>
            </a>
          </li>

        </ul>
      </div>
    </section>
  );
}
