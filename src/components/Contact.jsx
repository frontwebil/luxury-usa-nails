import { useState } from "react";
import { useLanguage } from "../contexts/LanguageContext";

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
  for (let hour = 9; hour < 19; hour++) {
    timeSlots.push(`${hour.toString().padStart(2, "0")}:00`);
    timeSlots.push(`${hour.toString().padStart(2, "0")}:30`);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(t("contact.form.successMessage"));
    setFormData({
      name: "",
      phone: "",
      date: "",
      time: "",
      service: "",
      message: "",
    });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const getAvailableTimeSlots = () => {
    const now = new Date();
    const selectedDate = new Date(formData.date);

    return timeSlots.filter((slot) => {
      if (formData.date !== new Date().toISOString().split("T")[0]) {
        return true;
      }

      const [hours, minutes] = slot.split(":");
      const slotTime = new Date();
      slotTime.setHours(hours, minutes, 0, 0);

      return slotTime > now;
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
            <button type="submit" className="submit-btn">
              {t("contact.form.submit")}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
