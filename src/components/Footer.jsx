import { Link } from "react-router-dom";
import { useLanguage } from "../contexts/LanguageContext";
import { MdOutlinePhoneInTalk } from "react-icons/md";
import { FaFacebook, FaInstagram, FaTelegram } from "react-icons/fa";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h4>{t("contact.visit")}</h4>
            <p>
              <strong>Luxury USA Nails Oppenheim</strong>
              <br />
              Im SBK Edeka Markt <br />
              Sant’ Ambrogio-Ring 6 <br />
              55276 Oppenheim
            </p>
          </div>
          <div className="footer-section">
            <h4>{t("contact.hours")}</h4>
            <p>{t("contact.schedule.weekdays")}</p>
          </div>
          <div className="footer-section">
            <h4>{t("contact.contactInfo")}</h4>
            <div className="footer-icons">
              <a
                href="tel:+49 6133 578 68 86"
                className="footer-icon"
                aria-label="Phone"
              >
                <MdOutlinePhoneInTalk /> {t("contact.phone")}
              </a>
              <a
                href="https://t.me/luxuryusanails"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-icon"
                aria-label="Telegram"
              >
                <FaTelegram />
                Telegram
              </a>
              <a
                href="https://www.instagram.com/luxurynails.op/"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-icon"
                aria-label="Instagram"
              >
                <FaInstagram />
                Instagram
              </a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>
            &copy; {new Date().getFullYear()} Luxury USA Nails Oppenheim.{" "}
            {t("footer.rights")}
          </p>
        </div>
      </div>
    </footer>
  );
}
