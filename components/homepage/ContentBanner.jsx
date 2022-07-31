export default function ContentBanner() {
  return (
    <div className="content-banner">
      <div className="content-banner-inner container">
        {/* <div className="text-center">
          <h1>Custom Suits</h1>
          <h2>Get back to work in style</h2>
        </div> */}

        {/* <div>
          <a
            href="https://x.ro"
            title="Create your suit"
            className="button button-large text-uppercase"
          >
            Create your suit
          </a>
        </div> */}

        <div className="header-support d-none d-lg-block">
          <ul>
            <li>
              <a
                href="https:youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                title="Follow Thread Affair on YouTube"
              >
                <i className="fa-brands fa-youtube"></i>
              </a>
            </li>

            <li>
              <a
                href="https:twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                title="Follow Thread Affair on Twitter"
              >
                <i class="fa-brands fa-twitter"></i>
              </a>
            </li>

            <li>
              <a
                href="https:facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                title="Follow Thread Affair on Facebook"
              >
                <i className="fa-brands fa-facebook-f"></i>
              </a>
            </li>

            <li>
              <a
                href="https:instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                title="Follow Thread Affair on Instagram"
              >
                <i className="fa-brands fa-instagram-square"></i>
              </a>
            </li>

            <li>
              <a href="tel:+44(0)1023456789" title="Call us">
                CALL US +44 (0)10 2345 6789
              </a>
            </li>
          </ul>
        </div>

        <div className="header-search d-lg-none">
          <ul>
            <li>
              <a href="http://pixellab.ro" title="Menu">
                <i className="fa-solid fa-magnifying-glass"></i>
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
              <form action="">
                <i className="fa-solid fa-magnifying-glass"></i>
                <input
                  type="text"
                  name="search"
                  placeholder="Search"
                  required
                />
                <br></br>
              </form>
            </li>

            <li>
              <a href="http://pixellab.ro" title="My Account">
                <i className="fa-solid fa-user"></i>
              </a>
            </li>
            <a href="http://pixellab.ro" title="Favorites">
              <i className="fa-solid fa-heart"></i>
            </a>
            <li></li>

            <li>
              <a href="http://pixellab.ro" title="Cart">
                <i className="fa-solid fa-cart-shopping"></i>
                <span>3</span>
              </a>
            </li>
          </ul>
        </div>

        <footer className="content-banner-copy">
          {/* <p className="m-0">
            A Tailored Suit that will fit you perfectly is a dream for
            everybody.
          </p> */}

          {/* <p className="m-0 d-none d-lg-block">
            <a href="/" title="New Arrivals" class="loader">
              NEW ARRIVALS
            </a>

            <a href="/" title="Brands" class="loader">
              BRANDS
            </a>
          </p> */}

          <nav className="nav-secondary d-none d-lg-block">
            <ul>
              <li>
                <a href="https://x.ro" title="NEW ARRIVALS">
                  NEW ARRIVALS
                </a>
              </li>

              <li>
                <a href="https://x.ro" title="BRANDS">
                  BRANDS
                </a>
              </li>

              <li>
                <a href="https://x.ro" title="MEN'S">
                  MEN'S
                </a>
              </li>

              <li>
                <a href="https://x.ro" title="WOMEN'S">
                  WOMEN'S
                </a>
              </li>

              <li>
                <a href="https://x.ro" title="ACCESORIES">
                  ACCESORIES
                </a>
              </li>

              <li>
                <a href="https://x.ro" title="LOOKBOOK">
                  LOOKBOOK
                </a>
              </li>
            </ul>
          </nav>
        </footer>
      </div>
    </div>
  );
}
