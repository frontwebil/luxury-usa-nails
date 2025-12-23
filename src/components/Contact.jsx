import { useState } from "react";
import { useLanguage } from "../contexts/LanguageContext";
import axios from "axios";
import { toast } from "react-toastify";

export default function Contact() {
  const { t, language } = useLanguage();
  const today = new Date().toISOString().split("T")[0];
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    date: today,
    time: "",
    service: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const serviceOptions = [
    { id: "manicure", labelDe: "Maniküre", labelEn: "Manicure" },
    { id: "pedicure", labelDe: "Pediküre", labelEn: "Pedicure" },
    { id: "gel", labelDe: "Gel Nägel", labelEn: "Gel Nails" },
    { id: "acrylic", labelDe: "Acryl Nägel", labelEn: "Acrylic Nails" },
    { id: "nailArt", labelDe: "Nageldesign", labelEn: "Nail Art" },
    {
      id: "french",
      labelDe: "French Maniküre/Pediküre",
      labelEn: "French Manicure/Pedicure",
    },
    { id: "spa", labelDe: "Spa Behandlung", labelEn: "Spa Treatment" },
    {
      id: "removal",
      labelDe: "Nagellack entfernen",
      labelEn: "Polish Removal",
    },
  ];

  const timeSlots = [];
  const now = new Date();

  for (let hour = 9; hour < 19; hour++) {
    for (let minute of [0, 30]) {
      const slotTime = new Date();
      slotTime.setHours(hour, minute, 0, 0);

      // якщо дата = сьогодні → не показуємо час, що вже пройшов
      if (
        formData.date === now.toISOString().split("T")[0] &&
        slotTime <= now
      ) {
        continue;
      }

      timeSlots.push(
        `${hour.toString().padStart(2, "0")}:${minute
          .toString()
          .padStart(2, "0")}`
      );
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (loading) {
      return;
    }

    setLoading(true);

    const botToken = import.meta.env.VITE_TELEGRAM_BOT_TOKEN;
    const chatId = import.meta.env.VITE_TELEGRAM_CHAT_ID;

    const url = `https://api.telegram.org/bot${botToken}/sendMessage`;

    try {
      const htmlSend = `
<b>📩 New Booking Request</b>
👤 Name: ${formData.name}
📞 Phone: ${formData.phone}
📅 Date: ${formData.date}  ⏰ Time: ${formData.time}
💅 Service: ${formData.service}
💬 Message: ${formData.message}
`.trim();

      const response = await axios.post(url, {
        chat_id: chatId,
        text: htmlSend,
        parse_mode: "HTML",
      });

      if (response.data.ok) {
        toast.success("Booking sent successfully!");
        setFormData({
          name: "",
          phone: "",
          date: "",
          time: "",
          service: "",
          message: "",
        });
        setLoading(false);
      }
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="section-header">
          <h2>{t("contact.title")}</h2>
          <p>{t("contact.subtitle")}</p>
        </div>
        <div className="contact-content">
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                name="name"
                placeholder={t("contact.form.name")}
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="tel"
                name="phone"
                placeholder={t("contact.form.phone")}
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="date"
                name="date"
                style={{ maxWidth: "100%" }}
                placeholder={"Choose Date"}
                min={new Date().toISOString().split("T")[0]}
                value={formData.date}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <select
                name="time"
                value={formData.time}
                onChange={handleChange}
                required
                className="time-select"
              >
                <option value="">{t("contact.form.time")} *</option>
                {timeSlots.map((slot) => (
                  <option key={slot} value={slot}>
                    {slot}
                  </option>
                ))}
              </select>
            </div>
            <div className="form-group">
              <select
                name="service"
                value={formData.service}
                onChange={handleChange}
                required
                className="service-select"
              >
                <option value="">{t("contact.form.services")}</option>
                {serviceOptions.map((service) => (
                  <option key={service.id} value={service.id}>
                    {language === "de" ? service.labelDe : service.labelEn}
                  </option>
                ))}
              </select>
            </div>
            <div className="form-group">
              <textarea
                name="message"
                placeholder={t("contact.form.message")}
                value={formData.message}
                onChange={handleChange}
                rows="4"
              ></textarea>
            </div>
            <button type="submit" className="submit-btn" disabled={loading}>
              {t("contact.form.submit")}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
