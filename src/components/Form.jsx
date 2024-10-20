import { useState } from "react";
import styles from "./Form.module.css";

const Form = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      {/* First Name and Last Name */}
      <div className={styles.row}>
        <div className={styles.inputGroup}>
          <label htmlFor="firstName">First Name</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
        </div>
        <div className={styles.inputGroup}>
          <label htmlFor="lastName">Last Name</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
          />
        </div>
      </div>

      {/* Email */}
      <div className={styles.row}>
        <div className={styles.inputGroup}>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
      </div>

      {/* Phone */}
      <div className={styles.row}>
        <div className={styles.inputGroup}>
          <label htmlFor="phone">
            Phone <span className={styles.optional}>(optional)</span>
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
          />
        </div>
      </div>

      {/* Message */}
      <div className={styles.row}>
        <div className={styles.inputGroup}>
          <label htmlFor="message">
            Message <span className={styles.optional}>(optional)</span>
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows="4"
          ></textarea>
        </div>
      </div>

      {/* Submit Button */}
      <div className={styles.row}>
        <button type="submit" className={styles.submit}>
          SUBMIT
        </button>
      </div>
    </form>
  );
};

export { Form };
