import { useState } from "react";
import style from "./GlobalContact.module.scss";

function GlobalContact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [budget, setBudget] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      name: name,
      emaiil: email,
      phone: phone,
      budget: budget,
    };

    localStorage.setItem("formData", JSON.stringify(formData));

    setName("");
    setEmail("");
    setPhone("");
    setBudget("");
    alert("Form submitted successfully!");

  };

  return (
    <div className={style.gcontact}>
      <div className={style.gcontact__left}>
        <h1>
          <div>Do you have a</div>
          <div>project in mind?</div>
        </h1>
        <p>
          Wish to connect with us? We will be happy to hear from you. Fill this
          form so we can learn more about your requirements.
        </p>

        <form onSubmit={handleSubmit}>
          <div className={style.inputGroup}>
            <input
              type="text"
              value={name}
              placeholder="Your Name"
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="email"
              value={email}
              placeholder="Your Email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className={style.inputGroup}>
            <input
              type="text"
              value={phone}
              placeholder="Your Phone"
              onChange={(e) => setPhone(e.target.value)}
            />
            <input
              type="text"
              value={budget}
              placeholder="Your Budget"
              onChange={(e) => setBudget(e.target.value)}
            />
          </div>
          <textarea rows={10} placeholder="Message" />
          <button>Submit</button>
        </form>
      </div>
      <div className={style.gcontact__right}></div>
      <div></div>
    </div>
  );
}

export default GlobalContact;
