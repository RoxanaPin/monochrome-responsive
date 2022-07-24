export default function Footer() {
  return (
    <footer className="footer ">
      <section className="footer-primary">
        <div className="footer-primary-inner container">
          <nav className="footer-nav">
            <ul>
              <li>
                <a href="https://x.ro" title="call us">
                  call us
                </a>
              </li>

              <li>
                <a href="https://x.ro" title="+44 (0)10 2345 6789">
                  +44 (0)10 2345 6789
                </a>
              </li>

              <li>
                <a href="https://x.ro" title="email customer care">
                  email customer care
                </a>
              </li>

              <li>
                <a href="https://x.ro" title="see mobile version">
                  see mobile version
                </a>
              </li>
            </ul>

            <ul>
              <li>
                <a href="https://x.ro" title="style & fit advice">
                  style & fit advice
                </a>
              </li>

              <li>
                <a href="https://x.ro" title="faqs">
                  faqs
                </a>
              </li>

              <li>
                <a href="https://x.ro" title="delivery">
                  delivery
                </a>
              </li>

              <li>
                <a href="https://x.ro" title="exchanges & returns">
                  exchanges & returns
                </a>
              </li>
            </ul>

            <ul>
              <li>
                <a href="https://x.ro" title="about us">
                  about us
                </a>
              </li>

              <li>
                <a href="https://x.ro" title="careers">
                  careers
                </a>
              </li>

              <li>
                <a href="https://x.ro" title="affiliates">
                  affiliates
                </a>
              </li>

              <li>
                <a href="https://x.ro" title="advertising">
                  advertising
                </a>
              </li>
            </ul>

            <ul>
              <li> sign up for our newsletter</li>

              <li>
                <form action="">
                  <input
                    type="email"
                    placeholder="email@email.com"
                    name="email"
                    required
                  />
                </form>
              </li>

              <li>
                <button type="submit">SUBMIT</button>
              </li>

              <li>
                <a
                  href="https:youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Follow Thread Affair on YouTube"
                >
                  <i className="fa-brands fa-youtube"></i>
                </a>

                <a
                  href="https:twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Follow Thread Affair on Twitter"
                >
                  <i className="fa-brands fa-twitter"></i>
                </a>

                <a
                  href="https:facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Follow Thread Affair on Facebook"
                >
                  <i className="fa-brands fa-facebook-f"></i>
                </a>

                <a
                  href="https:instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Follow Thread Affair on Instagram"
                >
                  <i className="fa-brands fa-instagram-square"></i>
                </a>
              </li>
            </ul>
          </nav>

          <section className="footer-contact">
            <h1>
              <span>MONOCHROME</span> INC.
            </h1>

            <p>
              Largo Augusto 3, Milano, 20122, Milano, IT
              {/* display block pe ancore, no br */}
              <a href="tel:+0039 02 760 003 66" title="Call us">
                Tel: 0039 02 760 003 66
              </a>
              {/* use a:nth-of-type(1) */}
              <a href="mailto:office@monochrome.com" title="Email us">
                office@monochrome.com
              </a>
            </p>
          </section>

          <section className="footer-support">
            <ul>
              <li>
                <i className="fa-solid fa-voicemail"></i>
                <a href="https://x.ro" title="Support">
                  SUPPORT
                </a>
              </li>

              <li>
                <i className="fa-solid fa-comment-dots"></i>
                <a href="https://x.ro" title="Chat">
                  CHAT
                </a>
              </li>

              <li>
                <i className="fa-solid fa-at"></i>
                <a href="https://x.ro" title="Email">
                  EMAIL
                </a>
              </li>
            </ul>
          </section>
        </div>
      </section>

      <section className="footer-secondary text-center mt-4">
        <p>©2022 Monochrome. All Rights Reserved.</p>

        <p>
          Designed by
          <img
            title=""
            data-test=""
            className="ms-2"
            src="/images/pixellab_logo.png"
            alt="Pixellab@student"
          ></img>
        </p>
      </section>
    </footer>
  );
}
