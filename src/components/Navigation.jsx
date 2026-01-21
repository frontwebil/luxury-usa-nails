import { Link, useLocation } from "react-router-dom";
import { useLanguage } from "../contexts/LanguageContext";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { MdOutlinePhoneInTalk } from "react-icons/md";

export default function Navigation() {
  const { language, switchLanguage, t } = useLanguage();
  const location = useLocation();
  const { pathname } = location;

  console.log(pathname);

  const scrollToSection = (id) => {
    if (location.pathname !== "/") {
      window.location.href = `/#${id}`;
    } else {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  const toggleLanguage = () => {
    switchLanguage(language === "de" ? "en" : "de");
  };

  return (
    <nav className={`navigation ${pathname === "/prices" && "scrolled"}`}>
      <div className="nav-container">
        <div className="nav-top-row">
          <Link to="/" className="nav-logo">
            <h1>Luxury USA Nails</h1>
            <span className="nav-location" style={{ textAlign: "left" }}>
              {t("hero.subtitle")}
            </span>
          </Link>

          <div className="nav-right">
            <div className="nav-contact-icons">
              <a
                href="tel:+4961331234567"
                className="nav-icon"
                aria-label="Phone"
              >
                <MdOutlinePhoneInTalk />
              </a>
              <a
                href="https://www.instagram.com/luxurynails.op/"
                target="_blank"
                rel="noopener noreferrer"
                className="nav-icon"
                aria-label="Instagram"
              >
                <FaInstagram />
              </a>
              <a
                href="https://facebook.com/luxuryusanails"
                target="_blank"
                rel="noopener noreferrer"
                className="nav-icon"
                aria-label="Facebook"
              >
                <FaFacebook />
              </a>
            </div>
            <button className="lang-switch" onClick={toggleLanguage}>
              {language === "de" ? "EN" : "DE"}
            </button>
          </div>
        </div>

        <div className="nav-bottom-row">
          <ul className="nav-links">
            <li>
              <Link to="/prices">{t("nav.prices")}</Link>
            </li>
            <li>
              <button onClick={() => scrollToSection("about")}>
                {t("nav.about")}
              </button>
            </li>
            <li>
              <button onClick={() => scrollToSection("gallery")}>
                {t("nav.gallery")}
              </button>
            </li>
            <li>
              <button onClick={() => scrollToSection("contact")}>
                {t("nav.contact")}
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
