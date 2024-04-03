import style from "./ContactForm.module.scss";
import bannerImage from "../../../assets/Contact/banner.png";
import { useState } from "react";

function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [budget, setBudget] = useState("");
  const [message, setMessage] = useState("");

  const handleForm = () => {
    console.log(name, email, phone, budget, message);
  };

  return (
    <div className={style.contactform}>
      <form className={style.contactform__form}>
        <div className={style.inputGroup}>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your Name"
          />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your Email"
          />
        </div>
        <div className={style.inputGroup}>
          <input
            type="text"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="Phone"
          />
          <input
            type="text"
            value={budget}
            onChange={(e) => setBudget(e.target.value)}
            placeholder="Your Budget"
          />
        </div>
        <textarea
          placeholder="Message"
          value={message}
          onCanPlay={(e) => setMessage(e.target.value)}
        />
        <button onClick={handleForm}>Submit</button>
      </form>

      <div className={style.contactform__image}>
        <img src={bannerImage} alt="" />
      </div>
    </div>
  );
}

export default ContactForm;
