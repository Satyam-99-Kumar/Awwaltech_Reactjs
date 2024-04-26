import React, { useState } from "react";
import style from "./ContactForm.module.scss";
import bannerImage from "../../../assets/Contact/banner.png";

function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [budget, setBudget] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState({}); // State for validation errors

  const validateForm = (event) => {
    event.preventDefault();

    const validationErrors = {};

    if (!name.trim()) {
      validationErrors.name = "Please enter your name.";
    }

    if (!email.trim()) {
      validationErrors.email = "Please enter your email.";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      validationErrors.email = "Please enter a valid email address.";
    }

    if (phone.trim() && !/^\d{10}$/.test(phone)) {
      validationErrors.phone = "Please enter a valid 10-digit phone number.";
    }

    if (!message.trim()) {
      validationErrors.message = "Please enter your message.";
    }

    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      console.log("Form submitted successfully!", {
        name,
        email,
        phone,
        budget,
        message,
      });
      alert("Form submitted successfully!");

      setName("");
      setEmail("");
      setPhone("");
      setBudget("");
      setMessage("");
    } else {
      Object.values(validationErrors).forEach((error) => {
        alert(error);
      });
    }
  };
  const handleForm = () => {
    console.log(name, email, phone, budget, message);
  };

  return (
    <div className={style.contactform}>
      <form className={style.contactform__form} onSubmit={validateForm}>
        <div className={style.inputGroup}>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your Name"
            className={errors.name && style.inputError}
          />
          {errors.name && (
            <div className={style.errorMessage}>{errors.name}</div>
          )}
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your Email"
            className={errors.email && style.inputError}
          />
          {errors.email && (
            <div className={style.errorMessage}>{errors.email}</div>
          )}
        </div>
        <div className={style.inputGroup}>
          <input
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="Phone (Optional)"
            className={errors.phone && style.inputError}
          />
          {errors.phone && (
            <div className={style.errorMessage}>{errors.phone}</div>
          )}
          <input
            type="text"
            value={budget}
            onChange={(e) => setBudget(e.target.value)}
            placeholder="Your Budget (Optional)"
            className={errors.budget && style.inputError}
          />
          {errors.budget && (
            <div className={style.errorMessage}>{errors.budget}</div>
          )}
        </div>
        <textarea
          placeholder="Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className={errors.message && style.inputError}
        />
        {errors.message && (
          <div className={style.errorMessage}>
            <p>{errors.message}</p>
          </div>
        )}

        <button onClick={handleForm}>Submit</button>
      </form>

      <div className={style.contactform__image}>
        <img src={bannerImage} alt="" />
      </div>
    </div>
  );
}

export default ContactForm;
